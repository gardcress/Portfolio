import Entry from "./Entry.component";
import HeaderTitle from "./HeaderTitle.component";

function Work(props){
    const lang = props.lang.work;
    // console.log(lang)
    const entryCompArray = [];
    const entries = [];
    for(const key in lang){
        entries.push(lang[key]);
    }
    // console.log(entries)

    // console.log("-------------------------------")
    let titleReader = "";
    let descReader = "";
    let isDesc = true;
    // console.log(entries[0])
    // console.log(entries[7])

    for(var i = entries.length - 1; i >= 0; i--){
        // console.log(i + entries[i])
        if(isDesc == true){
            descReader = entries[i];
            isDesc = false;
        }
        else {
            titleReader = entries[i];
            entryCompArray.push(<Entry key={entryCompArray.length} title={titleReader} desc={descReader}></Entry>);
            isDesc = true;
            titleReader = "";
            descReader = "";
        }
    }

    // for(const key in lang){
    //     if(isDesc == false){
    //         titleReader = lang[key];
    //         isDesc = true;
    //     }
    //     else {
    //         descReader = lang[key];
    //         entryCompArray.push(<Entry title={titleReader} desc={descReader}></Entry>);
    //         isDesc = false;
    //         titleReader = "";
    //         descReader = "";
    //     }

    //     // console.log(lang[key])
    // }

    return(
        <div className="homeSiding" style={{textAlign: "left", marginTop: "60px", marginRight: "40%"}}>
            <HeaderTitle className="sectionTitle" text={props.lang.categories.work}></HeaderTitle>
            {/* <p>Test</p> */}
            {/* <Entry title="test" desc="desc"></Entry> */}
            {entryCompArray}
        </div>
    )
}

export default Work;