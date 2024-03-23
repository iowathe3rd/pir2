import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ED801B",
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          paddingLeft: "6px",
          paddingRight: "6px",
          // For all variants
          boxShadow: "none",
          textTransform: "capitalize",
          borderRadius: "10px",
          // For specific variant
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "primary" && {
              minWidth: "220px",
              minHeight: "50px",
              borderWidth: "2px",
              "&:hover": {
                borderWidth: "2px",
              },
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "white",
              minWidth: "220px",
              minHeight: "50px",
              backgroundColor: "#ED801B",
              backgroundImage:
                "linear-gradient(180deg, #ED801B 0%, #ED801B 100%)",
              "&:hover": {
                boxShadow: "none",
                backgroundImage: "none",
                backgroundColor: "#ED801B",
              },
              "&:active": {
                boxShadow: "4px 8px 15px rgba(0, 0, 0, 0.20) inset",
              },
            }),
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1536px",
          },
        }),
      },
    },
  },
});
