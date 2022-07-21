import logo from './logo.svg';
import './App.css';
import Connect from './Components/Connect.js';
import Navbarapp from './Components/Navbar/Navbarapp.js';
import CreateProfile from './Components/CreateProfile/CreateProfile.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path = "/connect" element = {<Connect/>}>
      </Route>
    <Route path = "/home" element ={<Navbarapp/>}>
    </Route>
    <Route path = "/createprofile" element ={<CreateProfile/>}>
    </Route>
  </Routes>
</BrowserRouter>
   
  );
}

export default App;
