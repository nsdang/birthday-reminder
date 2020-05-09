import React from "react";
import { makeStyles } from "@material-ui/styles";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import Page from "src/components/Page";


import Overview from "./Overview";
import Calendar from "./Calendar";

const useStyles = makeStyles((theme) => ({
  root: {}
}));

function HomePage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home Page">
      <Overview />
      <Calendar />
    </Page>
  );
}

export default HomePage;
