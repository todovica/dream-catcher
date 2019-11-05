import React from 'react';
import Overlay from "./Overlay";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function OpenStory(props) {
  
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
      <CardContent onClick={handleOpen}>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content.substr(0,150)+"..."}
        </Typography>
      </CardContent>
      <Overlay open={open} handleClose={handleClose}>
        {props.children}
      </Overlay>
    </div>
  );
}