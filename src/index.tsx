import * as React from 'react'
import styles from './styles.module.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import moment from 'moment';

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Hello2 =()=>{
  return (
    <div>
      {
        moment().format('MMMM Do YYYY, h:mm:ss a')
      }
    </div>
  );
}

export const Hello = () =>{
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          News
        </Typography>
        <Button color="inherit">Login</Button>
        <Hello2 />
      </Toolbar>
    </AppBar>
  )
}
