import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import PenIcon from "@material-ui/icons/Create"
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
}from "@material-ui/core"

const useStyles= makeStyles(theme=>({
  root:{
    flexGrow:1,

  },
  menuButton:{
    marginRight: theme.spacing(2)
  },
  title:{
    flexGrow:1,
  },
  container:{marginTop:theme.spacing(3)},

}));


const App = () => {
  const classes= useStyles();
  return (
   
          <>
            <CssBaseline></CssBaseline>
            <Container maxWidth="lg">
              <AppBar position="static"  color="inherit" elevation={0}>
                <Toolbar>
                  <IconButton edge="start" className={classes.container} color="inherit"/>
                  <Typography variant="h6" color="secondary" calassName={classes.title}>
                    <a href="http://localhost:3000/post">First Task</a>
                  </Typography>
                  <Button color="primary" variant="outlined" startIcon={<PenIcon/>}>
                    Yeni Proje
                  </Button>
                </Toolbar>
              </AppBar>
            </Container>
          </>



  )
}

export default App
