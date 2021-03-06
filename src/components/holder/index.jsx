import React from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { motion } from 'framer-motion'
import variants from '../../data/animVariant'
import {
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,

  Button
} from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    maxWidth: 400
  },
  media: {
    height: 140
  }
});

const Holder = (props) => {
  const classes = useStyles();

  return (
      <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}>
    <Card className={classes.root}>
      <CardActionArea>
     
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          target="_blank"
          href={props.github}
          size="small"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          target="_blank"
          href={props.issues}
          size="small"
          rel="noopener noreferrer"
        >
          SEE ISSUES
        </Button>
      </CardActions>
    </Card></motion.div>
  );
};
Holder.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  github: PropTypes.string,

};
export default Holder;
