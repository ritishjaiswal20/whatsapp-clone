import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chat.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
function Chat() {
    const[seed,setSeed]=useState('');
    const[input,setInput]=useState('');
    const [roomName, setRoomName] = useState("");
    const{roomId} =useParams();
    const[messages,setMessages]=useState([]);
    const [{user},dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
            db.collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map(doc => doc.data()))
                ))
        }
    }, [roomId])
    
     useEffect(() =>{
         setSeed(Math.floor(Math.random()*5000))
     },[])
    //  const sendMessage=(e)=>{
    //      e.preventDefault();
    //      db.collection('rooms').doc(roomId).collection('messages').add({
    //          message:input,
    //          name:user.displayName,
    //         //  timeStamp:firebase.firestore.FieldValue.serverTimeStamp(),
    //      })
    //     setInput("");
    //     }
    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp() || null
        

        })

        setInput("");
    }
    return (
         <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`}/>
                <div className="chat_headerinfo">
                <h2>{roomName}</h2>
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
                  {messages.map((message,index)=>(
                      <div key={index} >
                      <p  className={`chat_message ${true && "chat_reciver"}`}>
                        

                        <span className="chat_name">
                            {message.name}
                        </span>
                        {message.message}
                        <span  className="chat_timestamp">
                          {new Date(message.timestamp ?.toDate()).toUTCString()}    
                        </span>            
                       </p>
                     </div>
                  ))}
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

