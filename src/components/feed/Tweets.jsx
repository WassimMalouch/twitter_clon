import dataFile from "../../Data/generated2.json"
import p from "../../assets/profile.png"
import './Tweets.css'

import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';




const Tweets=()=>{

    const AllTweets=dataFile.map((element) => {
        return(
            <Tweet
            profile={element.profile}
            tweet={element.tweet}
            />
        )
    })


    return(
        <div>
            {AllTweets}
        </div>
    )
}


const Tweet=({profile,tweet})=>{
    return(
        <div className="tweet" style={{display:"flex",flexDirection:"column",border:"1px solid rgb(239, 243, 244)" }}>
                <div style={{display:"flex"}}>
                <div style={{width:"50px"}}>
                <img src={p} alt="personnel img" style={{width:'90%',borderRadius:"99px"}}></img>
                </div>
                <div style={{display:'flex',gap:"10px"}}>
                    <span style={{fontWeight:'bold'}}>{profile.profilename}</span>
                    <span style={{color:'gray'}}>{profile.username}</span>
                    <span style={{color:'gray'}}>{tweet.tweettime}</span>
                </div>
                </div>
                <span>{tweet.tweet}</span>
                <div style={{display:'flex',marginTop:"10px",justifyContent:'space-around'}}>
                    <span><ChatBubbleOutlineRoundedIcon/> {tweet.reply}</span>
                    <span><RepeatRoundedIcon /> {tweet.retweet}</span>
                    <span><FavoriteBorderRoundedIcon /> {tweet.like}</span>
                    <IosShareOutlinedIcon />
                </div>
        </div>
    )
}



export default Tweets;


