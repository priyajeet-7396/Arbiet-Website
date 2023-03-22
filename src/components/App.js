import React from 'react';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Sector from './pages/Sector';
import Services from './pages/Services';
import SignIn from './pages/Signin';
import Navbar from './Navbar/Navbar';
import './App.css';
import Products from './pages/Products';

function App() {
  return (
    <div>

      <div className='container'>
      
        <Router>
        <Navbar />
        <Routes>
       
          <Route path="/" Component={Home} />
          <Route path="/products" Component={Products} />
          <Route path="/sector" Component={Sector} />
          <Route path="/services" Component={Services} />
          <Route path="/signin" Component={SignIn} />
          </Routes>
        </Router>
    
      </div>
      <div className='image-bk'>

      </div>

      </div>
  );
}

export default App;
