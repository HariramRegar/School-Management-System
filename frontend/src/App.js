// import logo from './logo.svg';
import './App.css';
import DashBoard from './app-components/Dashboard'
import Home from './app-components/HomeFiles/Home'
import TestApi from './app-components/UserValidation/TestApi'
// import ButtonAppBar from './app-components/HomeFiles/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideBar from './app-components/HomeFiles/SideBar';


function App() {
  return (
    <div className="App">
      {/* <TestApi /> */}
      <Router>
        {/* <Home /> */}
        <SideBar />
      </Router>
    </div>
  );
}

export default App;
