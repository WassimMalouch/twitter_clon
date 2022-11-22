import SideBarItem from './SideBarItem'
import Profile from './Profile'
import BtnTweet from '../btntweet/BtnTweet'
import TwitterIcon from '@mui/icons-material/Twitter';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./SideBar.css"







const SideBar=()=>{
return(
    <div className='SideBar'>

        <div >
        <SideBarItem
            imgPath={<TwitterIcon color='primary' fontSize='large'/>}
            text=""
        />

        <SideBarItem
            imgPath={<DoorbellIcon  fontSize='large'/>}
            text="Home"
        />
        <SideBarItem
            imgPath={<TagIcon  fontSize='large'/>}
            text="Explore"
        />
        <SideBarItem
            imgPath={<NotificationsNoneOutlinedIcon  fontSize='large'/>}
            text="Notifications"
        />
        <SideBarItem
            imgPath={<EmailOutlinedIcon  fontSize='large'/>}
            text="Messages"
        />
        <SideBarItem
            imgPath={<BookmarkBorderOutlinedIcon  fontSize='large'/>}
            text="Bookmarks"
       />
       <SideBarItem
       imgPath={<SubjectOutlinedIcon  fontSize='large'/>}
       text="Lists"
        />

         <SideBarItem
       imgPath={<PermIdentityOutlinedIcon  fontSize='large'/>}
       text="Profile"
        />

          <SideBarItem
       imgPath={<MoreHorizIcon fontSize='large'/>}
       text="More"
        />
        <BtnTweet
        />
     </div>

        <Profile
        imgPath={""}
     Name='malouch wassim'
     UserName="@MalouchWassim"/>

     

    </div>

)
}
export default SideBar;