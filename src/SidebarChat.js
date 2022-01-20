import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from './firebase';
import './SidebarChat.css'
function SidebarChat({id,name,addNewChat}) {
    const[seed,setSeed]=useState('');
     useEffect(() =>{
         setSeed(Math.floor(Math.random()*500))
     },[])
    const createChat=() =>{
        const roomName=prompt("please enter name for chat");
        if(roomName){
            // do some clever database stuff
            db.collection("rooms").add({
                name:roomName,
            })
        }
    }
     return !addNewChat ? (
        <Link to={`/rooms/${id}`} >
        <div className="sidebar_chat">
           <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`}/>
           <div className="sidebarChat_info">
                 <h2>{name}</h2>
                 <p>last message....</p>
            </div>            
         </div>
        </Link>
    ) :(
        <div onClick={createChat} className="sidebar_chat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
