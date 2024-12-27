import { createTheme} from "@mui/material/styles";

const dateSliderTheme = (theme: any) =>
  createTheme({
    ...theme,
    components: {
      MuiSlider: {
        styleOverrides: {
          root: {
            padding: "0px",
            margin: "12px 0px 24px 0px",
          },
          markLabel: {
            fontFamily: "Calibri",
            fontSize: "18px",
            '&[data-index="0"]': {
              left: "3.7% !important",
            },
            '&[data-index="1"]': {
              right: "-4% !important",
              left: "auto !important",
            },
          },
          track: {
            backgroundColor: "transparent",
            border: "0px",
          },
        },
      },
    },
  });

export default dateSliderTheme;
