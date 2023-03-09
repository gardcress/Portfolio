import './App.css';
import HeaderBar from './components/HeaderBar.component';
import { useState, useEffect, useRef } from 'react';
import { sv, en } from './lang.js'
import Home from './components/Home.component';
import Work from './components/Work.component';
import ButtomButton from './components/BottomButton.component';
import Hobby from './components/Hobby.component';
import Education from './components/Education.component';
import HeaderTitle from './components/HeaderTitle.component';
import Dot from './components/Dot.component';


function App() {
  const [lang, setLang] = useState(sv);
  const [rgbBackgroundColor, setRgbBackgroundColor] = useState("rgb(240, 255, 255, 0.9)");

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
    if (value > 0.9) {
      return;
    }
    // let value = (event.target.documentElement.scrollTop) / 1000;
    setRgbBackgroundColor("rgb(240, 255, 255, " + value + ")");
  }

  useEffect(() => {
    // console.log("Registering event listeners");
    window.addEventListener("scroll", onScroll);
    // window.addEventListener("mousemove", onMouseMove);
    

  });








  const homeScroll = useRef();
  const eduScroll = useRef();
  const hobbyScroll = useRef();
  const workScroll = useRef();
  const contactScroll = useRef();

  function scrollTo(ref) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  function openWebsite(link) {
    window.open(link, '_blank');
  }




  return (
    <div className='app' style={{ backgroundColor: rgbBackgroundColor }}>
      <HeaderBar lang={lang} switchLang={switchLang}
        homeClick={() => scrollTo(homeScroll)}
        workClick={() => scrollTo(workScroll)}
        hobbyClick={() => scrollTo(hobbyScroll)}
        eduClick={() => scrollTo(eduScroll)}
        contactClick={() => scrollTo(contactScroll)}
      ></HeaderBar>
      <div ref={homeScroll} style={{ height: "1px" }}></div>

      {/* <div style={{height: "1000px"}}></div> */}

      <div>
        <Home lang={lang}> </Home>
      </div>
      <hr ref={workScroll} style={{ marginLeft: "auto", marginRight: "auto", width: "80%", }}></hr>

      <div>
        <Work lang={lang}></Work>
      </div>
      <hr ref={hobbyScroll} style={{ marginLeft: "auto", marginRight: "auto", width: "80%", }}></hr>


      <div>
        <Hobby lang={lang}></Hobby>
      </div>
      <hr ref={eduScroll} style={{ marginLeft: "auto", marginRight: "auto", width: "80%", }}></hr>


      <div>
        <Education lang={lang}></Education>
      </div>

      <hr ref={contactScroll} style={{ marginLeft: "auto", marginRight: "auto", width: "80%", }}></hr>

      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <HeaderTitle className="sectionTitle" text={lang.categories.contactme}></HeaderTitle>
        <p>Email: kevin.jager@live.com</p>
        <p>Telefon: 076-058 75 01</p>
        <div style={{ height: "50px" }}></div>

        <img className='endButton' style={{ marginRight: "10px" }} src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
          onClick={() => openWebsite("https://github.com/Kevcodejr")}
        ></img>
        <img className='endButton' src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png'
          onClick={() => openWebsite("https://www.linkedin.com/in/kevin-j%C3%A4ger/")}
        ></img>



        <div style={{ height: "80vh" }}></div>
      </div>

      





      {/* footer */}
      <ButtomButton className="hide600W" position={2} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" link="https://github.com/Kevcodejr"></ButtomButton>
      <ButtomButton className="hide600W" position={1} src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" link="https://www.linkedin.com/in/kevin-j%C3%A4ger/"></ButtomButton>
      <ButtomButton position={0} src={
        lang.root === "en" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png" :
          "https://cdn-icons-png.flaticon.com/512/197/197564.png"
      } onClick={switchLang}></ButtomButton>
      {/* <ButtomButton position={3} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EZibb_PMnvz_ysNN6H-V_o-g1McCs85cjY5ArHQ&s" onClick={()=> homeScroll.current.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"})}></ButtomButton> */}
      {/* ref={scrollTest} */}

      {/* <p style={{ textAlign: "center", textDecoration: "underline" }}>Jag håller på att uppdatera sidan, visa funktioner kanske inte fungerar, kom gärna tillbaka lite senare!
        / I'm currently updating the website, some functionality might not work, please come back a bit later!</p> */}
    </div>
  )
}

export default App;