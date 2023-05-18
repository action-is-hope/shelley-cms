import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  CardActions,
  CardProps,
} from "../../components/Card/Card";

import {
  H2,
  H3,
  P,
  Button,
  DialogTrigger,
  Dialog,
  Grid,
} from "@actionishope/shelley";
import { Add } from "../../components/icons";

export const BasicExample = (args: CardProps) => {
  return (
    <Grid variant={3}>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("Here")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Standard title
          </H2>
          <Add />
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only title area.</P>
        </CardContent>
      </Card>
    </Grid>
  );
};

export const MediaExample = (args: CardProps) => {
  return (
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
      {/* <CardActions>
        <Button vol={1}>Share</Button>
        <Button vol={1}>Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export const CardAsDialogTriggerExample = (args: CardProps) => {
  return (
    <DialogTrigger portalSelector="#portal" isDismissable type="popup">
      <Card onPress={() => console.log("Here")}>
        <CardContent>
          <H2 vol={4}>Lizard</H2>
          <P vol={2}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </P>
        </CardContent>
        {/* <CardActions>
        <Button vol={1}>Share</Button>
        <Button vol={1}>Learn More</Button>
      </CardActions> */}
      </Card>
      <Dialog>DIALOG</Dialog>
    </DialogTrigger>
  );
};
