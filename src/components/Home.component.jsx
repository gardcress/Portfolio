import HeaderTitle from "./HeaderTitle.component";

function Home(props){
    const lang = props.lang;


    return(
        <div className="home" style={{textAlign: "center"}}>
            <img className="profileImage" src='https://media.licdn.com/dms/image/D4D03AQEkmjvEnpTsrw/profile-displayphoto-shrink_400_400/0/1673964306866?e=1683158400&v=beta&t=9QHBZE6PcfmGHdt5Ubtutwlga-Xx_CuzhsuIRZXE8Xc'></img>
            <div className="homeSiding">
                <HeaderTitle className="" size="25px" text={lang.home.welcome_title}></HeaderTitle>
            </div>
            
            <p className="homeTitle homeSiding">
                {lang.home.welcome_desc}
            </p>
        </div>
    )
}

export default Home;