import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardContent from '@material-ui/core/CardContent';

import { DialogTitle, DialogContent, DialogActions } from './DialogComponents';
import StoryContent from "./StoryContent";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    boxShadow:' 0 1px 10px rgba(0,0,0,0.12), 0 1px 10px rgba(0,0,0,0.24)',
    '&:hover': {
      background: 'aliceblue',
   },

  },
  onhover: {
    '&:hover': {
      cursor: 'pointer'
   }
   },
  main: {
    width: '700px',
    maxHeight: '500px',
    overflow: 'auto'
  }
}));


export default function CustomizedDialog(props) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.card}>
      <CardHeader onClick={handleClickOpen} className={classes.onhover}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={(!props.date) ? "01/01/1979" : props.date}
      />
      <CardContent onClick={handleClickOpen} className={classes.onhover}>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content.blocks[0].text.substr(0,150) + "..."}
        </Typography>
      </CardContent>
    </Card>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography color="textSecondary" component="div">
        <Box fontSize="h5.fontSize">{props.title}</Box>
        </Typography>
        </DialogTitle>
        <DialogContent dividers>
        <StoryContent title={props.title} content={props.content} author={props.author} open={open} handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}