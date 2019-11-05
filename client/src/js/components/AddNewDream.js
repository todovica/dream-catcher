import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Overlay from "./Overlay";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
}));


export default function AddNewDream(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleOpen} className={classes.fab}>
        {props.icon}
      </Fab>
      <Overlay open={open} handleClose={handleClose}>
        {props.children}
      </Overlay>
    </div>
  );
}