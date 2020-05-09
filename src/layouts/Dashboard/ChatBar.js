import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Drawer,
  List,
  ListSubheader,
} from '@material-ui/core';
import axios from 'src/utils/axios';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 280
  },
  root: {
    backgroundColor: theme.palette.common.white
  },
  list: {
    padding: theme.spacing(1, 3)
  },
  listItemText: {
    marginRight: theme.spacing(1)
  },
  lastActivity: {
    whiteSpace: 'nowrap'
  }
}));

function ChatBar({
  open,
  onClose,
  className,
  ...rest
}) {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = () => {
      axios.get('/api/chat/activity').then((response) => {
        if (mounted) {
          setData(response.data);
        }
      });
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  if (!data) {
    return null;
  }

  return (
    <Drawer
    anchor="right"
    classes={{ paper: classes.drawer }}
    elevation={1}
    onClose={onClose}
    open={open}
    variant="temporary"
  >
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
        <List
          className={classes.list}
          subheader={(
            <ListSubheader
              disableGutters
              disableSticky
            >
              Your Friend List
            </ListSubheader>
          )}
        ></List>
    </div>
  </Drawer>
  );
}

ChatBar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export default ChatBar;
