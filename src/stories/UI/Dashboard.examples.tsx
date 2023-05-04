import { P, ProgressCircle } from "@actionishope/shelley";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { Widget } from "../../components/Widget/Widget";
import { BasicHeader } from "./Header.examples";
import { UserWidget } from "../../components/UserWidget/UserWidget";
import { StaleContentWidget } from "../../components/StaleContentWidget/StaleContentWidget";

export const BasicExample = () => {
  return (
    <>
      <BasicHeader />

      <Dashboard title="Dashboard" currentSiteName="United Sates of America">
        <UserWidget
          user={{
            name: "mnapthine",
            email: "mnapthine@gmail.com",
            image:
              "https://s.gravatar.com/avatar/2f9484db7dd94c6220be03f4374ab47f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmn.png",
          }}
          gridArea="userDetails"
        />
        <Widget title="My content" gridArea="myContent">
          <P vol={2}>Tabs for content</P>
        </Widget>
        <Widget title="My sites" gridArea="mySites">
          <P vol={2}>TBC</P>
        </Widget>
        <StaleContentWidget
          title={"Stale content"}
          gridArea="staleContent"
          circleProps={{
            "aria-label": "x pages out of x are stale",
            value: 1500,
            maxValue: 2000,
          }}
        >
          <P vol={2}>Showing total pages last updated 90 or more days ago.</P>
        </StaleContentWidget>
        <Widget title={"Report an issue"} gridArea="reportIssue">
          <P vol={2}>
            Send a support email to <a href="#">xxx@britishcouncil.org</a>
          </P>
        </Widget>
      </Dashboard>
    </>
  );
};
