import '../App.css';
import nuggetImageAlive from '../icon.png'
import nuggetImageDead from '../deadicon.png'
import { useState, useEffect } from 'react';

function FlyingNugget(props) {
    const [isNuggetAlive, setNuggetLife] = useState(true);
    const [topPosition, setTopPosition] = useState(-(Math.floor(Math.random() * props.dimensions.height)));
    // const [topPosition, setTopPosition] = useState(0);
    const [deathTopPosition, setDeathTopPosition] = useState(0);
    const [leftPosition, setLeftPosition] = useState(0);
    const [deathLeftPosition, setDeathLeftPosition] = useState(0);
    const [degree, setDegree] = useState(0);

    function nuggetOnClick(event) {
        setDeathTopPosition(event.clientY)
        setDeathLeftPosition(event.clientX - 48)
        setNuggetLife(false);
        setDegree(Math.floor(Math.random() * 360));
    }



    useEffect(() => {
        const interval = setInterval(function () {
            setNewTargetPosition();
        }, 6000);
        if (isNuggetAlive === false) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval)
        }
    }, [topPosition, leftPosition])

    useEffect(() => {
        setNewTargetPosition();
    }, []);

    function setNewTargetPosition() {

        let leftSpeed = Math.floor(Math.random() * (props.dimensions.width * 0.8));
        let topSpeed = Math.floor(Math.random() * (props.dimensions.height * 0.8));

        if (leftPosition + leftSpeed > props.dimensions.width) {
            setLeftPosition(leftPosition - leftSpeed)
        }
        else if (leftPosition - leftSpeed < 0) {
            setLeftPosition(leftPosition + leftSpeed)
        }
        else {
            const randomizer = Math.floor(Math.random() * 2);
            if (randomizer === 0) {
                setLeftPosition(leftPosition + leftSpeed)
            }
            else {
                setLeftPosition(leftPosition - leftSpeed)
            }
        }

        if (topPosition + topSpeed > props.dimensions.height) {
            setTopPosition(topPosition - topSpeed)
        }
        else if (topPosition - topSpeed < 0) {
            setTopPosition(topPosition + topSpeed)
        }
        else {
            const randomizer = Math.floor(Math.random() * 2);
            if (randomizer === 0) {
                setTopPosition(topPosition + topSpeed)
            }
            else {
                setTopPosition(topPosition - topSpeed)
            }
        }
    }

    

    if (!isNuggetAlive) {
        return (
            <span>
                <img src={nuggetImageDead} className='grayNugget hideOnStart unselectable' alt='A gray dead nugget'
                    style={{ top: deathTopPosition + "px", left: deathLeftPosition + "px", transition: "none", transform: "rotate(" + degree + "deg)" }}></img>
            </span>
        );
    }
    return (
        <span className='grayNugget'>
            <img src={nuggetImageAlive} className='grayNugget rightNuggetSpin unselectable' alt='A gray nugget' onMouseOver={nuggetOnClick}
                style={{ cursor: "pointer", top: topPosition + "px", left: leftPosition + "px" }}></img>
        </span>
    );
}

export default FlyingNugget;