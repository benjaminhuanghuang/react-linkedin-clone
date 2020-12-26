import React from 'react'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNotecon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
//
import './Feed.css'
//
import InputOption from './InputOption'
import Post from './Post'

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon/>
          <form>

            <input type="text"/>
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
          <InputOption Icon={EventNotecon} title="Event" color="#C0CBCD"/>
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
        </div>
      </div>
      <Post name='cccc' discription="ddddd" message="dasdfasdf"/>
    </div>
  )
}

export default Feed
