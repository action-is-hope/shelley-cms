import { Button, Checkbox } from "@actionishope/shelley";
import { Finder } from "../../components/Finder/Finder";
import { BasicHeader } from "./Header.examples";
import Add from "../../components/Icons/Add";
import { default as ContentIcon } from "../../components/Icons/Content";

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
        addButton={
          <Button
            vol={3}
            icon={<Add aria-hidden="true" />}
            onPress={() => console.log("Add action")}
          >
            Add Content
          </Button>
        }
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
