import React from 'react'
import { Avatar } from "@material-ui/core";

// 
import './Post.css'

function Post({name, discription, message, photoUrl}) {
  return (
    <div className="post">
      <div className="post__hader">
        <Avatar/>
        <div className="post__info">
          <h2>asfasf</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="post__body">
        <p>Message</p>
      </div>
    </div>
  )
}

export default Post
