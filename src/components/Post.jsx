import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import mypic from "../images/mypic.jpg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

const Post = () => {
  return (
    <div className='postCont d-flex row mx-5'>
     <div className="header d-flex col justify-content-between text-white mt-5 p-2 mx-2">
        <div>
        <img src={mypic} alt="" style={{width:"22px", borderRadius:"30px", marginLeft:"6px" ,marginRight:"14px"}} />
      Shivam Shah
        </div>
        <MoreHorizIcon/>
      </div>
      <img src={mypic} alt="" />
      <div className="header d-flex col justify-content-between text-white mt-2 p-2 mx-2 ">
        <div className='d-flex col justify-content-start align-items-baseline align-items-center'>
        <i class="bi bi-heart mt-" style={{fontSize: "1.3rem" }}></i>
        <i class="bi bi-chat mx-3  " style={{fontSize: "1.3rem" }}/>
        <i class="bi bi-send " style={{fontSize: "1.3rem" }}/>
        </div>
        <BookmarkBorderIcon/>
      </div>
      
      
      
    </div>
  )
}

export default Post
