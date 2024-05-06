import React, { useState } from 'react'

function SideBar() {
    const [openSideBar, setOpenSideBar] = useState('false');

    const handleOnClick = () => {
        setOpenSideBar(!openSideBar);
    }
    console.log(openSideBar)
  return (
    <div>
        <div className='z-10 absolute w-14 h-14 ml-5 mt-5 md:hidden lg:hidden xl:hidden'>
            <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview%20(5).png?alt=media&token=e87a188b-4123-4845-85cf-2c9436f89753" alt="Menu" 
            onClick={handleOnClick}
            />
        </div>
        <div className={`${openSideBar ? 'h-[100vh] bg-blue-500 w-72 border  sm:w-52 sm:absolute sm:z-10 sm:hidden' : 'sm:block h-[100vh] bg-blue-500 w-72 border  sm:w-52 sm:absolute sm:z-10'}`}>
            <div className='grid place-items-center mt-5 text-center'>
                <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/close%20icon.png?alt=media&token=bd064580-591c-4c19-b5c1-dfe0b0c7c75f" 
                    alt="Close"
                    className='w-8 h-8 justify-self-end mr-5 md:hidden lg:hidden xl:hidden' 
                    onClick={handleOnClick}
                />
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
        </div>
  )
}

export default SideBar