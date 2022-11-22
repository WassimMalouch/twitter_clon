import Tweets from "./Tweets"
import NewTweet from "./NewTweet"


const Feed=()=>{
    return(
        <div style={{margin:'0px 20px'}}>
            <NewTweet
            />
            <Tweets
            />
        </div>
    )
}

export default Feed;