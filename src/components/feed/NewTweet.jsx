
import './NewTweet.css'
import imgPath from "../../assets/wass.jpg"
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import BtnTweet from '../btntweet/BtnTweet';
const NewTweet=()=>{
    return(
        <div style={{display:"flex",flexDirection:'column',gap:"20px",border:"1px solid rgb(239, 243, 244)"}}>
            <div style={{display:"flex",justifyContent:"space-between",margin:'9px 20px'}}>
            <span style={{fontWeight:"bold"}}>Home</span> 
            <AutoAwesomeOutlinedIcon fontSize='medium'/>
            </div>

            <div style={{display:"flex" ,alignItems:"center",gap:"10px",margin:'0px 20px'}}>
                <div style={{width:"50px"}}>
                <img src={imgPath} alt="personnel img" style={{width:'90%',borderRadius:"99px"}}></img>
                </div>
                <input placeholder="What's happening" className='inputTweet'></input>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"5px" }}>

                <div style={{width:"200px",display:"flex",justifyContent:"space-between", marginLeft:"50px"}}>
                <CropOriginalIcon fontSize='medium' color='primary'/>
                <GifBoxOutlinedIcon fontSize='medium' color='primary'/>
                <PollOutlinedIcon fontSize='medium' color='primary'/>
                <SentimentSatisfiedAltOutlinedIcon fontSize='medium' color='primary'/>
                <EventRepeatOutlinedIcon fontSize='medium' color='primary'/>
                <RoomOutlinedIcon fontSize='medium' color='primary'/>
                </div>
                <BtnTweet size="sm"></BtnTweet>
            </div>

        </div>
    )
}

export default NewTweet ;