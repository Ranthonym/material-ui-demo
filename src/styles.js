import { makeStyles } from "@material-ui/core/styles";

//callback func immediately invokes an object containing all styles
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", //set aspect ratio for images = 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default useStyles;
