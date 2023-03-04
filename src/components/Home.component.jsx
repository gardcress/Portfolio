import HeaderTitle from "./HeaderTitle.component";

function Home(props){
    const lang = props.lang.home;


    return(
        <div className="home" style={{textAlign: "center"}}>
            <img className="profileImage" src='https://media.licdn.com/dms/image/D4D03AQEkmjvEnpTsrw/profile-displayphoto-shrink_400_400/0/1673964306866?e=1683158400&v=beta&t=9QHBZE6PcfmGHdt5Ubtutwlga-Xx_CuzhsuIRZXE8Xc'></img>
            <div className="homeSiding">
                <HeaderTitle className="" size="25px" text={lang.welcome_title}></HeaderTitle>
            </div>
            
            <p className="homeTitle homeSiding">
                {lang.welcome_desc}
            </p>

            <p style={{fontSize: "20px", fontWeight: "bold"}}>
                {lang.skills}
            </p>
            <div style={{width: "fit-content", textAlign:"left", marginLeft:"auto", marginRight: "auto"}}><ul class="check-list">
                <li>Javascript</li>
                <li>Html</li>
                <li>CSS</li>
                <li>Java</li>
                <li>C#</li>
                <li>C</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Github (git)</li>
                <li>...</li>
            </ul></div>

        </div>
    )
}

export default Home;