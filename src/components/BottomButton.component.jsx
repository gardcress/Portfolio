function ButtomButton(props){
    const position = props.position;
    const newPosition = 10 + (position * 40);

    function openLink(){
        window.open(props.link, '_blank');
    }

    return (
        <img className="buttomButton" src={props.src} style={{marginRight: newPosition + "px"}} onClick={openLink}></img> 
    )
}

export default ButtomButton;