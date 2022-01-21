import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
function Login() {
    const signIn =()=>{
         auth
         .signInWithPopup(provider)
         .then((result)=> console.log(result))
         .catch((error)=>alert(error.message));
    }
  return (
     <div className="login">
        <div className="login_container">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uUlwuJrTpcZtktT58GuXAlzjAUORPpSnAJQUs5DIsL6odOvxhLnu0rou97KxvMJkUzs&usqp=CAU"
                // height="300px"
                // width="300px"
                alt=""
            />
            <div className="login_text">
                <h2>Sign in to  whastapp </h2>
            </div>

            <Button onClick={signIn}>
                sign in with google
            </Button>
        </div>
     </div>
  );
}

export default Login;
