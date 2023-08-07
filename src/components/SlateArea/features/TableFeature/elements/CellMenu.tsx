import React from "react";
import { useSlateStatic } from "slate-react";

// import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
// import Popover from "@mui/material/Popover";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import IconButton from "@material-ui/core/IconButton";

// import classnames from "classnames";

import type { TableEditor } from "lib/cms-ui/SlateArea/plugins/withTables/withTables";

export interface CellMenuType {
  type: string;
}

// const styles = (theme: Theme) =>
//   createStyles({
//     button: {
//       background: `${theme.palette.grey[500]} !important`,
//       borderRadius: "50px !important",
//       height: "25px",
//       minWidth: "25px !important",
//       maxWidth: "25px !important",
//       color: "black"
//     }
//   });

type CellMenuElementProps = CellMenuType;

const CellMenu = ({ type, classes }: CellMenuElementProps) => {
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  const editor = useSlateStatic() as TableEditor;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const _insertRowBelow = () => {
    editor.insertRowBelow();
    handleClose();
  };

  const _insertRowAbove = () => {
    editor.insertRowAbove();
    handleClose();
  };

  const _deleteRow = () => {
    editor.deleteRow();
    handleClose();
  };

  const _insertColumnRight = () => {
    editor.insertColumnRight();
    handleClose();
  };

  const _insertColumnLeft = () => {
    editor.insertColumnLeft();
    handleClose();
  };

  const _deleteColumn = () => {
    editor.deleteColumn();
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        className={classnames(classes.button)}
        aria-describedby={id}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {type === "row" && (
            <>
              <MenuItem onClick={_insertRowAbove}>Insert Row Above</MenuItem>
              <MenuItem onClick={_insertRowBelow}>Insert Row Below</MenuItem>
              <MenuItem disabled={editor.countRows() <= 1} onClick={_deleteRow}>
                Delete Row
              </MenuItem>
            </>
          )}
          {type === "column" && (
            <>
              <MenuItem onClick={_insertColumnRight}>
                Insert Column To The Right
              </MenuItem>
              <MenuItem onClick={_insertColumnLeft}>
                Insert Column To The Left
              </MenuItem>
              <MenuItem
                disabled={editor.countColumns() <= 1}
                onClick={_deleteColumn}
              >
                Delete Column
              </MenuItem>
            </>
          )}
        </Menu>
      </Popover>
    </>
  );
};

export default CellMenu;
