import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Story from './Story'
import mypic from "../images/mypic.jpg"
import Post from './Post'

const Homep = () => {
  return (
    <div className='homeContainer bg-black ' style={{marginLeft:"300px"}}>
      <Story/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/><Post/>
      <Post/>
      <Post/>
      <Post/><Post/>
      <Post/>
      
    </div>
  )
}

export default Homep

