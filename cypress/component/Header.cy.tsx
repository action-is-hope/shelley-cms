import React from "react";
import { P, TextField } from "@actionishope/shelley";
import { Header, HeaderProps } from "../../src/components/Header/Header";
import { ContentArea } from "../../src/components/ContentArea/ContentArea";

const sitesMenuTrigger = '[data-id="header--sitesMenuTrigger"]';
const siteName = '[data-id="header--currentSiteName"]';
const sitesDialog = '[data-id="header--sitesDialog"]';
const sitesListBox = '[data-id="header--sitesListBox"]';
const siteOptionUK = '[data-key="uk"]';
const siteOptionUSA = '[data-key="usa"]';

const userMenuTrigger = '[data-id="header--userMenuTrigger"]';
const userDetails = '[data-id="header--userDetails"]';
const userName = '[data-id="header--userName"]';
const userEmail = '[data-id="header--userEmail"]';

const nav = '[data-id="header--nav"]';

const themeSwitcher = '[data-id="header--themeSwitcher"]';

const signInButton = '[data-id="header--signInButton"]';
const signOutButton = '[data-id="header--signOutButton"]';

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

const userProps = {
  name: "mnapthine",
  email: "mnapthine@gmail.com",
  image:
    "https://s.gravatar.com/avatar/2f9484db7dd94c6220be03f4374ab47f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmn.png",
};
export const HeaderTemplate = (args: Omit<HeaderProps, "children">) => {
  return (
    <Header data-id="header" {...args}>
      <nav data-id="header--nav">
        <a
          href="/finder"
          style={{
            textDecoration: "none",
          }}
        >
          Content
        </a>
      </nav>
    </Header>
  );
};

describe("Header", () => {
  describe("Basics", () => {
    it("renders basic header logged out state", () => {
      const onSignInSpy = cy.spy().as("onSignInSpy");
      const onSignOutSpy = cy.spy().as("onSignOutSpy");
      const onSiteSelectionSpy = cy.spy().as("onSiteSelectionSpy");
      cy.mount(
        <HeaderTemplate
          onSignIn={onSignInSpy}
          onSignOut={onSignOutSpy}
          onSiteSelection={onSiteSelectionSpy}
          sites={[]}
        />
      );
      cy.get(signInButton).realClick();
      cy.get("@onSignInSpy").should("have.been.called");
      cy.get(sitesMenuTrigger).should("be.disabled");
      cy.get(userMenuTrigger).should("not.exist");
      cy.get(nav).should("exist");
    });

    it("renders basic header logged in state", () => {
      const onSignInSpy = cy.spy().as("onSignInSpy");
      const onSignOutSpy = cy.spy().as("onSignOutSpy");
      const onSiteSelectionSpy = cy.spy().as("onSiteSelectionSpy");
      cy.mount(
        <HeaderTemplate
          onSignIn={onSignInSpy}
          onSignOut={onSignOutSpy}
          onSiteSelection={onSiteSelectionSpy}
          sites={sites}
          user={userProps}
          selectedSite="UK"
        />
      );
      cy.get(signInButton).should("not.exist");
      cy.get(userMenuTrigger).should("exist");

      // cy.get(signInButton).realClick();
      // cy.get("@onSignInSpy").should("have.been.called");
      // cy.get("@onSignOutSpy").should("have.been.called");
    });
  });
});
