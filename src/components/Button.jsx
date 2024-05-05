import React from 'react'

function Button({
    children,
    bgColor,
    btnIcon,
    btnSize,
    onClick
}) {
    let bgColorChange;
    let iconChange = null;
    let btnSizeChange;
    
    switch(bgColor){
        case 'blue':
            bgColorChange = "bg-blue-500 hover:bg-blue-600"
        break;
        case 'red':
            bgColorChange = "bg-red-500 hover:bg-red-600"
        break;
        default:
            bgColorChange = "bg-blue-500 hover:bg-blue-600"
        break;
    }

    switch(btnSize){
        case 'fullWidth':
            btnSizeChange = "w-[100%]"
        break;
        
        case 'normalSize':
            btnSizeChange = "w-24"
        break;
        default:

        break;
    }

    switch(btnIcon){
        case 'submit':
            iconChange = (
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              );
        break;
        case 'register':
            iconChange = (
                <svg
                    fill="none"
                    className="h-4 w-4"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
              </svg>
              );
        break;

        default:
        break;
    }
  return (
    <button
        className={`flex justify-center items-center text-white px-2 text-sm gap-2 rounded h-8 ${btnSizeChange} ${bgColorChange} focus:outline-none`}
        onClick={onClick}
    > 
    {iconChange}
    {children}
    </button>
  )
}

export default Button