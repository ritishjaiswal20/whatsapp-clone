import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chat.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Chat() {
    const[seed,setSeed]=useState('');
     useEffect(() =>{
         setSeed(Math.floor(Math.random()*500))
     },[])
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

          </div>
        </div>
    )
}

export default Chat
