import React from 'react'
// import Profile from './Profile.jsx'
import People from './People.jsx'
import Chat from './Chat.jsx'
function Conatiner() {
  return (
    <div className='flex' >
     <div className='w-[35%] h-[100vh] '>
      <People/>
      </div>
      <div className='w-[65%]'>
      <Chat/>
      </div>

     
     
    </div>
  )
}

export default Conatiner
