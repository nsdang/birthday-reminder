/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  colors,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import InputIcon from "@material-ui/icons/Input";
import NotificationsPopover from "src/components/NotificationsPopover";
import ChatBar from "./ChatBar";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  chatButton: {
    marginLeft: theme.spacing(1),
  },
  notificationsButton: {
    marginLeft: theme.spacing(1),
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600],
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
  logoutIcon: {
    marginRight: theme.spacing(1),
  },
}));

function TopBar({ onOpenNavBarMobile, className, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const notificationsRef = useRef(null);
  const [notifications, setNotifications] = useState([]);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openChatBar, setOpenChatBar] = useState(false);

  const handleLogout = () => {
    history.push("/auth/login");
    // dispatch(logout());
  };

  const handleChatBarOpen = () => {
    setOpenChatBar(true);
  };

  const handleChatBarClose = () => {
    setOpenChatBar(false);
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  useEffect(() => {
    let mounted = true;

    const fetchNotifications = () => {
      // Fetch data from server
    };

    fetchNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <div className={classes.flexGrow} />
        <IconButton
          className={classes.chatButton}
          color="inherit"
          onClick={handleChatBarOpen}
        >
          <PeopleIcon />
        </IconButton>
        <Hidden mdDown>
          <IconButton
            className={classes.notificationsButton}
            color="inherit"
            onClick={handleNotificationsOpen}
            ref={notificationsRef}
          >
            <Badge
              badgeContent={notifications.length}
              classes={{ badge: classes.notificationsBadge }}
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
            Sign out
          </Button>
        </Hidden>
      </Toolbar>
      <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
      <ChatBar onClose={handleChatBarClose} open={openChatBar} />
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func,
};

export default TopBar;
