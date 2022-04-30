import { Avatar, Button } from '@mui/material';
// import { deepOrange } from '@mui/material/colors';
import avatar from './avatar.jpg';
import React, { useState } from 'react';
import './TweetBox.css';
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault(); // prevents refresh

    db.collection("posts").add({
      displayName: "Dylan Koevort",
      username: "dylankoevort",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
            <Avatar src={avatar}/>
            {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>D</Avatar> */}
            {/* <Avatar>D</Avatar> */}
            <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's Happening?" type='text'/>            
            </div>
            <input
              value={tweetImage}
              onChange={(e) => setTweetImage(e.target.value)}
              className="tweetBox_imageInput"
              placeholder="Optional: Enter image URL"
              type="text"
            />
            <Button onClick={sendTweet} type='submit' className='tweetBox_tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox