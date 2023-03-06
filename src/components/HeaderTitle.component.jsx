import '../App.css';

function HeaderTitle(props){
    if(props.isLink === true){
        return (
            <span style={{
                fontSize: props.size, 
                color: props.color, 
                textAlign: props.textAlign,
                marginRight: "15px",
                cursor: "pointer"
            }} onClick={props.onClick} 
            className={props.className === undefined ? '' : (props.className)}>
                {props.text}
            </span>
        )
    } 
    return (
        <span style={{
            fontSize: props.size, 
            textAlign: props.textAlign,
            color: props.color, 
            marginRight: "15px"
        }} onClick={props.onClick} className={props.className === undefined ? '' : (props.className)}>
            {props.text}
        </span>
    )
}

export default HeaderTitle;