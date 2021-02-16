
import React,{Component} from "react";

import {Link} from "react-router-dom";


 class Navbar extends Component {
    render(){
    return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
            <Link to="/" className="navabr-brand link-light"  >First Task
            </Link>
            <div className="collapse navbar-collapse" >

            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/" className="nav-link" >
                        Projeler
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/pcreate" className="nav-link" >
                        Proje Ekle
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/ucreate" className="nav-link" >
                        Kullanıcı Ekle
                    </Link>
                </li>


            </ul>

            </div>
            </nav>


    )
}

};
export default  Navbar ;
