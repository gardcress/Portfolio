// Hardcoded module
import HeaderTitle from "./HeaderTitle.component";

function HeaderBar(props){
    const lang = props.lang;

    return (
        <div className="headerBar">
            <div style={{marginTop: "20px", textAlign: "center" }}>
                <HeaderTitle text="Kevin Jäger" size="50px" color="#353836" className="unselectable"></HeaderTitle>
                <HeaderTitle text={lang.root} size="15px" color="#353836" onClick={props.switchLang} isLink={true}></HeaderTitle>
            </div>
            <div style={{marginTop: "20px", textAlign: "center"}}>
                <HeaderTitle text={lang.categories.home} className={"headerTitle unselectable"} isLink={true}></HeaderTitle>
                <HeaderTitle text={lang.categories.education} className={"headerTitle unselectable"} isLink={true}></HeaderTitle>
                <HeaderTitle text={lang.categories.work} className={"headerTitle unselectable"} isLink={true}></HeaderTitle>
                <HeaderTitle text={lang.categories.hobbies} className={"headerTitle unselectable"} isLink={true}></HeaderTitle>
                <HeaderTitle text={lang.categories.links} className={"headerTitle unselectable"} isLink={true}></HeaderTitle>
            </div>
        </div>
    )
}

export default HeaderBar;