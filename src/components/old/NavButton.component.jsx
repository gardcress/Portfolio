import '../App.css';

function NavButton(props){
    return(
        <span className={props.className === undefined ? 'defaultFont navButton unselectable' : props.className}  onClick={props.onClick} style={props.style}>
            {props.text}
        </span>
    );
}

export default NavButton;