import { createTheme} from "@mui/material/styles";

const filterBoxTheme = (theme: any) =>
  createTheme({
    ...theme,
    components: {
      MuiStack: {
        styleOverrides: {
          root: {
            width: "52.2876%",
            marginLeft: "auto",
            paddingTop: "0px !important",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontFamily: "Calibri",
            fontSize: "21px",
            lineHeight: "27px",
            color: "#ffffff",
            borderRadius: "6px",
            overflow: "hidden",
            border: "1px solid white",
            boxSizing: "border-box",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: { color: "white" },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { margin: "8px 0px" },
        },
      },
      MuiPickersYear: {
        styleOverrides: {
          root: {
            borderBottomRightRadius: "4px", // Thêm góc bo tròn cho năm cuối
          },
        },
      },
    },
  });

export default filterBoxTheme;
