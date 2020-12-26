import React from 'react'
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
//
import InputOption from './InputOption' 
//
import './Post.css'

function Post({name, discription, message, photoUrl}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar/>
        <div className="post__info">
          <h2>asfasf</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="post__body">
        <p>Message</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon}/>
      </div>
    </div>
  )
}

export default Post
