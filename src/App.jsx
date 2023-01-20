import './App.css';
import { useState, useEffect } from 'react';
import StartButton from './components/StartButton.component';
import NavButton from './components/NavButton.component';
import FlyingNugget from './components/FlyingNugget.component';
import { sv, en } from './lang.js'

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
  const [lang, setLang] = useState(en);
  const [category, setCategory] = useState("none")

  function openApp() {
    setIsAppOpen(true);
    console.log("App opened");

  }

  function closeApp() {
    setIsAppOpen(false);
    console.log("App closed");
  }

  function langHandler() {
    if (lang.root === "en") {
      setLang(sv);
    }
    else if (lang.root === "sv") {
      setLang(en);
    }
  }

  function categoryHandler(event) {
    setCategory(event.target.innerText);
    // console.log(category)
  }


  // Startscreen
  if (!appIsOpen) {
    return (
      <div className="App">
        <StartButton openApp={openApp}></StartButton>
      </div>
    );
  }




  // Generate category
  function generateCategory() {
    console.log("generating category..")
    console.log(category)
    console.log(lang.education)
    if (category === lang.education) {
      return (
        <div className='categoryContainer'>
          <div className='textContainer'>
            <h1 className='textContent'>{lang.schools.highSchoolTitle}</h1>
            {lang.schools.highSchoolDesc}
          </div>
        </div>
      );
    }
  }



  // Main app
  return (
    <div className="App">
      <div>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
        <FlyingNugget dimensions={windowDimensions}></FlyingNugget>
      </div>
      <div className="hideOnStart">


        <div className='navbar'>
          <NavButton text="Kevin Jäger" className="defaultFont navButton" style={{ backgroundSize: "0", marginTop: "10px", cursor: "default" }}></NavButton>
          {lang.root === "en" ?
            <img className='navFlagButton' onClick={langHandler} src='https://cdn.pixabay.com/photo/2012/04/23/16/15/flags-38754_960_720.png'></img>
            :
            <img className='navFlagButton' onClick={langHandler} src='https://cdn.pixabay.com/photo/2013/07/13/14/17/sweden-162433_960_720.png'></img>
          }
        </div>
        <div className='navbar'>
          <NavButton text={lang.education} style={{ color: "salmon", backgroundImage: "linear-gradient(salmon 0 0)" }} onClick={categoryHandler}></NavButton>
          <NavButton text={lang.work} style={{ color: "seagreen", backgroundImage: "linear-gradient(seagreen 0 0)" }} onClick={categoryHandler}></NavButton>
          <NavButton text={lang.hobby} style={{ color: "cornflowerblue", backgroundImage: "linear-gradient(cornflowerblue 0 0)" }} onClick={categoryHandler}></NavButton>
          <NavButton text={lang.otherlinks} style={{ color: "black", backgroundImage: "linear-gradient(black 0 0)" }} onClick={categoryHandler}></NavButton>
        </div>


        {generateCategory()}







        {/* <button onClick={closeApp}>Close App</button> */}


        {/* <button onClick={langHandler}>Change Lang</button> */}
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
