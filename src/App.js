import './App.css';
import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

// components
import NavBar from './components/NavBar'
import BusSearch from './components/BusSearch'

class App extends React.Component {
  render() {
    return (
      <div className="bg-primary-lighter h-full">
        <NavBar />
        <div className="flex h-full">
          <BusSearch />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    );
  }
}

function Home(props) {
  return (
    <div>Hello</div>
  )
}


export default App;
