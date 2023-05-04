import { useState } from "react";
import { Header } from "../../components/Header/Header";

export const BasicHeader = () => {
  const sites = [
    {
      key: "usa",
      name: "United States",
    },
    {
      key: "uk",
      name: "United Kingdom",
    },
  ];
  const [selectedSite, setSelectedSite] = useState("usa");

  return (
    <Header
      user={{
        name: "mnapthine",
        email: "mnapthine@gmail.com",
        image:
          "https://s.gravatar.com/avatar/2f9484db7dd94c6220be03f4374ab47f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmn.png",
      }}
      sites={sites}
      selectedSite={selectedSite}
      onSignIn={() => console.log("onSignIn called")}
      onSignOut={() => console.log("onSignOut called")}
      onSiteSelection={(key) => setSelectedSite(key)}
      themeSwitcherProps={{ onChange: () => console.log("theme switched") }}
    >
      <a
        href="/finder"
        style={{
          textDecoration: "none",
        }}
      >
        Content
      </a>
      <a
        href="/finder"
        style={{
          textDecoration: "none",
        }}
      >
        Media
      </a>
      <a
        href="/admin"
        style={{
          textDecoration: "none",
        }}
      >
        Settings
      </a>
    </Header>
  );
};
