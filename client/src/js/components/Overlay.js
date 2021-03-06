import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Grid from '@material-ui/core/Grid';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

const useStyles = makeStyles(theme => ({
  
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    maxHeight: '550px',
    overflow: 'auto',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    //backgroundImage: 'linear-gradient(to right, #f5f0f0 , white , white , white, white , white )',
  },
  fab: {
    margin: theme.spacing(1),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default function Overlay(props) {
  const classes = useStyles();

  const childrenWithProps = React.Children.map(props.children, child => {
    return React.cloneElement(child, { handleClose: props.handleClose })
  }
  );

  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Grid container direction="row" justify="center" alignItems="center" xs={12} md={8}>
        <Fade in={props.open} className={classes.paper}>
            {childrenWithProps}
        </Fade>
        </Grid>
      </Modal>
    </>
  );
}