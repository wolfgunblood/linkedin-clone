import React,{ useState, useMemo } from 'react';
import './PostStatus.scss';
import ModalComponent from '../ModalComponent/ModalComponent';

const PostStatus = () => {
  return (
    <div className='post-status-container'>
      <div className='user-details'>
        <button
          className='open-post-modal'
        >
          Start a Post
        </button>
      </div>
      <ModalComponent />
    </div>
  )
}

export default PostStatus