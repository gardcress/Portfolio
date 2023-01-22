import './App.css';
import { useState, useEffect } from 'react';
import StartButton from './components/StartButton.component';
import NavButton from './components/NavButton.component';
import FlyingNugget from './components/FlyingNugget.component';
import { sv, en } from './lang.js'
import Category from './components/Category.component';

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
  }

  function closeApp() {
    setIsAppOpen(false);
  }

  // Can add here a section to make it not reset on lang change
  function langHandler() {
    if (lang.root === "en") {
      setLang(sv);
    }
    else if (lang.root === "sv") {
      setLang(en);
    }
  }

  function categoryHandler(event) {
    const newCategory = event.target.innerText;
    if(newCategory === category){
      setCategory("none");
    }
    else{
      setCategory(event.target.innerText);
    }
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
    if (category == "none") {
      const welcome = [
        { title: lang.welcome_title, desc: lang.welcome_desc },
        { title: "", desc: lang.welcome_title_2 },
      ]
      return (
        <Category textInput={welcome}></Category>
      );
    }
    if (category === en().education || category === sv().education) {
      const education = [
        { title: lang.schools.uniCourses_title, desc: lang.schools.uniCourses_desc },
        { title: lang.schools.highSchoolTitle, desc: lang.schools.highSchoolDesc },
      ]
      return (
        <Category textInput={education}></Category>
      );
    }
    if (category === en().work || category === sv().work) {
      const work = [
        { title: lang.jobs.job4_title, desc: lang.jobs.job4_desc },
        { title: lang.jobs.job3_title, desc: lang.jobs.job3_desc },
        { title: lang.jobs.job2_title, desc: lang.jobs.job2_desc },
        { title: lang.jobs.job1_title, desc: lang.jobs.job1_desc },
      ]
      return (
        <Category textInput={work}></Category>
      );
    }
    if (category === en().hobby || category === sv().hobby) {
      const hobby = [
        { title: lang.hobbies.porfolio_title, desc: lang.hobbies.porfolio_desc },
      ]
      return (
        <Category textInput={hobby}></Category>
      );
    }
    if (category === en().otherlinks || category === sv().otherlinks) {
      const links = [
        { title: <a href='https://github.com/Tropae' target="_blank">{lang.github}</a>, desc: "" },
      ]
      return (
        <Category textInput={links}></Category>
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
