import '../App.css';
import startIcon from '../icon.png'
import { useState } from 'react';

function StartButton(props) {
    const [fadeClass, setFadeClass] = useState("fade");
    function changePage() {
        setFadeClass("fadeout");
        setTimeout(function () {
            props.openApp();
        }, 1000);
    }

    return (
        <div className={fadeClass}>
            <div className='startButtonContainer'>
                <h1 className='startButton' onClick={changePage}>Click me!</h1>
                <img className='startButton' onClick={changePage} src={startIcon} alt="A spinning nugget one can click on to open the app"></img>
            </div>
        </div>
    );
}


export default StartButton;