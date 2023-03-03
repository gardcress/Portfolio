import '../App.css';

function HeaderTitle(props){
    if(props.isLink === true){
        return (
            <span style={{
                fontSize: props.size, 
                color: props.color, 
                marginRight: "15px",
                cursor: "pointer"
            }} onClick={props.onClick} 
            className={props.className === undefined ? 'unselectable' : (props.className + " unselectable")}>
                {props.text}
            </span>
        )
    } 
    return (
        <span style={{
            fontSize: props.size, 
            color: props.color, 
            marginRight: "15px"
        }} onClick={props.onClick}>
            {props.text}
        </span>
    )
}

export default HeaderTitle;