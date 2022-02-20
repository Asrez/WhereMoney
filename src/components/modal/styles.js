import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  icon: {
    height: "3rem",
    width: "3rem",
    boxSizing: "content-box",
    padding: ".5rem",
    borderRadius: "1rem",
    transition: "all .5s",
    boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.3)",
  },
  iconSelected: {
    height: "3rem",
    width: "3rem",
    boxSizing: "content-box",
    padding: ".5rem",
    borderRadius: "1rem",
    background: "#E6E6E6",
    boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.3)",
  },
}));
