import '../App.css';
import nuggetImageAlive from '../icon.png'
import nuggetImageDead from '../deadicon.png'
import { useState, useEffect } from 'react';

function FlyingNugget(props) {
    const [isNuggetAlive, setNuggetLife] = useState(true);
    const [topPosition, setTopPosition] = useState(Math.floor(Math.random() * props.dimensions.height));
    const [deathTopPosition, setDeathTopPosition] = useState(0);
    const [leftPosition, setLeftPosition] = useState(Math.floor(Math.random() * props.dimensions.width));
    const [deathLeftPosition, setDeathLeftPosition] = useState(0);

    function nuggetOnClick(event) {
        setNuggetLife(false);
        setDeathTopPosition(event.clientY)
        setDeathLeftPosition(event.clientX)
    }

    useEffect(() => {
        const interval = setInterval(function () {
            let leftSpeed = Math.floor(Math.random() * (props.dimensions.width * 0.3));
            let topSpeed = Math.floor(Math.random() * (props.dimensions.height * 0.3));

            if(leftPosition + leftSpeed > props.dimensions.width){
                setLeftPosition(leftPosition - leftSpeed)
            }
            else if(leftPosition - leftSpeed < 0){
                setLeftPosition(leftPosition + leftSpeed)
            }
            else{
                const randomizer = Math.floor(Math.random() * 2);
                if(randomizer === 0){
                    setLeftPosition(leftPosition + leftSpeed)
                }
                else{
                    setLeftPosition(leftPosition - leftSpeed)
                }
            }

            if(topPosition + topSpeed > props.dimensions.height){
                setTopPosition(topPosition - topSpeed)
            }
            else if(topPosition - topSpeed < 0){
                setTopPosition(topPosition + topSpeed)
            }
            else{
                const randomizer = Math.floor(Math.random() * 2);
                if(randomizer === 0){
                    setTopPosition(topPosition + topSpeed)
                }
                else{
                    setTopPosition(topPosition - topSpeed)
                }
            }

        }, 3000);
        if (isNuggetAlive === false) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <span>
            {isNuggetAlive === true ?
                <img src={nuggetImageAlive} className='grayNugget rightNuggetSpin' alt='A gray nugget' onClick={nuggetOnClick}
                    style={{ cursor: "pointer", top: topPosition + "px", left: leftPosition + "px" }}></img> :
                <img src={nuggetImageDead} className='grayNugget hideOnStart' alt='A gray dead nugget'
                    style={{ top: deathTopPosition + "px", left: deathLeftPosition + "px", transition: "none" }}></img>
            }
        </span>
    );
}

export default FlyingNugget;