function Entry(props){

    return(
        <div>
            <p style={{fontSize: "25px", marginBottom: "0"}}>
                {props.title}
            </p>
            <p style={{marginTop: 0}}>
                {props.desc}
            </p>
        </div>
    )
}

export default Entry;