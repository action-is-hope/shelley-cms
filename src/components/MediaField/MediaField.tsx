import { useRef, type ReactNode } from "react";
import { Button } from "@actionishope/shelley/Button";
import { st, classes } from "./mediaField.st.css";
import { Edit, Media, Trash } from "../icons";
import { Text } from "@actionishope/shelley/Text";

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
  children: ReactNode | ((hasPreview: boolean) => void);
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
}: MediaFieldProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  
  const handleClick = () => {
    // Focus the nav element to reveal the controls
    navRef.current && navRef.current.focus();
    onFocus && onFocus()
  };
  
  return (
    <div className={st(classes.root, { type, hasPreview: Boolean(mediaPreview) }, className)}>
      {labelText && <label className={classes.label}>{labelText}</label>}
      <div className={classes.grid}>
      {!mediaPreview ? (
        <>
        <Button
          data-id="SelectImage"
          icon={<Media alt={addText} />}
          variant="fab"
          onPress={onAdd}
          className={classes.trigger}
        />
        {/* <Text vol={1} as="span" className={classes.orText}>HELLO</Text> */}
        {!mediaPreview && children && <Text vol={1} as="span" className={classes.orText}>or</Text>}
        </>
      ) : (
          <>
            <div className={classes.media}>{mediaPreview}</div>
            <nav
            // tabIndex makes container tabbable so keyboard users can see the options *before* they are focused.
            tabIndex={0}
            ref={navRef}
            className={classes.editControls}
            onClick={handleClick}
          >
            <Button
              variant="fab"
              className={classes.editButton}
              onPress={onRemove}
              vol={2}
              icon={<Trash alt={removeText} />}
            />
            <Button
              variant="fab"
              className={classes.editButton}
              onPress={onEdit}
              vol={2}
              icon={<Edit alt={editText} />}
            />
          </nav>
          </>
      )}
      {typeof children === "function" ? children(Boolean(mediaPreview)) : children}
      </div>
    </div>
  );
};

export { MediaField };
