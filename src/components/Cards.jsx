import React from 'react'

function Cards({
    bgColor,
    imageLogo,
    title,
    count
}) {
    let bgColorChange;

    switch(bgColor){
        case 'blue':
            bgColorChange = "bg-blue-500 border-blue-400 hover:bg-blue-300 cursor-pointer"
        break;

        case 'red':
            bgColorChange = "bg-red-500 border-red-400 hover:bg-red-300 cursor-pointer"
        break;

        case 'green':
            bgColorChange = "bg-green-500 border-green-400 hover:bg-green-300 cursor-pointer"
        break;
    }

  return (
    <div className={`${bgColorChange} border w-72 h-32 rounded-xl flex justify-center items-center gap-10`}>
        <img src={imageLogo} alt="Logo" className='w-20 h-20'/>
        <div className='grid'>
            <h1 className='text-white font-serif text-3xl'>{title}</h1>
            <h1 className='text-white font-serif text-2xl'>{count}</h1>
        </div>
    </div>
  )
}

export default Cards