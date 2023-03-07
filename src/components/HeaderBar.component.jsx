// Hardcoded module
import HeaderTitle from "./HeaderTitle.component";

function HeaderBar(props){
    const lang = props.lang;

    return (
        <div className="headerNavbar" style={{textAlign: "center", position: "fixed"}}>
                
                <HeaderTitle text="Kevin Jäger" size="40px" color="#353836" className="unselectable"></HeaderTitle>

                 {/* <div className="headerBar"> */}
            {/* <div style={{marginTop: "20px", textAlign: "center" }}>
                 <HeaderTitle text={lang.root} size="15px" color="#353836" onClick={props.switchLang} isLink={true}></HeaderTitle>
                <HeaderTitle text="Kevin Jäger" size="50px" color="#353836" className="unselectable"></HeaderTitle>
            </div> */}
            
         {/* </div> */}
                <HeaderTitle text={lang.categories.home} className={"headerTitle unselectable"} isLink={true} onClick={props.homeClick}></HeaderTitle>
                <HeaderTitle text={lang.categories.work} className={"headerTitle unselectable"} isLink={true} onClick={props.workClick}></HeaderTitle>
                <HeaderTitle text={lang.categories.hobbies} className={"headerTitle unselectable"} isLink={true} onClick={props.hobbyClick}></HeaderTitle>
                <HeaderTitle text={lang.categories.education} className={"headerTitle unselectable"} isLink={true} onClick={props.eduClick}></HeaderTitle>
                <HeaderTitle text={lang.categories.contactme} className={"headerTitle unselectable"} isLink={true} onClick={props.contactClick}></HeaderTitle>
                {/* <hr></hr> */}
        </div>
        
    )
}

export default HeaderBar;