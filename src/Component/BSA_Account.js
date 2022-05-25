import React, { Component } from 'react'
import * as RiIcons from 'react-icons/ri'
import axios from 'axios'
import './BSA.css'
import './AdminLTE.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1MzQ0NjU2NiwianRpIjoiYWUxZDljYmEtYTQ4YS00MGJmLWJjNmQtODI0ODY1MmZhZTRjIiwidHlwZSI6Niwic3ViIjoibGVoYWlhbmhoZGNrQGdtYWlsLmNvbSIsIm5iZiI6MTY1MzQ0NjU2NiwiZXhwIjoxNjUzNDc1MzY2fQ.JPjfM4Gb-SV2JZG7VmeV4VrXeasjeQVofgn__mZlakA'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
        };

    const bodyParameters = {
    type:"LSA_BSA",
    id:["3","30"]
    };

axios.get( 
  '118.70.182.154:5500/api/get/branch-account',
  bodyParameters,
  config
).then(console.log).catch(console.log);
    
export default class BSA_Account extends Component {

    state = {
        listUsers:[]
    }
     
    
    // axios.get( 
    //   'http://localhost:8000/api/v1/get_token_payloads',
    //   bodyParameters,
    //   config
    // ).then(console.log).catch(console.log);
    
    async componentDidMount(){
        console.log('... check config: ', config)

        let res =  await axios.get('http://118.70.182.154:5500/api/get/branch-account',
                    bodyParameters,
                    config     
        )
        console.log('... check res: ', res)
        this.setState({
            listUsers: res && res.data.data ? res.data.data : []
        })
    }
    render() {
        let { listUsers} = this.state;
        
        return (
            <div>
                <div className="content-wrapper">
                    <div className="box">
                        <div className="mt-box">
                            <div className="box-header with-border">
                                <h3 className="box-title" style={{ fontSize: 25, fontStyle: 'inherit', fontWeight: 600 }}>BSA List: </h3>
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
                                    {listUsers &&  listUsers.map((item, index) => {
                                            return (
                                                <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.first_name}</td>
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
                                                    {/* <RiIcons.RiEdit2Fill style={{paddingRight:'10px', fontSize:'40px' }} role="button"/> */}

                                                    <a className="fa fa-cog no-confirm" style={{paddingRight:'10px' }} role="button" />
                                                    <a className="fa fa-trash " role="button" />
                                                </td>
                                                </tr>
                                            )
                                        })

                                        
                                        
                                        
                                        }
                                        
                                    </tbody></table>
                            </div>
                            <div className="box-footer clearfix">
                                <NavLink exact to="/Add_BSA_Account" activeClassName="active">
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
