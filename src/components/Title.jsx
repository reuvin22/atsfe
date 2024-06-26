import React from 'react'

function Title() {
  return (
    <div>
        <div className='w-full h-44 bg-blue-400 flex justify-center items-center gap-12 sm:gap-0'>
          <img 
          src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview.png?alt=media&token=11873b6c-6587-476d-ae69-611182c51b70" 
          alt="School Logo" 
          className='w-36 sm:w-24 sm:ml-3'
          />
          <div className='text-center text-white font-serif mt-2 sm:mt-0'>
            <h1 className='text-3xl font-bold sm:text-lg'>Laguna State Polytechnic University</h1>
            <h1 className='text-2xl font-bold sm:text-lg'>Los Banos - Campus</h1>
            <h1 className='text-3xl sm:text-lg'>Alumni Tracking System</h1>
          </div>
        </div>
        <div className='w-full h-12 bg-blue-600 flex justify-center items-center gap-12'></div>
    </div>
  )
}

export default Title