import React from 'react'
import img from './pic1.jpg'
function ProfilePhoto() {
  return (
    <div className='photos'>
      <img className='photo' src={img} alt='my photo'/>
    </div>
  )
}

export default ProfilePhoto