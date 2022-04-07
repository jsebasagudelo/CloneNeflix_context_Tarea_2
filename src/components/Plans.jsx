import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { StyledButton } from '../styled/styledcomponents';

const Plans = ({cost,children, color,wide}) => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Typography variant='h5' className={classes.standard}>
        {children}
        </Typography>
        <StyledButton color={color} wide={wide}>Subscribe</StyledButton>
       </div>
  )
}


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& button": {
          marginBottom: theme.spacing(2),
        },
      },
      standard: {
        fontSize: "1.2rem",
      },
  }));

export default Plans