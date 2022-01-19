import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
function SidebarChat({addNewChat}) {
    const[seed,setSeed]=useState('');
     useEffect(() =>{
         setSeed(Math.floor(Math.random()*500))
     },[])
    const createChat=() =>{
        const roomName=prompt("please enter name for chat");
        if(roomName){
            // do some clever database stuff
        }
    }
     return !addNewChat ? (
        <div className="sidebar_chat">
           <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`}/>
           <div className="sidebarChat_info">
                 <h2>Room name</h2>
                 <p>last message....</p>
            </div>            
        </div>
    ) :(
        <div onClick={createChat} className="sidebar_chat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
