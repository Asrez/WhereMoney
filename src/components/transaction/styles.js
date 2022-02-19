import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  headerIcon: {
    paddingRight: ".2rem",
    fontSize: "1.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    color: "#2c3e50",
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
    borderRadius: "50%",
    padding: ".5rem",
    marginRight: "1rem",
    boxSizing: "content-box",
    transform: "rotate(-90deg)",
  },
  cardIcon2: {
    color: "#FF0909",
    backgroundColor: "#ffe5e5",
    borderRadius: "50%",
    marginRight: "1rem",
    boxSizing: "content-box",
    transform: "rotate(90deg)",
    padding: ".5rem",
    // fontSize:'24px'
  },
  bold: {
    fontWeight: "bold",
  },
  select: {
    borderRadius: "14px",
    border: "white",
    background: `#fff url(../icons/down.svg) 6px center no-repeat`,
    backgroundSize: "20%",
    boxShadow: "0 0 5px #dfdfdf",
    width: "130px",
    "&.Mui-focused": {
      border: "1px solid",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    fontSize: "13px",
  },
  key: {
    fontSize: "16px",
    color: "#999",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  val: {
    color: "black",
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  date: {
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  self: {
    [theme.breakpoints.down("sm")]: {
      alignSelf: "flex-end",
    },
  },
}));
