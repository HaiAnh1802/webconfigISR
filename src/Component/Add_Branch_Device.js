import React, { Component } from 'react'
import './BSA.css'
import './AdminLTE.css'
export default class Add_Branch_Device extends Component {
    render() {
        return (
            <div>
                <div className="mlbox-5">
                    <div className="col-lg-8 col-xs-8 ">
                        <div className="box box-primary">
                            <div className="mt-box">
                                <div className="box-header with-border">
                                    <h3 className="box-title" style={{ fontSize: 25, fontStyle: 'inherit', fontWeight: 600 }}>Create new Branch</h3>
                                </div>
                                <form role="form" action="devices_hsa_branch_edit.php" method="post">
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Name</label>
                                            <input type="text" className="form-control" name="name" id="name" required="required" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Address</label>
                                            <input type="text" className="form-control" name="address" id="address" required="required" placeholder="..." />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Description</label>
                                            <input type="text" className="form-control" name="description" id="description" placeholder="Description" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div>
                                            <button type="submit" className="btn btn-success" name="action" value="save">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
