import themes from "../src/styles";

import { initializeRTL } from "storybook-addon-rtl";
initializeRTL();
const sampleViewports = {
  tiny: {
    name: "Tiny",
    styles: {
      height: "568px",
      width: "338px",
    },
    type: "mobile",
  },
  mobile: {
    name: "Mobile",
    styles: {
      height: "100%",
      width: "568px",
    },
    type: "mobile",
  },
  tablet: {
    name: "Tablet",
    styles: {
      height: "100%",
      width: "950px",
    },
    type: "tablet",
  },
  laptop: {
    name: "Laptop",
    styles: {
      height: "768px",
      width: "1025px",
    },
  },
  wideLaptop: {
    name: "Wide Laptop",
    styles: {
      height: "100%",
      width: "1180px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      height: "100%",
      width: "1440px",
    },
  },
  large: {
    name: "Large",
    styles: {
      height: "100%",
      width: "1680px",
    },
  },
};

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // options: {
  //   storySort: {
  //     method: "alphabetical",
  //     order: [],
  //     locales: "",
  //   },
  // },
  viewport: {
    viewports: sampleViewports,
  },
};
export const globalTypes = {
  shelleyTheme: {
    name: "Theme",
    description: "Theme Switcher",
    // defaultValue: themes["shelley"],
    toolbar: {
      icon: "switchalt",
      title: "Theme Switch",
      items: [
        {
          value: "none",
          title: "None",
        },
        {
          value: "light",
          title: "Light - Default",
        },
        {
          value: "dark",
          title: "Dark",
        },
      ],
    },
  },
};
// preview.js

const withShelleyTheme = (Story, context) => {
  document.documentElement.setAttribute(
    "class",
    context.globals.shelleyTheme !== "none" ? themes.cms : ""
  );

  document.documentElement.setAttribute(
    "data-theme",
    context.globals.shelleyTheme
  );

  // Create a themed div for portal content so styles still work. Not needed if you put your theme class on html.
  if (!document.getElementById("portal")) {
    const portal = document.createElement("div");
    portal.setAttribute("id", "portal");
    document.body.appendChild(portal);
  }
  return (
    <div
      style={{
        background:
          context.globals.shelleyTheme === "dark"
            ? "rgb(23, 26, 35)"
            : "#e8e8e8",
      }}
    >
      <Story {...context} />
    </div>
  );
};

export const decorators = [withShelleyTheme];
