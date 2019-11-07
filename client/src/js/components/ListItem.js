import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import StoryContent from "./StoryContent";
import Overlay from "./Overlay";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
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

export default function ListItem(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Card className={classes.card}>
      <CardHeader onClick={handleOpen} className={classes.onhover}
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={(!props.date) ? "01/01/1979" : props.date}
      />
      <CardContent onClick={handleOpen} className={classes.onhover}>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content.blocks[0].text.substr(0,150) + "..."}
        </Typography>
      </CardContent>
      <Overlay open={open} handleClose={handleClose}>
      <StoryContent title={props.title} content={props.content} author={props.author} open={open} handleClose={handleClose} />
      </Overlay>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}