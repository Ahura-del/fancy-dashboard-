import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'

const Cart = () => {
  return (
    <div className='h-screen w-96 bg-white absolute right-0 top-0 bottom-0'>
      <div className='w-[80%] mx-auto mt-12'>
      <div className='flex justify-between items-center'>
        <h2>Shopping cart</h2>
        <button>
        <FaRegTimesCircle />
        </button>
      </div>

      </div>
    </div>
  )
}

export default Cart