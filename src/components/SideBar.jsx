import React from 'react'

function SideBar() {
  return (
    <div className='h-[100vh] bg-blue-500 w-72 border'>
        <div className='grid place-items-center mt-5 text-center'>
            <img 
            src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview.png?alt=media&token=11873b6c-6587-476d-ae69-611182c51b70" 
            alt="School Logo" 
            className='w-36'
            />
            <h1 className='text-white font-bold text-xl font-serif mt-5'>Reuvin Hernandez</h1>
            <h1 className='text-white font-bold text-xl font-serif'>Admin</h1>
        </div>
        <div className='grid place-items-center mt-20 text-center gap-10'>
            <div>
                <h1 className='text-white font-bold text-xl font-serif cursor-pointer hover:text-blue-800'>Dashboard</h1>
            </div>
            <div>
                <h1 className='text-white font-bold text-xl font-serif cursor-pointer hover:text-blue-800'>List Of Alumni</h1>
            </div>
            <div>
                <h1 className='text-white font-bold text-xl font-serif cursor-pointer hover:text-blue-800'>Accounts</h1>
            </div>
            <div>
                <h1 className='text-white font-bold text-xl font-serif cursor-pointer hover:text-blue-800'>Logout</h1>
            </div>
        </div>
    </div>
  )
}

export default SideBar