import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import Header from "./Header";
import Statistics from "./Statistics";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  statistics: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

function Overview() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Header />
      <Statistics className={classes.statistics} />
    </Container>
  );
}

export default Overview;