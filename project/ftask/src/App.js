import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from  "./components/navbar.js";
import Project_List from  "./components/Project_List.js";
import Project_Edit from  "./components/Project_Edit.js";
import Project_Create from  "./components/Project_Create.js";
import User_Edit from  "./components/User_Edit.js";
import User_Create from  "./components/User_Create.js";

function App() {
  return (
    <Router>
    <div className="container bg-light p-0 ">
    <Navbar className=""/>
    <br/>
      <Route path="/" exact component={Project_List}/>
      <Route path="/edit/:id" exact component={Project_Edit}/>
      <Route path="/pcreate" exact component={Project_Create}/>
      <Route path="/ucreate" exact component={User_Create}/>
      <Route path="/edit/:id" exact component={User_Edit}/>
</div>
    </Router>
  );
}

export default App;
