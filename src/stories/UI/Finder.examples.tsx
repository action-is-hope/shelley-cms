import {
  Button,
  Checkbox,
  TableView,
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  P,
  H2,
  H3,
  Grid,
} from "@actionishope/shelley";
import { Finder } from "../../components/Finder/Finder";
import { BasicHeader } from "./Header.examples";
import Add from "../../components/icons/Add";
import { default as ContentIcon } from "../../components/icons/Content";
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  CardActions,
  CardProps,
} from "../../components/Card/Card";
import { st, classes as finder } from "../../styles/cms/finder.st.css";

export const BasicExample = () => (
  <Finder
    title={
      <>
        <ContentIcon aria-hidden="true" />
        Title
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
    </>
  </Finder>
);

export const ContentExample = () => (
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

export const MediaExample = () => (
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
        <div className={finder.mediaGrid}>
          <Card onPress={() => console.log("Here")}>
            <CardMedia>
              <img
                src="https://ik.imagekit.io/tcvka0ufln/pontoon_v3jIy64zcnwwx.jpeg?tr=w-1200,h-630,fo-auto"
                alt=""
              />
            </CardMedia>
            <CardContent>
              <H3 vol={2} truncate={1}>
                A simple, yet effective text only title area.
              </H3>
              <P vol={1} truncate={1}>
                A simple, yet effective text only title area.
              </P>
            </CardContent>
          </Card>
          <Card onPress={() => console.log("Here")}>
            <CardMedia>
              <img
                src="https://ik.imagekit.io/tcvka0ufln/pontoon_v3jIy64zcnwwx.jpeg?tr=w-1200,h-630,fo-auto"
                alt=""
              />
            </CardMedia>
            <CardContent>
              <H3 vol={2} truncate={1}>
                A simple, yet effective text only title area.
              </H3>
              <P vol={1} truncate={1}>
                A simple, yet effective text only title area.
              </P>
            </CardContent>
          </Card>
          <Card onPress={() => console.log("Here")}>
            <CardMedia>
              <img
                src="https://ik.imagekit.io/tcvka0ufln/pontoon_v3jIy64zcnwwx.jpeg?tr=w-1200,h-630,fo-auto"
                alt=""
              />
            </CardMedia>
            <CardContent>
              <H3 vol={2} truncate={1}>
                A simple, yet effective text only title area.
              </H3>
              <P vol={1} truncate={1}>
                A simple, yet effective text only title area.
              </P>
            </CardContent>
          </Card>
          <Card onPress={() => console.log("Here")}>
            <CardMedia>
              <img
                src="https://ik.imagekit.io/tcvka0ufln/pontoon_v3jIy64zcnwwx.jpeg?tr=w-1200,h-630,fo-auto"
                alt=""
              />
            </CardMedia>
            <CardContent>
              <H3 vol={2} truncate={1}>
                A simple, yet effective text only title area.
              </H3>
              <P vol={1} truncate={1}>
                A simple, yet effective text only title area.
              </P>
            </CardContent>
          </Card>
          <Card onPress={() => console.log("Here")}>
            <CardMedia>
              <img
                src="https://ik.imagekit.io/tcvka0ufln/pontoon_v3jIy64zcnwwx.jpeg?tr=w-1200,h-630,fo-auto"
                alt=""
              />
            </CardMedia>
            <CardContent>
              <H3 vol={2} truncate={1}>
                A simple, yet effective text only title area.
              </H3>
              <P vol={1} truncate={1}>
                A simple, yet effective text only title area.
              </P>
            </CardContent>
          </Card>
        </div>
      </>
    </Finder>
  </>
);
