import { createTheme } from '@mui/material';
import InterRegular from '../assets/fonts/Inter-Regular.ttf';

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Inter',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${InterRegular}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
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
            minWidth: "220px",
            minHeight: "50px",
            backgroundColor: "#ED801B",
            "&:active": {
              boxShadow:
                "4px 8px 15px rgba(0, 0, 0, 0.20) inset",
            },
          }),
        }),
      },
    }
  },
});
