import React, { useState } from "react";
import { auth } from "./firebase";
import {useSelector, useDispatch} from 'react-redux'
//
import "./Login.css";
import {login} from './redux/userSlice'

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();


  const register = () => {
    if (!name) {
      return alert("Please enter a name");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updatePrile({ displayName: name, photoURL: profilePic }).then(()=>{
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic
        }))
      });
    }).catch(error=>{
      alert(error.messsage)
    });
  };

  const loginToApp = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
        />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?
        <span className="login__register" onClick={register}>
         Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
