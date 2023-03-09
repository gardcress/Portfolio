function Dot(props){

    return (
        // src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/57151/black-circle-emoji-clipart-md.png" 
        <img style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#000000",
            borderRadius: "50%",
            position: "fixed",
            top: props.y + "px",
            left: props.x  + "px",
        }}>
        </img>
    )
}

export default Dot;