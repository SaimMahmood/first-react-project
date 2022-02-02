import { makeStyles } from "@material-ui/core/styles";

const styleMain = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: "20px",
  },
  headerLogo: {
    margin: "15px",
  },
  headerTitle: {
    textTransform: "uppercase",
  },
  buttonClass: {
    marginTop: "10px",
  },
  mainCard: {
    marginTop: "20px",
    height: "auto",
  },
  cardMedia: {
    width: "auto",
    height: "250px",
  },
  cardActions: {
    margin: "auto",
    justifyContent: "center",
  },
  actionButton: {},
  footer: {
    marginTop: "10px",
    padding: "20px",
    paddingBottom: "5px",
    backgroundColor: theme.palette.background.paper,
    fontSize: "5px",
  },
}));

export default styleMain;
