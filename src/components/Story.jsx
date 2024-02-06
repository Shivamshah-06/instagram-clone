import React from 'react'
import "../App.css"
import mypic from "../images/mypic.jpg"

const Story = () => {
  return (
    <div className='d-flex col mt-4 '>
    <div className="circle mx-2"><img src={mypic} style={{height:"50px", borderRadius:"30px"}} alt="" /></div>
    <div className="circle mx-2"><img src={mypic} style={{height:"50px", borderRadius:"30px"}} alt="" /></div>
    <div className="circle mx-2"><img src={mypic} style={{height:"50px", borderRadius:"30px"}} alt="" /></div>
    <div className="circle mx-2"><img src={mypic} style={{height:"50px", borderRadius:"30px"}} alt="" /></div>
    <div className="circle mx-2"><img src={mypic} style={{height:"50px", borderRadius:"30px"}} alt="" /></div>
    <div className="circle mx-2"><img src={mypic} style={{height:"50px", borderRadius:"30px"}} alt="" /></div>
    <div className="circle mx-2"><img src={mypic} style={{height:"50px", borderRadius:"30px"}} alt="" /></div>
    <div className="circle mx-2"><img src={mypic} style={{height:"50px", borderRadius:"30px"}} alt="" /></div>
    </div>
  )
}

export default Story
