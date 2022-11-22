import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import "./Profile.css"
import prof from "../../assets/wass.jpg"
const Profile=({imgPath,Name,UserName})=>{
return (
    <div className="Profile">
    <a href="#" >
    <div style={{width:"50px"}}>
        <img src={prof} alt="personnel img" style={{width:'90%',borderRadius:"99px"}}></img>
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
        <span>{Name}</span>
        <span style={{color:"gray"}}>{UserName}</span>
    </div>
    <FontAwesomeIcon
    icon={faEllipsisH}
    />
    </a>

    </div>
)


}

export default Profile;