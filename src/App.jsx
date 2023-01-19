import './App.css';
import { useState, useEffect } from 'react';
import StartButton from './components/StartButton.component';
import NavButton from './components/NavButton.component';
import FlyingNugget from './components/FlyingNugget.component';

function App() {
  // Get width and height of viewport
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  //////////////////////////////////////


  const [appIsOpen, setIsAppOpen] = useState(false);

  function openApp() {
    setIsAppOpen(true);
    console.log("App opened");
  }

  function closeApp() {
    setIsAppOpen(false);
    console.log("App closed");
  }


  // Startscreen
  if (!appIsOpen) {
    return (
      <div className="App">
        <StartButton openApp={openApp}></StartButton>
      </div>
    );
  }



  // Main app
  return (
    <div className="App">
      <div className="hideNuggetsOnStart">
      <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
      <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
      <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
      <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
      </div>
      <div className="hideOnStart">
        


        {/* {appIsOpen && <p>App is open</p>}
      {appIsOpen ? <p>App is open</p> : <p>App is NOT open</p>}
      <p>This is my portfolio</p> */}


        <div className='navbar'>
          <NavButton text="Kevin Jäger" style={{ backgroundSize: "0", marginTop: "10px", cursor: "default" }}></NavButton>
        </div>
        <div className='navbar'>
          <NavButton text="Education" style={{color: "salmon", backgroundImage: "linear-gradient(salmon 0 0)"}}></NavButton>
          <NavButton text="Work Experience" style={{color: "palegreen", backgroundImage: "linear-gradient(palegreen 0 0)"}}></NavButton>
          <NavButton text="Hobby Projects" style={{color: "cornflowerblue", backgroundImage: "linear-gradient(cornflowerblue 0 0)"}}></NavButton>
          <NavButton text="Other Links " style={{color: "black", backgroundImage: "linear-gradient(black 0 0)"}}></NavButton>
        </div>

        


        <button onClick={closeApp}>Close App</button>
      </div>
    </div>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default App;
