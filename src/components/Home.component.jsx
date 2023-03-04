import HeaderTitle from "./HeaderTitle.component";
import { useState } from 'react';
import CodeParagraph from "./CodeParagraph.component";

function Home(props){
    const lang = props.lang.home;
    const [codeInfo, setCodeInfo] = useState();
    const [codeTitle, setCodeTitle] = useState();
    const [codeClass, setCodeClass] = useState("fadeIn");
    const [difficulty, setDifficulty] = useState();


    function updateCodeBlock(text, title, diff){
        if(codeInfo === undefined){
            setCodeTitle(title);
            setDifficulty(diff);
            setCodeInfo(text);
            return;
        }

        setCodeClass("fadeOut");
        setTimeout(function(){
            setCodeTitle(title);
            setDifficulty(diff);
            setCodeClass("fadeIn");
            setCodeInfo(text);
        },1000)
    }


    return(
        <div className="home" style={{textAlign: "center"}}>
            <img className="profileImage" src='https://media.licdn.com/dms/image/D4D03AQEkmjvEnpTsrw/profile-displayphoto-shrink_400_400/0/1673964306866?e=1683158400&v=beta&t=9QHBZE6PcfmGHdt5Ubtutwlga-Xx_CuzhsuIRZXE8Xc'></img>
            <div className="homeSiding">
                <HeaderTitle className="" size="25px" text={lang.welcome_title}></HeaderTitle>
            </div>
            
            <p className="homeTitle homeSiding">
                {lang.welcome_desc}
            </p>

            <p className="homeSiding" style={{fontSize: "20px", fontWeight: "bold"}}>
                Uppdaterar sidan, visa funktioner kanske inte fungerar som de ska, kolla gärna in senare! / 
                Uppdating website, some functionality might not work yet, please check back in later!
            </p>
            <p style={{fontSize: "20px", fontWeight: "bold"}}>
                {lang.skills}
            </p>
            <div style={{width: "fit-content", textAlign:"left", marginLeft:"auto", marginRight: "auto"}}>
                <ul class="checkList">
                    {/* Bug with these, they won't change lang. Nothing wrong with lang file */}
                    <li onClick={()=> updateCodeBlock(lang.javascript_desc, "Javascript", 2)}>Javascript</li>
                    <li onClick={()=> updateCodeBlock(lang.html_desc ,"Html / CSS", 5)}>Html / CSS</li>
                    <li onClick={()=> updateCodeBlock(lang.java_desc ,"Java", 5)}>Java</li>
                    <li onClick={()=> updateCodeBlock(lang.c_desc ,"C# / C", 5)}>C# / C</li>
                    <li onClick={()=> updateCodeBlock(lang.bootstrap_desc ,"Bootstrap", 5)}>Bootstrap</li>
                    <li onClick={()=> updateCodeBlock(lang.node_desc ,"Node.js", 5)}>Node.js</li>
                    <li onClick={()=> updateCodeBlock(lang.react_desc ,"React.js", 5)}>React.js</li>
                    <li onClick={()=> updateCodeBlock(lang.git_desc ,"Github (git)", 5)}>Github (git)</li>
                    <li onClick={()=> updateCodeBlock(lang.linux_desc ,"Linux (ubuntu 20.04)", 5)}>Linux (ubuntu 20.04)</li>
                    <li onClick={()=> updateCodeBlock(lang.dotdotdot_desc ,"...", 5)}>...</li>
                </ul>
            </div>
            <CodeParagraph className={codeClass + " homeSiding"} text={codeInfo} title={codeTitle} difficulty={difficulty} competence={lang.competence}></CodeParagraph>

        </div>
    )
}

export default Home;