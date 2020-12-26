import React, {useEffect} from 'react'
import './App.css'
//
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login'
// redux
import {useSelector, useDispatch} from 'react-redux'
import {selectUser} from './redux/userSlice';
import { auth } from './firebase'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth)
      {

      }
      else{

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
      </div>)}
    </div>
  );
}

export default App;
