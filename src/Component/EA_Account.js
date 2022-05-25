import React, { Component } from 'react'
import './BSA.css'
import './AdminLTE.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
export default class BSA_Account extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="box">
                        <div className="mt-box">
                            <div className="box-header with-border">
                                <h3 className="box-title" style={{ fontSize: 25, fontStyle: 'inherit', fontWeight: 600 }}>EA List: </h3>
                            </div>
                            <div className="box-body">
                                <table className="table table-bordered">
                                    <tbody>
                                    <tr>
                                        <th >UserName</th>
                                        <th >FullName</th>
                                        <th >Email</th>
                                        <th >Organization</th>
                                        <th >Address</th>
                                        <th >Branch</th>
                                        <th >Phone</th>
                                        <th >Action</th>
                                    </tr>
                                    <tr>
                                        <td>abc</td>
                                        <td>Update software</td>
                                        <td>Update software</td>
                                        <td>Update software</td>
                                        <td>Update software</td>
                                        <td>Update software</td>
                                        <td>
                                            <div className="progress progress-xs">
                                                <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                            </div>
                                        </td>
                                        <td>
                                            <a className="fa fa-cog no-confirm" role="button" />
                                            <a className="fa fa-trash " role="button" />
                                        </td>
                                    </tr>
                                    </tbody>
                                    </table>
                            </div>
                            <div className="box-footer clearfix">
                                <NavLink exact to="/Add_EA_Account" activeClassName="active">
                                <a className="btn btn-social-icon btn-bitbucket" href=""><i className="fa fa-plus" /></a>
                                </NavLink>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
        )
    }
}
