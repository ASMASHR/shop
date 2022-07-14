import React, { useState,useEffect } from 'react'
import './contact.scss'

import { useDispatch } from 'react-redux'
import { send_message } from '../../js/Actions/MessagesAction'
function Contact() {
      const [showTitle,setShowTile]=useState(true)

    
    const [msg,setMsg]=useState(false)
    const dispatch = useDispatch()
    const [userName,setuserName]=useState("")
    const [useremail,setuseremail]=useState("")
    const [MessageText,setMessageText]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if((userName!=="")&&(useremail!=="")&&(MessageText!==""))
{
        dispatch(send_message(userName,useremail,MessageText))
        setMsg(true)
        setMessageText("")
        setuserName("")
        setuseremail("")}
        else
        alert("Please set your name, your email and your message !")
    }
    return (
        <div className="contactContainer">
            
        <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
        </svg>
        <div className='contact' id="contact">
            <div className="top"  >
                <h1>CONTACT</h1>
                <div className='underL'></div>
            </div>
            <div className="buttom">
                    <h2>Have a question or want to work together?</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter your name' name="" id="" value={userName} onChange={(e)=>{setuserName(e.target.value)}} />
                        <input type="email" placeholder='Email' name="" id=""  value={useremail}  onChange={(e)=>{ setuseremail(e.target.value)}} />
                        <textarea placeholder='message' name="" id="" cols="30" rows="10"  value={MessageText} onChange={(e)=>{setMessageText(e.target.value)}}></textarea>
                        <button type='Submit'>SUBMIT</button>
                        {msg && <span>Thanks, I will reply ASAP :)</span>}
                    </form>
            </div>
         </div>
        </div>
    )
}

export default Contact
