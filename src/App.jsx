import './App.css';
import HeaderBar from './components/HeaderBar.comp';
import { useState, useEffect } from 'react';
import { sv, en } from './lang.js'
import Home from './components/Home.component';

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
        <div className='app'>
            <HeaderBar lang={lang} switchLang={switchLang}></HeaderBar>
            <Home lang={lang}> </Home>

        </div>
    )
}

export default App;