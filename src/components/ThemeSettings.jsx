import { Tooltip } from '@mui/material'
import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../context/ContextProvider'
import { themeColors } from '../data/dummy'

const ThemeSettings = () => {
  const {setColor , setMode , currentMode , currentColor , setThemeSettings} = useStateContext()
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] md:w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-xl'>
            Settings
          </p>
          <button type='button' onClick={()=>setThemeSettings(false)} style={{color:"rgb(153,171,180)" , borderRadius:"50%"}} className="text-2xl p-3 hover:drop-shadow-xl dark:hover:bg-secondary-dark-bg hover:bg-light-gray " >
            <MdOutlineCancel/>
          </button>
        </div>
        <div className='flex flex-col border-t-1 border-color dark:border-slate-500 p-4 ml-4'>
          <p className='font-semibold text-xl' >Theme Option</p>

          <div className='mt-4'>
            <input type="radio" id="light" name="theme" value="Light" className="cursor-pointer" onChange={setMode} checked={currentMode === "Light"} />
            <label htmlFor="light"  className='ml-2 cursor-pointer text-md'>Light</label>
          </div>
          <div className='mt-4'>
            <input type="radio" id="dark" name="theme" value="Dark" className="cursor-pointer" onChange={setMode} checked={currentMode === "Dark"} />
            <label htmlFor="dark"  className='ml-2 cursor-pointer text-md'>Dark</label>
          </div>
        </div>
        <div className='flex flex-col border-t-1 border-color dark:border-slate-500 p-4 ml-4'>
          <p className='font-semibold text-xl' >Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((color , index)=>(
              <Tooltip key={index} placement='top' title={color.name} >
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button type="button" onClick={()=>setColor(color.color)} className='h-10 w-10 rounded-full cursor-pointer' style={{background:color.color}} >
                    <BsCheck className={`ml-2 text-2xl text-white ${color.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </Tooltip>
            ))}
          </div>
          </div>
      </div>
    </div>
  )
}

export default ThemeSettings