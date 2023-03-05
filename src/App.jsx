import './App.css';
import HeaderBar from './components/HeaderBar.component';
import { useState, useEffect, useRef } from 'react';
import { sv, en } from './lang.js'
import Home from './components/Home.component';
import ButtomButton from './components/BottomButton.component';

function App(){
    const [lang, setLang] = useState(sv);
    function switchLang() {
        if (lang.root === "en") {
          setLang(sv);
        }
        else if (lang.root === "sv") {
          setLang(en);
        }
    }

    // const scrollTest = useRef();




    return (
        <div className='app'>
            <HeaderBar lang={lang} switchLang={switchLang}></HeaderBar>
            <Home lang={lang}> </Home>
            <ButtomButton position={0} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" link="https://github.com/Kevcodejr"></ButtomButton>
            <ButtomButton position={1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EZibb_PMnvz_ysNN6H-V_o-g1McCs85cjY5ArHQ&s" link="https://www.linkedin.com/in/kevin-j%C3%A4ger/"></ButtomButton>
            <ButtomButton position={2} src={
                lang.root === "en" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png" : 
                "https://cdn-icons-png.flaticon.com/512/197/197564.png"
                } onClick={switchLang}></ButtomButton>
            {/* <ButtomButton position={3} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EZibb_PMnvz_ysNN6H-V_o-g1McCs85cjY5ArHQ&s" onClick={()=> scrollTest.current.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"})}></ButtomButton> */}
            {/* ref={scrollTest} */}

            <div  style={{height: "200px"}}></div>
        </div>
    )
}

export default App;