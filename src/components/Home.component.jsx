import HeaderTitle from "./HeaderTitle.component";
import { useState, useEffect } from 'react';
import CodeParagraph from "./CodeParagraph.component";

function Home(props){
    const lang = props.lang.home;
    const [codeInfo, setCodeInfo] = useState();
    const [codeTitle, setCodeTitle] = useState();
    const [codeClass, setCodeClass] = useState("fadeIn");
    const [difficulty, setDifficulty] = useState();
    const [currentCodeParagraphId, setCodeParagraphId] = useState(0);
    // const [codeBlock, setCodeBlock] = useState(<CodeParagraph className={codeClass + " homeSiding"} text={codeInfo} title={codeTitle} difficulty={difficulty} competence={lang.competence}></CodeParagraph>);
    // useEffect(() => {
        
    // });

    const codeParagraphs = [
        <div></div>,
        <CodeParagraph className={codeClass + " codeBlock homeSiding"} text={lang.javascript_desc} title="Javascript" difficulty={5} competence={lang.competence}></CodeParagraph>,
        <CodeParagraph className={codeClass + " homeSiding"} text={lang.html_desc} title="Html / CSS / Bootstrap" difficulty={5} competence={lang.competence}></CodeParagraph>,
        <CodeParagraph className={codeClass + " homeSiding"} text={lang.java_desc} title="Java" difficulty={5} competence={lang.competence}></CodeParagraph>,
        <CodeParagraph className={codeClass + " homeSiding"} text={lang.c_desc} title="C# / C" difficulty={3} competence={lang.competence}></CodeParagraph>,
        // <CodeParagraph className={codeClass + " homeSiding"} text={lang.bootstrap_desc} title="Bootstrap" difficulty={3} competence={lang.competence}></CodeParagraph>,
        <CodeParagraph className={codeClass + " homeSiding"} text={lang.node_desc} title="Node.js" difficulty={2} competence={lang.competence}></CodeParagraph>,
        <CodeParagraph className={codeClass + " homeSiding"} text={lang.react_desc} title="React.js" difficulty={4} competence={lang.competence}></CodeParagraph>,
        <CodeParagraph className={codeClass + " homeSiding"} text={lang.git_desc} title="Github (git)" difficulty={3} competence={lang.competence}></CodeParagraph>,
        <CodeParagraph className={codeClass + " homeSiding"} text={lang.linux_desc} title="Linux (ubuntu 20.04)" difficulty={3} competence={lang.competence}></CodeParagraph>,
        <CodeParagraph className={codeClass + " homeSiding"} text={lang.dotdotdot_desc} title="..." difficulty={5} competence={lang.competence}></CodeParagraph>,
    ]



    function updateCodeBlock(text, title, diff){
        setCodeTitle(title);
        setDifficulty(diff);
        setCodeInfo(text);
        console.log("Values updated")
    }

    // console.log(lang.javascript_desc)


    return(
        <div className="home" style={{textAlign: "center"}}>
            <img className="profileImage" src='https://media.licdn.com/dms/image/D4D03AQEkmjvEnpTsrw/profile-displayphoto-shrink_400_400/0/1673964306866?e=1683158400&v=beta&t=9QHBZE6PcfmGHdt5Ubtutwlga-Xx_CuzhsuIRZXE8Xc'></img>
            <div className="homeSiding">
                <HeaderTitle className="sectionTitle" text={lang.welcome_title}></HeaderTitle>
            </div>
            
            <p className="homeTitle homeSiding">
                {lang.welcome_desc}
            </p>

            {/* <p className="homeSiding" style={{fontSize: "20px", fontWeight: "bold"}}>
                Uppdaterar sidan, visa funktioner kanske inte fungerar som de ska, kolla gärna in senare! / 
                Uppdating website, some functionality might not work yet, please check back in later!
            </p> */}
            <p style={{fontSize: "20px", fontWeight: "bold"}}>
                {lang.skills}
            </p>
            <div style={{width: "fit-content", textAlign:"left", marginLeft:"auto", marginRight: "auto"}}>
                <ul class="checkList">
                    {/* Bug with these, they won't change lang. Nothing wrong with lang file */}
                    <li onClick={()=> setCodeParagraphId(1)}>Javascript</li>
                    <li onClick={()=> setCodeParagraphId(2)}>Html / CSS / Bootstrap</li>
                    <li onClick={()=> setCodeParagraphId(3)}>Java</li>
                    <li onClick={()=> setCodeParagraphId(4)}>C# / C</li>
                    {/* <li onClick={()=> setCodeParagraphId(5)}>Bootstrap</li> */}
                    <li onClick={()=> setCodeParagraphId(5)}>Node.js</li>
                    <li onClick={()=> setCodeParagraphId(6)}>React.js</li>
                    <li onClick={()=> setCodeParagraphId(7)}>Github (git)</li>
                    <li onClick={()=> setCodeParagraphId(8)}>Linux (ubuntu 20.04)</li>
                    <li onClick={()=> setCodeParagraphId(9)}>...</li>
                </ul>
            </div>
            {/* <CodeParagraph className={codeClass + " homeSiding"} text={lang.javascript_desc} title={lang.javascript_title} difficulty={difficulty} competence={lang.competence}></CodeParagraph> */}
            {codeParagraphs[currentCodeParagraphId]}
        </div>
    )
}

export default Home;