import { Avatar, Button } from '@mui/material';
// import { deepOrange } from '@mui/material/colors';
import avatar from './avatar.jpg';
import React from 'react';
import './TweetBox.css';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
            <Avatar src={avatar}/>
            {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>D</Avatar> */}
            {/* <Avatar>D</Avatar> */}
            <input placeholder="What's Happening?" type='text'/>            
            </div>
            <input className='tweetBox_imageInput' placeholder="Optional: Enter image URL" type='text'/>
            <Button className='tweetBox_tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox