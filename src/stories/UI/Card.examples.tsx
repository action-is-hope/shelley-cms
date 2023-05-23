import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
} from "../../components/Card/Card";

import { H2, H3, P, DialogTrigger, Dialog } from "@actionishope/shelley";
import { Add } from "../../components/icons";
import CropPortrait from "../../components/icons/CropPortrait";
import { classes as card } from "../../styles/cms/card.st.css";
export const BasicExample = () => {
  return (
    <Card onPress={() => console.log("onPressFired")}>
      <CardHeader>
        <H2 vol={1} uppercase>
          Add Block
          <Add aria-hidden="true" />
        </H2>
      </CardHeader>
      <CardContent>
        <P vol={1}>A simple, yet effective text only description here.</P>
      </CardContent>
    </Card>
  );
};

export const MediaExample = () => {
  return (
    <Card onPress={() => console.log("onPress fired")}>
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
        <P vol={2} truncate={1}>
          A simple, yet effective text only title area.
        </P>
        <P vol={2} className={card.hasIcon}>
          <code aria-hidden="true">50x100 (original)</code>
          <CropPortrait alt="original image: 50 x 100, portrait" />
        </P>
      </CardContent>
    </Card>
  );
};

export const CardAsDialogTriggerExample = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
    >
      <DialogTrigger portalSelector="#portal" isDismissable>
        <Card onPress={() => console.log("onPress fired")}>
          <CardMedia>
            <img
              src="https://ik.imagekit.io/tcvka0ufln/pontoon_v3jIy64zcnwwx.jpeg?tr=w-1200,h-630,fo-auto"
              alt=""
            />
          </CardMedia>
          <CardContent>
            <H3 vol={2} truncate={1}>
              Modal Dialog
            </H3>
            <P vol={2} truncate={1}>
              A simple, yet effective text only title area.
            </P>
            <P vol={2} className={card.hasIcon}>
              <code aria-hidden="true">50x100 (original)</code>
              <CropPortrait alt="original image: 50 x 100, portrait" />
            </P>
          </CardContent>
        </Card>
        <Dialog>Modal Dialog</Dialog>
      </DialogTrigger>
      <DialogTrigger portalSelector="#portal" type="popup" isDismissable>
        <Card onPress={() => console.log("onPress fired")}>
          <CardMedia>
            <img
              src="https://ik.imagekit.io/tcvka0ufln/pontoon_v3jIy64zcnwwx.jpeg?tr=w-1200,h-630,fo-auto"
              alt=""
            />
          </CardMedia>
          <CardContent>
            <H3 vol={2} truncate={1}>
              Popup Dialog
            </H3>
            <P vol={2} truncate={1}>
              A simple, yet effective text only title area.
            </P>
            <P vol={2} className={card.hasIcon}>
              <code aria-hidden="true">50x100 (original)</code>
              <CropPortrait alt="original image: 50 x 100, portrait" />
            </P>
          </CardContent>
        </Card>
        <Dialog>Popup Dialog</Dialog>
      </DialogTrigger>
    </div>
  );
};

export const MultipleCardsExample = () => {
  return (
    <>
      <Card onPress={() => console.log("onPressFired")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Add Block
            <Add aria-hidden="true" />
          </H2>
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only description here.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("onPressFired")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Add Block
            <Add aria-hidden="true" />
          </H2>
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only description here.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("onPressFired")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Add Block
            <Add aria-hidden="true" />
          </H2>
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only description here.</P>
        </CardContent>
      </Card>
      <Card onPress={() => console.log("onPressFired")}>
        <CardHeader>
          <H2 vol={1} uppercase>
            Add Block
            <Add aria-hidden="true" />
          </H2>
        </CardHeader>
        <CardContent>
          <P vol={1}>A simple, yet effective text only description here.</P>
        </CardContent>
      </Card>
    </>
  );
};
