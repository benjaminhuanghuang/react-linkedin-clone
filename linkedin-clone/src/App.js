import React, {useEffect} from 'react'
import './App.css'
//
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login'
import Widgets from './Widgets'

// redux
import {useSelector, useDispatch} from 'react-redux'
import {selectUser, login, logout} from './redux/userSlice';
import { auth } from './firebase'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth.user)
      {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }));
      }
      else{
        dispatch(logout);
      }
    })
  }, []);

  return (
    <div className="app">
      <Header/>
      {!user ? <Login/>:
      (<div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>)}
    </div>
  );
}

export default App;
