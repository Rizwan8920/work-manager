import React from 'react'

const ProfileLayout = ({children}) => {
  return (
    <div>
        <h1>Profile</h1>
        <div>{children}</div>
    </div>
  )
}

export default ProfileLayout