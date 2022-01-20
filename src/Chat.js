import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chat.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
function Chat() {
    const[seed,setSeed]=useState('');
    const[input,setInput]=useState('');
     useEffect(() =>{
         setSeed(Math.floor(Math.random()*500))
     },[])
     const sendMessage=(e)=>{
         e.preventDefault();
         console.log("youtyped",input)
        setInput('');
        }
    return (
         <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`}/>
                <div className="chat_headerinfo">
                    <h2>Room name</h2>
                    <p>last seen at...</p>
                </div>
                <div className="chat_headerRight">
                <IconButton>
                  <SearchOutlinedIcon/>
                  </IconButton>
                  
                  <IconButton>
                  <AttachFileIcon/>
                  </IconButton>

                  <IconButton>
                  <MoreVertIcon/>
                  </IconButton>
                </div>
            </div>

            <div className="chat_body">
                  <p className={`chat_message ${true &&"chat_reciver"}`}>
                      <span className="chat_name">Ritish jaiswal</span>
                      hey Guys
                    <span className="chat_timestamp">3.52pm</span>
                      </p>
                   <p className="chat_message">hey Guys</p>
             </div>
  
           <div className="chat_footer">
               <InsertEmoticonIcon/>
               <form>
                   <input value={input} onChange={(e)=> setInput(e.target.value      
                   )}
                   type="text" placeholder="type a message"/>
                   <button type="submit" onClick={sendMessage}> Send a message</button>
               </form>
               <MicIcon/>
          </div>
        </div>
    )
}

export default Chat
