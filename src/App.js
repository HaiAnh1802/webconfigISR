import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Menu1 from './Component/Menu'
import Menu from './Component/Menu'
import Dashboard from './Component/Dashboard'
import BSA_Account from './Component/BSA_Account'
import EA_Account from './Component/EA_Account'
import Branch_Device from './Component/Branch_Device'
import Edge_Device from './Component/Edge_Device'
import Add_BSA_Account from './Component/Add_BSA_Account'
import Add_EA_Account from './Component/Add_EA_Account'
import Add_Branch_Device from './Component/Add_Branch_Device'
import Login from './Component/Login'
import Footer from './Component/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    < >
      <Router>
        <Header/>
        <Menu/>
        <Routes>
          
            <Route exact path="/" element={  <Dashboard/>} />
            <Route path="/BSA_Account" element={<BSA_Account/>} />
            <Route path="/EA_Account" element={<EA_Account/>} />
            <Route path="/Branch_Device" element={<Branch_Device/>} />
            <Route path="/Edge_Device" element={<Edge_Device/>} />
            <Route path="/Add_BSA_Account" element={<Add_BSA_Account/>} />
            <Route path="/Add_EA_Account" element={<Add_EA_Account/>} />
            <Route path="/Add_Branch_Device" element={<Add_Branch_Device/>} />
          </Routes>
      </Router>
      
      

    </>
    
  );
}

export default App;
