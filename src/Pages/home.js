import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const url = useNavigate();
 
    const sum = () => {
        url("/link")
    };

    return (
    <div>
      This is home page
      <h1>thisis for design</h1>
      <button className="secondary" onClick={sum}>Submit</button>
    </div>
  )
}

export default Home
