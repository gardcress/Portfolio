function ButtomButton(props){
    const position = props.position;
    const newPosition = (position * 40) + ((position + 1) * 10);

    function openLink(){
        window.open(props.link, '_blank');
    }

    if(props.onClick !== undefined){
        return(
            <img className={"bottomButton unselectable " + props.className} src={props.src} style={{marginRight: newPosition + "px"}} onClick={props.onClick}></img>
        )
    }

    return (
        <img className={"bottomButton unselectable " + props.className} src={props.src} style={{marginRight: newPosition + "px"}} onClick={openLink}></img> 
    )
}

export default ButtomButton;