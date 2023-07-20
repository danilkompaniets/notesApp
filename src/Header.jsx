import React from 'react'
import Logo from "./assets/writing.png"

const Header = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5'>
        <div className='flex flex-row items-center gap-2'> 
            <img src={Logo} alt="NotesApp" className='w-[50px] h-[50px]' />
            NotesApp
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Header