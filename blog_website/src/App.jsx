import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import './App.css';
import Footer from "./Components/Footer/Footer";
// import { useState } from 'react'J
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
