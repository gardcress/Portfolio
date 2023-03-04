function CodeParagraph(props){
    if(props.text === undefined){
        return;
    }

    let dots = [];
    let circles = [];

    for(var i = 0; i < props.difficulty; i++){
        dots.push(
            <span key={i} class="dot"></span>
        )
    }

    for(var i = 0; i < 5 - props.difficulty; i ++){
        circles.push(
            <span key={i} class="circle"></span>
        )
    }

    return(
        <div className={props.className}>
            <p style={{fontSize: "30px", marginBottom: "5px"}}>{props.title}</p>
            <div style={{width: "fit-content", marginLeft: "auto", marginRight: "auto"}}>
                <span style={{marginTop: "5px", width: "fit-content"}}>{props.competence + ": "}</span>
                {dots}{circles}
            </div>
            <p style={{marginTop: "5px"}}>{props.text} </p>
        </div>
    );
}
export default CodeParagraph;
