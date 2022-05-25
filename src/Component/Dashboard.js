import React, { Component } from 'react'
import "../static/css/Treant.css"
import "../static/css/collapsable.css"
import "../static/css/perfect-scrollbar.css"

export default class Dashboard extends Component {
    render() {
        return (
           <div>
            <div className="content-wrapper">
                <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">Dashboard</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
                <section className="content">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-info">
                        <div className="inner">
                            <h3>Hà Nội</h3>
                            <p>Branch</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-success">
                        <div className="inner">
                            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                            <p>Edge</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-warning">
                        <div className="inner">
                            <h3>44</h3>
                            <p>Reboot</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person-add" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-danger">
                        <div className="inner">
                        <div className="row">
                        <div className="col-lg-6">
                            <h3>65</h3>
                            <p>Warning</p>
                        </div>
                        <div className="col-lg-6">
                            <h3>65</h3>
                            <p>ERROR</p>
                        </div>
                        </div>

                        </div>
                        <div className="icon">
                            <i className="ion ion-pie-graph" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-lg-6">
                        <div className="box box-success">
                        <div className="box-header with-border">
                            <h3 className="box-title" style={{fontWeight: 600}}>Total Bandwidth: </h3>
                        </div>
                        <div className="box-body">
                            <div>
                            <span style={{fontSize: 20}}>Input Bandwidth: </span>
                            <span style={{fontSize: 20}}>abc </span>
                            </div>
                            <div>
                            <span style={{fontSize: 20}}>Output Bandwidth: </span>
                            <span style={{fontSize: 20}}>abc </span>
                            </div>
                        </div>
                        {/* /.box-body */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="box box-success">
                        <div className="box-header with-border">
                            <h3 className="box-title" style={{fontWeight: 600}}>Information</h3>
                        </div>
                        <div className="box-body">
                            <div>
                            <span style={{fontSize: 20}}>Branch: </span>
                            <span style={{fontSize: 20}}>Hà nội </span>
                            </div>
                            <div>
                            <span style={{fontSize: 20}}>BSA: </span>
                            <span style={{fontSize: 20}}>abc </span>
                            </div>
                        </div>
                        {/* /.box-body */}
                        </div>
                    </div>
                    </div>
                  </div>

                  <div className="chart" id="collapsable-example"></div>
                    <script src="../static/js/raphael.js"></script>
                    <script src="../static/js/Treant.js"></script>
                    <script src="../static/js/jquery.min.js"></script>
                    <script src="../static/js/jquery.easing.js"></script>
                    <script src="../static/data/12/collapsable.js"></script>
                    <script>
                        tree = new Treant( chart_config );
                    </script>
              
                </section>
            </div>
            </div>

        )
    }
}
