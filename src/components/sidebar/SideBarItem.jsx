import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./SideBarItem.css"



const SideBarItem=({imgPath,text})=>{
    const textItem = {text} ?  <span>{text}</span> : ""
    return(
    <div className='SideBarItem'>
    <a href='#' className='LinkSideBarItem'>
    {imgPath}
    {textItem}
    </a>
    </div>
    )
    }

    export default SideBarItem;
