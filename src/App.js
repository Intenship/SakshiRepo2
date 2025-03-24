import logo from './logo.svg';
import './App.css';
import Home from './Pages/home';
import Header from './Components/Header';
import {  Routes, Route,  } from "react-router-dom";
import Newlink from './Pages/Newlink';

function App() {
  const name = " sakshi";
  const vr = " good"
  return (

   
    
  <>
   <Header/>
    <Routes>
       
      <Route path='/home' element={<Home/>}/>
      <Route path='/link' element={<Newlink sname={name}  vm={vr}/>}/>
    </Routes>
    </>

  );
}

export default App;
