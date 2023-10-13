import type { ReactNode } from "react";
import { Button } from "@actionishope/shelley/Button";
import { st, classes } from "./mediaField.st.css";
import { Edit, Media, Trash } from "../icons";

export interface MediaFieldProps {
  addText?: string;
  editText?: string;
  removeText?: string;
  labelText?: string;
  onFocus?: () => void;
  onAdd?: () => void;
  onRemove?: () => void;
  onEdit?: () => void;
  className?: string;
  mediaPreview?: ReactNode;
  type?: "image" | "video" | "icon" | "document";
  children?: ReactNode;
}

const MediaField = ({
  addText = "Add media",
  editText = "Edit media",
  removeText = "Remove media",
  labelText,
  className,
  type,
  onAdd,
  onFocus,
  onRemove,
  onEdit,
  mediaPreview,
  children,
}: MediaFieldProps) => (
  <div className={st(classes.root, { type }, className)}>
    {labelText && <label className={classes.label}>{labelText}</label>}
    {!mediaPreview ? (
      <Button
        data-id="SelectImage"
        icon={<Media alt={addText} />}
        variant="fab"
        onPress={onAdd}
      />
    ) : (
      <figure className={classes.mediaPreview}>
        <div className={classes.media}>{mediaPreview}</div>
        <nav
          // tabIndex makes container tabbable so keyboard users can see the options *before* they are focused.
          tabIndex={0}
          className={classes.editControls}
          onClick={() => onFocus && onFocus()}
        >
          <Button
            variant="fab"
            className={classes.button}
            onPress={onRemove}
            icon={<Trash alt={removeText} />}
          />
          <Button
            variant="fab"
            className={classes.button}
            onPress={onEdit}
            icon={<Edit alt={editText} />}
          />
        </nav>
        {children}
      </figure>
    )}
  </div>
);

export { MediaField };
