import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    Main: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: (theme: Theme) => theme.backgroundDark,
      position: "relative",
      color: (theme: Theme) => theme.textColorPrimary,
    },
    page: {
      width: "100%",
      maxWidth: "1400px",
      // padding: '8rem 0',
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      padding: "0 3rem 0 3rem",
      "@media (min-width: 960px)": {
        width: "75%",
        padding: "0",
      },
    },
  })
);

export default useStyles;
