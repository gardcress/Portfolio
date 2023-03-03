// Hardcoded module
import HeaderTitle from "./HeaderTitle.component";

function HeaderBar(props){
    const lang = props.lang;

    return (
        <div>
            <div style={{marginTop: "20px", textAlign: "center" }}>
                <HeaderTitle text="Kevin Jäger" size="50px" color="#353836"></HeaderTitle>
                <HeaderTitle text={lang.root} size="15px" color="#353836" onClick={props.switchLang} isLink={true}></HeaderTitle>
            </div>
            <div style={{marginTop: "20px", textAlign: "center"}}>
                <HeaderTitle text={lang.home} className={"headerTitle"} isLink={true}></HeaderTitle>
                <HeaderTitle text={lang.education} className={"headerTitle"} isLink={true}></HeaderTitle>
                <HeaderTitle text={lang.work} className={"headerTitle"} isLink={true}></HeaderTitle>
                <HeaderTitle text={lang.hobby} className={"headerTitle"} isLink={true}></HeaderTitle>
                <HeaderTitle text={lang.otherlinks} className={"headerTitle"} isLink={true}></HeaderTitle>

            </div>

        </div>
    )
}

export default HeaderBar;