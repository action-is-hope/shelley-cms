import {
  Button,
  Checkbox,
  TableView,
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
} from "@actionishope/shelley";
import { Finder } from "../../components/Finder/Finder";
import { BasicHeader } from "./Header.examples";
import Add from "../../components/icons/Add";
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
        <>
          {(isMobile: boolean) => (
            <p>Main Content. {isMobile ? "mobileOn" : "mobileOff"}</p>
          )}
          <TableView
            aria-label="Example table with static contents"
            selectionMode="multiple"
            onRowAction={() => console.log("Opening page...")}
            vol={1}
          >
            <TableHeader>
              <Column>Name</Column>
              <Column>Type</Column>
              <Column align="end">Date Modified</Column>
            </TableHeader>
            <TableBody>
              <Row>
                <Cell>Games</Cell>
                <Cell>File folder</Cell>
                <Cell>6/7/2020</Cell>
              </Row>
              <Row>
                <Cell>Program Files</Cell>
                <Cell>File folder</Cell>
                <Cell>4/7/2021</Cell>
              </Row>
              <Row>
                <Cell>bootmgr</Cell>
                <Cell>System file</Cell>
                <Cell>11/20/2010</Cell>
              </Row>
              <Row>
                <Cell>log.txt</Cell>
                <Cell>Text Document</Cell>
                <Cell>1/18/2016</Cell>
              </Row>
            </TableBody>
          </TableView>
        </>
      </Finder>
    </>
  );
};
