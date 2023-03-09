import '../App.css';

function HeaderTitle(props){
    if(props.isLink === true){
        return (
            <span style={{
                fontSize: props.size, 
                color: props.color, 
                textAlign: props.textAlign,
                marginRight: props.marginRight,
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
            marginRight: props.marginRight,
        }} onClick={props.onClick} className={props.className === undefined ? '' : (props.className)}>
            {props.text}
        </span>
    )
}

export default HeaderTitle;