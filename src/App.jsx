import './App.css';
import HeaderBar from './components/HeaderBar.comp';
import { useState, useEffect } from 'react';
import { sv, en } from './lang.js'

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




    return (
        <div>
            <HeaderBar lang={lang} switchLang={switchLang}></HeaderBar>
            {/* <img src='https://media.licdn.com/dms/image/D4D03AQEkmjvEnpTsrw/profile-displayphoto-shrink_400_400/0/1673964306866?e=1683158400&v=beta&t=9QHBZE6PcfmGHdt5Ubtutwlga-Xx_CuzhsuIRZXE8Xc'></img> */}
        </div>
    )
}

export default App;