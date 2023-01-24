import './App.css'
import React from 'react'
import LandingSection from './components/landing-page/LandingSection';
import imageSource from './images/taylor.png'
function App() {
  
  return (
    <div className="App">
      <LandingSection/>
      {/*<NavBarLoggedIn invisible={false} name='Rezzaz Chiraz Rezzaz' imageSource={imageSource} nameNotification="Rezzaz Chiraz" session="Full math revision session with Noureddine"/>
      <Notification nameNotification="Rezzaz Chiraz" session="Full math revision session with Noureddine"/>
      <EditProfile imageSource={imageSource} firstName='Taylor' lastName='Swift' mail='taylor.swift@queen.com' wilaya='Florida' commune='SNY' address='Corneillia Street' />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
