import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    "&>*": {
      margin: theme.spacing(1),
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Link to="/">
        <Button variant="outlined">Home</Button>
      </Link>
      <Link to="/quiz">
        <Button variant="outlined">Start a Quiz!!!</Button>
      </Link>
    </div>
  );
};

export default Header;
