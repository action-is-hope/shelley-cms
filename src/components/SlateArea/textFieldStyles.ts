import { Theme, createStyles } from "@material-ui/core";

export default (theme: Theme) =>
  createStyles({
    container: {
      // We'll position menu elements in here relative to this element.
      position: "relative"
    },
    root: {
      fontSize: "1.1rem",
      fontFamily: theme.typography.fontFamily,
      paddingLeft: theme.spacing.unit * 3,
      marginLeft: -theme.spacing.unit * 3,
      // Match line-height of theme. #themeSync :-)
      lineHeight: 1.45,
      // Ensures the offset padding is still clickable if -ve margin pulls over another item.
      position: "relative",
      // Some margin on the RHS to stop fields interferring with the ComponentEditor controls.
      marginRight: theme.spacing.unit * 10,
      // Set max width of typed heading more closely matching that of front end widest reading area.
      "& h1, & h2, & h3": {
        maxWidth: "42rem"
        // Tweak when we have more info
      },
      "& h2": { fontSize: "1.8rem" },
      "& h3": { fontSize: "1.5rem" },
      "& blockquote": {
        borderLeft: `2px solid ${theme.palette.text.secondary}`,
        padding: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 2,
        marginLeft: -theme.spacing.unit * 2 - 2,
        fontSize: "1.1em"
      },
      color: theme.palette.text.secondary,
      "&:empty": {
        display: "none"
      },
      "&:after": {
        content: "''",
        display: "block",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: -4,
        background: "rgba(0, 0, 0, 0.2)",
        width: 4,
        opacity: 0,
        transition: "all 0.2s linear"
      },
      "&:focus-within": {
        "&:after": {
          opacity: 1
        }
      },
      "& a": {
        lineHeight: "1.4rem",
        textDecoration: "underline",
        marginBottom: 3,
        color: theme.palette.secondary.main,
        "&:hover": {
          color: theme.palette.secondary.dark
        },
        "&:visited": {
          color: theme.palette.secondary.main
        }
      },
      "& ul, ol": {
        marginBottom: theme.spacing.unit * 3,
        paddingLeft: 18
      },
      "& li": {
        marginBottom: theme.spacing.unit
      }
    },
    multiline: {
      "& h4, & h5, & p, & ul, & ol, & dl, & blockquote": {
        // Set max width of typed content matching that of front end widest reading area.
        maxWidth: "38rem",
        margin: `0 0 ${theme.spacing.unit * 2}px`
      }
    },
    largeLeftPadding: {
      paddingLeft: 65
    },
    mediaContainer: {
      maxWidth: "38rem",
      marginBottom: `${theme.spacing.unit * 4}px`
    },
    imageContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(12, 1fr)"
    },
    image: {
      gridColumn: "1 / 12",
      gridRow: "1 / 12"
    },
    imageAltContainer: {
      gridColumn: "1 / 12",
      gridRow: "1 / 3",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      paddingLeft: `${theme.spacing.unit}px`,
      paddingTop: `${theme.spacing.unit}px`
    },
    imageCaption: {
      marginTop: "-20px",
      fontStyle: "italic"
    },
    list: {
      marginBottom: theme.spacing.unit * 3,
      paddingLeft: 18
    },
    listItem: {
      marginBottom: theme.spacing.unit
    }
  });
