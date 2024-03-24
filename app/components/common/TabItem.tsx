import styled from "@emotion/styled";
import { Tab, tabClasses } from "@mui/material";

const TabItem = styled(Tab)(({ theme }) => ({
  opacity: 1,
  overflow: "initial",
  zIndex: 2,
  textTransform: "initial",
  color: "white",
  backgroundColor: "#ED801B",
  transition: "0.2s",
  fontSize: "20px",
  fontWeight: "700",
  [theme.breakpoints.up("sm")]: {
    minWidth: 120,
  },
  "& .MuiTabs-indicator	": {
    display: "none",
  },
  "&:before": {
    transition: "0.2s",
  },
  "&:not(:first-of-type)": {
    "&:before": {
      content: '" "',
      position: "absolute",
      left: 0,
      display: "block",
      height: "100%",
      width: 1,
      zIndex: 1,
      backgroundColor: (theme.vars || theme).palette.grey[300],
    },
  },
  [`& + .${tabClasses.selected}::before`]: {
    opacity: 0,
  },
  "&:hover": {
    [`&:not(.${tabClasses.selected})`]: {
      backgroundColor: "rgba(0 0 0 / 0.1)",
      color: "black",
    },
    "&::before": {
      opacity: 0,
    },
    [`& + .${tabClasses.root}::before`]: {
      opacity: 0,
    },
  },
  [`&.${tabClasses.selected}`]: {
    backgroundColor: "white",
    color: "black",
    border: "none",
  },
  [`&.${tabClasses.selected} + .${tabClasses.root}`]: {
    zIndex: 1,
  },
  [`&.${tabClasses.selected} + .${tabClasses.root}::before`]: {
    opacity: 0,
  },
}));

export default TabItem;
