import { Checkbox } from "@actionishope/shelley";
import { Finder } from "../../components/Finder/Finder";
import { BasicHeader } from "./Header.examples";
import { default as ContentIcon } from "../../components/icons/Content";

export const BasicExample = () => {
  return (
    <>
      <BasicHeader />

      <Finder
        title={
          <>
            <ContentIcon aria-hidden="true" />
            Content Finder
          </>
        }
        addButtonText={"Add Content"}
        onAddAction={() => console.log("Add Content")}
        searchFieldProps={{
          onChange: (value) => console.log(value),
          placeholder: "Search for content",
        }}
        sideBarContent={(isMobile: boolean) => (
          <div>
            <Checkbox>Live</Checkbox>
            {isMobile ? "mobileOn" : "mobileOff"}
          </div>
        )}
      >
        {(isMobile: boolean) => (
          <p>Main Content. {isMobile ? "mobileOn" : "mobileOff"}</p>
        )}
      </Finder>
    </>
  );
};
