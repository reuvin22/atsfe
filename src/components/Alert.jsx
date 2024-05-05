import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
function Alert({
    bgColor,
    alertMessage,
    propIsOpen,
    btnColor
}) {
    let bgColorChange;
    let btnColorChange;
    const [isRendered, setIsRendered] = useState(propIsOpen)
    const closeDuration = 3000

    switch(bgColor){
        case 'error':
            bgColorChange = "bg-red-500 hover:bg-red-300"
        break;

        case 'success':
            bgColorChange = "bg-green-500 hover:bg-green-300"
        break;

        default:
        break;
    }

    switch(btnColor){
        case 'error':
            btnColorChange = "bg-red-300 hover:bg-red-400"
        break;
        
        case 'success':
            btnColorChange = "bg-green-300 hover:bg-green-400"
        break;
        default:
            btnColorChange = "bg-green-300 hover:bg-green-400"
        break;
    }
  useEffect(() => {
    if(propIsOpen) {
      setIsRendered(true)
      const autoClose = setTimeout(() => {
          close()
      }, closeDuration)
      return () => clearTimeout(autoClose)
    }
  }, [propIsOpen])

    const handleTransition = () => {
        if(!propIsOpen) {
          setIsRendered(false)
        }
      }

  return (
    <>
        <div className={`${bgColorChange} absolute top-10 right-10 cursor-pointer h-10 w-64 border  flex justify-center items-center rounded-md`}>
            <h1 className='text-white font-bold text-lg'>{alertMessage}</h1>
            {propIsOpen && (
            <button type="button" className={`${btnColorChange} -my-1.5 absolute right-5 rounded-lg  p-1.5 inline-flex items-center justify-center h-8 w-8`} ariaLabel="Close">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
          </button>
          )}
            </div>
    </>
  )
}

export default Alert