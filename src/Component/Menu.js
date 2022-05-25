import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
export default function Menu() {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                
                <a href="index3.html" className="brand-link">
                {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
                <span className="brand-text font-weight-light" style={{fontWeight:"600"}}>WedConfig</span>
                </a>
                <div className="sidebar">
                    {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                            <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                        </div>
                    </div> */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item menu-open">
                        <NavLink exact to="/" activeClassName="active">
                            <div className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
                                    
                                </p>
                            </div>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon fa fa-server" />
                        <p>
                            Management
                            <i className="right fas fa-angle-left" />
                        </p>
                        </a>
                        <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="pages/charts/chartjs.html" className="nav-link">
                            <i className="fa fa-users nav-icon" />
                            <p>Account
                                <i className="right fas fa-angle-left" />
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink exact to="/BSA_Account" activeClassName="active">
                                        
                                        <a href="" className="nav-link">
                                        <i className="fa fa-user nav-icon" />
                                        <p>BSA</p>
                                        </a>
                                        
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/EA_Account" activeClassName="active">
                                        <a href="" className="nav-link">
                                            <i className="fa fa-user nav-icon " />
                                            <p>EA</p>
                                        </a>
                                
                                    </NavLink>
                                </li>
                                
                                
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                            <i className="fa fa-laptop nav-icon" />
                            <p>
                                Device
                                <i className="right fas fa-angle-left" />
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            
                                <li className="nav-item">
                                <NavLink exact to="/Branch_Device" activeClassName="active">
                                    <a href="" className="nav-link">
                                        <i className="fa fa-sitemap nav-icon" />
                                        <p>Branch</p>
                                    </a>
                                </NavLink>
                                </li>
                                <NavLink exact to="/Edge_Device" activeClassName="active">
                                    <li className="nav-item">
                                        <a href="" className="nav-link">
                                            <i className="fa fa-share-alt-square nav-icon" />
                                            <p>Edge</p>
                                        </a>
                                    </li>
                                </NavLink>
                                
                            </ul>
                        </li>
                        </ul>
                    </li>

                    </ul>
                </nav>
                </div>
            </aside>
        </>
    )
}
