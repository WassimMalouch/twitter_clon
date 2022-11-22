import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import dataFile from "../../Data/generated.json"
import "./Trends.css";
const Trends=()=>{
    const AllTrends= dataFile.map((data) => {
        return (
            <Trend
            place={data.place}
            trend={data.trend}
            tweets={data.tweets}
            />
        )
    });

    return(
        <div className="Trends">
            <span style={{fontWeight:"bold",margin:"0px 20px" ,fontSize:"20px"}}>Trends for you</span>
            {AllTrends}
        </div>
    )
}


const Trend=({place,trend,tweets})=>{
    return(
        <div className="trend" style={{display:"flex",justifyContent:"space-between",padding:'5px 10px'}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <span style={{color:"gray"}}>{place}</span>
                <span style={{fontWeight:"bold"}}>#{trend}</span>
                <span style={{color:"gray"}}>{tweets}k Tweets</span>
            </div>
            <FontAwesomeIcon
    icon={faEllipsisH}
    />
        </div>
    )
}




export default Trends;