import './App.css';
import HeaderBar from './components/HeaderBar.component';
import { useState, useEffect, useRef } from 'react';
import { sv, en } from './lang.js'
import Home from './components/Home.component';
import Work from './components/Work.component';
import ButtomButton from './components/BottomButton.component';
import { PROPERTY_TYPES } from '@babel/types';

function App() {
  const [lang, setLang] = useState(sv);
  const [rgbBackgroundColor, setRgbBackgroundColor] = useState("rgb(230, 255, 255, 1)");
  // const [rgbValue, setRgbValue] = useState(1);
  // const [oldScroll, setOldScroll] = useState(0);
  function switchLang() {
    if (lang.root === "en") {
      setLang(sv);
    }
    else if (lang.root === "sv") {
      setLang(en);
    }
  }

  function onScroll(event) {
    // setOldScroll(event.target.documentElement.scrollTop);
    let value = 1 - ((event.target.documentElement.scrollTop) / 1000);
    setRgbBackgroundColor("rgb(230, 255, 255, " + value + ")");
  }

  useEffect(() => {
    // console.log("Registering event listeners");
    window.addEventListener("scroll", onScroll);
  });



  const homeScroll = useRef();
  const eduScroll = useRef();
  const hobbyScroll = useRef();
  const workScroll = useRef();

  function scrollTo(ref) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }




  return (
    <div className='app' style={{ backgroundColor: rgbBackgroundColor }}>
      <HeaderBar lang={lang} switchLang={switchLang}
        homeClick={() => scrollTo(homeScroll)} 
        workClick={() => scrollTo(workScroll)} 
        hobbyClick={() => scrollTo(hobbyScroll)} 
        eduClick={() => scrollTo(eduScroll)}
      ></HeaderBar>
      <div ref={homeScroll} style={{ height: "1px" }}></div>

      {/* <div style={{height: "1000px"}}></div> */}

      <div>
        <Home lang={lang}> </Home>
      </div>
      <hr ref={workScroll} style={{marginLeft: "auto", marginRight: "auto", width: "80%", }}></hr>

      <div>
        <Work lang={lang}></Work>
      </div>

      <div ref={hobbyScroll}>

      </div>

      <div ref={eduScroll}>

      </div>



      {/* footer */}
      <ButtomButton position={0} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" link="https://github.com/Kevcodejr"></ButtomButton>
      <ButtomButton position={1} src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" link="https://www.linkedin.com/in/kevin-j%C3%A4ger/"></ButtomButton>
      <ButtomButton position={2} src={
        lang.root === "en" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png" :
          "https://cdn-icons-png.flaticon.com/512/197/197564.png"
      } onClick={switchLang}></ButtomButton>
      {/* <ButtomButton position={3} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EZibb_PMnvz_ysNN6H-V_o-g1McCs85cjY5ArHQ&s" onClick={()=> homeScroll.current.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"})}></ButtomButton> */}
      {/* ref={scrollTest} */}

      <p style={{ textAlign: "center", textDecoration: "underline" }}>Jag håller på att uppdatera sidan, visa funktioner kanske inte fungerar, kom gärna tillbaka lite senare!
        / I'm currently updating the website, some functionality might not work, please come back a bit later!</p>
      <div style={{ height: "2000px" }}></div>
    </div>
  )
}

export default App;