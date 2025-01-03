import React from 'react'

function Loader() {
  return (
    <div className='flex justify-center items-center z-40 bg-white w-[100%] h-screen fixed top-0 left-0'>
        <div className="spinner-border text-dark w-20 h-20 font-bold " role="status"/>
        
    </div>
  )
}

export default Loader