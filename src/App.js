import './App.css';
import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";

// components
import NavBar from './components/NavBar'
import BusSearch from './components/BusSearch'
import News from './components/News'
import Map from './components/Map'

class App extends React.Component {
  render() {
    return (
      <div className="bg-primary-lighter h-full">
        <NavBar />
        <div className="flex h-full">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<News />} />
              <Route path="/route" element={<Map />} />
            </Route>
            {/* <Route path="/stops" > */}
            {/* </Route> */}
          </Routes>
        </div>
      </div>
    );
  }
}

function Home(props) {
  return (
    <>
      <BusSearch />
      <Outlet />
    </>
  )
}


export default App;
