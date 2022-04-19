import React from 'react';
import { Avatar } from '@mui/material';
import './Post.css';
import avatarIcon from './avatar.png';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from '@mui/icons-material/IosShare';

function Post({displayName, username, verified, text, image, avatar}) {
  return (
    <div className='post'>
        <div className='post_avatar'>
        <Avatar src={avatarIcon}/>
        </div>
        <div className='post_body'>
            <div className='post_header'>
              <div className='post_headerText'>
                <h3>Dylan Koevort<span><VerifiedIcon className='post_badge'/></span></h3>
              </div>
              <div className='post_headerDescription'>
                <p>I challenge you to build a twitter clone with React</p>
              </div>
            </div>
            <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt='React Gif'/>
            <div className='post_footer'>
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <IosShareIcon fontSize="small" />
            </div>
        </div>
    </div>
  )
}

export default Post