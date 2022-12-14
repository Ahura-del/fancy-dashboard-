import React from 'react'

const Header = ({category , title}) => {
  return (
    <div className='mb-10 pt-5 md:pt-0'>
      <p className='text-gray-400 dark:text-gray-200 '>
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50'>
        {title}
      </p>
    </div>
  )
}

export default Header