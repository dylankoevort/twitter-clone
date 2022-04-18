import React from 'react';
import { Avatar } from '@mui/material';
import './Post.css';
import avatarIcon from './avatar.png';
import VerifiedIcon from '@mui/icons-material/Verified';

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
        </div>
    </div>
  )
}

export default Post