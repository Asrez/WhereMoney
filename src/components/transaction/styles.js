import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  headerIcon: {
    paddingRight: ".2rem",
    fontSize: "2.2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  card: {
    display: "flex",
    alignItems: "center",
    height: "6rem",
    paddingLeft: "2rem",
    gap: "1rem",
  },
  cardIcon1: {
    color: "#43e9a5",
    backgroundColor: "#e5fbf1",
    padding: "1rem",
    borderRadius: "50%",
    fontSize: "2rem",
    marginRight: "1rem",
    boxSizing: "content-box",
  },
  cardIcon2: {
    color: "#FF0909",
    backgroundColor: "#ffe5e5",
    padding: "1rem",
    borderRadius: "50%",
    fontSize: "2rem",
    marginRight: "1rem",
    boxSizing: "content-box",
  },
  bold: {
    fontWeight: "bold",
  },
}));
