import React, { Component } from 'react'
import './BSA.css'
import './AdminLTE.css'

  
export default class Add_BSA_Account extends Component {
    render() {
        return (
            <div>
                
                <div className="wrapper">
                    <div className="content-wrapper">
                    <section className="content">
                        <div className="col-md-*">
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Account BSA Create</h3>
                                </div>
                                <form action="account_hsa_bsa_edit.php" method="post" className="form-horizontal">
                                    <input id="id" type="hidden" name="id" defaultValue="<?php echo $id?>" />
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Username</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" name="username" id="username" required="required" placeholder="User name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                                            <div className="col-sm-8">
                                                <input type="password" className="form-control" name="password" id="password" required="required" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Confirm Password</label>
                                            <div className="col-sm-8">
                                                <input type="password" className="form-control" name="confirm_password" id="confirm_password" required="required" placeholder="Confirm Password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="text" className="col-sm-2 control-label">Full name</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" name="fullname" id="fullname" required="required" placeholder="Nguyen Van A" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Email</label>
                                            <div className="col-sm-8">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="lancs@gmail.com" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Phone number</label>
                                            <div className="col-sm-8">
                                                <input type="number" className="form-control" name="phone" id="phone" required="required" placeholder="..." />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Address</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" name="address" id="address" required="required" placeholder="..." />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Branch</label>
                                            <div className="col-sm-8">
                                                <select name="branch" id="branch" className="form-control select2" style={{ width: '100%' }}>
                                                    <option selected="selected" />
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Organization</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" name="organization" id="organization" placeholder="..." />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-4">
                                                <button type="submit" className="btn btn-success" name="action" value="save">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
        </div>
        </div>
        </div>
        )
    }
}
