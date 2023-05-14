import React from 'react'
import PostStatus from './common_component/PostStatus/PostStatus'
import '../Sass/HomeComponent.scss'
const HomeComponent = () => {
  return (
    <div className='home-container'>
      <PostStatus />
    </div>
  )
}

export default HomeComponent