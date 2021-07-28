import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Geolocation, Position } from '@capacitor/geolocation';

const getCoors = async(setPosition:any) =>{
  const coordinates:Position = await Geolocation.getCurrentPosition()
  setPosition({
    lat:coordinates.coords.latitude.toString(),
    lon:coordinates.coords.longitude.toString()
  })
}

function App() {
  const [position, setPosition] = useState({
    lat:"",
    lon:""
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => getCoors(setPosition)}>
            Position is {position.lat} {position.lon}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
