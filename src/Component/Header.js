import React, { Component } from 'react'
import * as GoIcons from 'react-icons/go'
import * as FaIcons from 'react-icons/fa'
import Login from './Login'
export default class Header extends Component {
    
    render() {
        return (
       <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <a href="index3.html" className="nav-link">Home</a>
            </li>
            </ul>
            <ul className="navbar-nav ml-auto">
            
            
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="fa fa-user-circle" />
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div className="dropdown-divider" />
                <a href="/Login" className="dropdown-item">
                    {/* <i className="fa fa-sign-out  mr-2" /> SignOut */}
                    <GoIcons.GoSignOut className="mr-2"/> LogOut
                    
                </a>
                <div className="dropdown-divider" />
                
                <a href="#" className="dropdown-item">
                    {/* <i className="fas fa-users mr-2" /> Register */}
                    <FaIcons.FaUserEdit className="mr-2" /> SignUp
                </a>
                
                
                </div>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                <i className="fas fa-expand-arrows-alt" />
                </a>
            </li> */}
            
            </ul>
        </nav>
</div>

        )
    }
}

