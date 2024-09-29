import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { IconButton } from '@mui/material';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 import SearchIcon from '@mui/icons-material/Search';

function People() {
  return (
    <div className='flex flex-col bg-[#EFF6FC] h-[100vh] w-[90%] p-[5%] '>
      <div className='bg-white h-[10%] m-1 rounded-md flex justify-between items-center gap-2 '> 
        
      {/* <div className='flex'> */}
        <div className='ml-2'> <IconButton>
          <AccountCircleIcon/>
          </IconButton></div>
        <div className='mr-2 flex gap-3'>
        <IconButton>
          <GroupAddIcon/>
          </IconButton>
          <IconButton>
          <PersonAddAltIcon/>
          </IconButton>
          <IconButton>
          <AddCircleOutlineIcon/>
          </IconButton>
          <IconButton>
          <NightlightIcon/> 
          </IconButton>
            </div>
    
      {/* </div> */}
      </div>
      <div className='bg-white h-[10%] m-1 rounded-md flex  items-center'>
        <div>
      <IconButton>
          <SearchIcon/>
          </IconButton>
          </div>
          <input className='outline-none'  type='text' placeholder='Search...'/>
      </div>
      <div className='bg-white h-[80%] m-1 rounded-md'> group</div>
    </div> 
  )
}

export default People
