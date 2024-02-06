import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/index.esm";
import "bootstrap/dist/js/bootstrap"
import "bootstrap/"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import threads from "../images/threads.png";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import insta from "../images/hero_logo.png";
import mypic from "../images/mypic.jpg"
const SideNav = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 left bg-black text-bg-dark position-fixed" style={{width: "220px", height:"100vh", borderLeft:"grey"}}>
    <a href="/" className="d-flex align-items-center mb-1 mb-md-0 me-md-auto text-white text-decoration-none">
      <img src={insta} alt="" style={{height:"80px", width:"150px"}} />
    </a>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item ">
        <a href="#" className="nav-link text-white " aria-current="page">
        <HomeIcon className='mx-2'/>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link text-white " aria-current="page">
        <SearchIcon className='mx-2'/>
         Search
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link text-white " aria-current="page">
        <ExploreIcon className='mx-2'/>
          Explore
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link text-white " aria-current="page">
        <SlowMotionVideoIcon className='mx-2'/>
        Reels
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link text-white " aria-current="page">
          <SendIcon className='mx-2'/>
          Message
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link text-white " aria-current="page">
          <FavoriteBorderIcon className='mx-2'/>
          Notifications
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link text-white " aria-current="page">
          <AddCircleOutlineIcon className='mx-2'/>
          Create
          
        </a>
      </li>
      

      <li className="nav-item">
        <a href="#" className="nav-link text-white " aria-current="page">
          <img src={mypic} alt="" style={{width:"22px", borderRadius:"30px", marginLeft:"6px" ,marginRight:"14px"}} />
          Profile
        </a>
      </li>
      <br />
      <li className="nav-item">
        <a href="#" className="nav-link text-white " aria-current="page">
        <img src={threads} alt="" style={{width:"32px", borderRadius:"10px", marginLeft:"0px"}}/>
        Threads
        </a>
      </li>
      <li className="nav-item">
        <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
        
        <strong><DensityMediumIcon style={{marginLeft:"20px", marginRight:"6px"}}/>More</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
        </div>
      </li>
      
    </ul>
    <hr/>
   
  </div>
    </div>
  )
}

export default SideNav
