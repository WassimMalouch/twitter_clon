

import "bootstrap/dist/css/bootstrap.min.css"
import "./RightBar.css"

import SearchBar from './SearchBar';
import Trends from "./Trends";

const RightBar=()=>{
    return(
        <div className='RightBar'>
            <SearchBar
            />
            <Trends
            />
        </div>
    )
}
export default RightBar;