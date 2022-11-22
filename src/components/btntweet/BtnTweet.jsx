import  Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import "./BtnTweet.css"
const BtnTweet=({size})=>{
    return(
        <div >
            <Button className='BtnTweet' variant="primary" size='sm'>Tweet</Button>
        </div>
    )
}
export default BtnTweet;