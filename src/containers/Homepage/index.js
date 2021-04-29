import React from "react";
import TypoGraphy from "@material-ui/core/TypoGraphy";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "&>*": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Homepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TypoGraphy variant="h4" component="h1">
        Homepage
      </TypoGraphy>
    </div>
  );
};

export default Homepage;
