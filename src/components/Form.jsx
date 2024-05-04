import React, { useState } from 'react'
import { useFormContext } from '../utils/context'

function Form() {
    const context = useFormContext()
    const initialFields = []
    const [modalState, setModalState] = useState(false);

    const handleModal = (data) => {
        switch(data.type){
            case 'openModal':
                context?.onModalState('true');
            break;
        }
    }
    const handleSubmit = (data) => {
        
    }
    const renderForm = (row, rowIndex) => {
        return context?.initialFields?.map(field => (
            <div key={field.name}>
                {field.type === 'text' && !field.disabled && (
                     <div className="grid grid-cols-1">
                     <label
                       htmlFor={field.name}
                       className=" text-white font-medium text-sm capitalize"
                     >
                       {field.label}
                     </label>
                     <input
                       required
                       type={field.type}
                       id={field.name}
                       name={field.name}
                    //    value={row.fields[field.name]}
                    //    onChange={(e) => handleInputChange(e, rowIndex, field.name)}
                    //    onClick={
                    //      field.category === 'with_modal'
                    //        ? () =>
                    //            handleOnClick({
                    //              action: 'clickedModal',
                    //              field,
                    //              modalState: true
                    //            })
                    //        : undefined
                    //    }
                       className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2"
                       placeholder={field.placeholder}
                     />
                   </div>
                )}
                {field.type === 'number' && !field.disabled && (
                     <div className="grid grid-cols-1">
                     <label
                       htmlFor={field.name}
                       className=" text-white font-medium text-sm capitalize"
                     >
                       {field.label}
                     </label>
                     <input
                       required
                       type={field.type}
                       id={field.name}
                       name={field.name}
                    //    value={row.fields[field.name]}
                    //    onChange={(e) => handleInputChange(e, rowIndex, field.name)}
                    //    onClick={
                    //      field.category === 'with_modal'
                    //        ? () =>
                    //            handleOnClick({
                    //              action: 'clickedModal',
                    //              field,
                    //              modalState: true
                    //            })
                    //        : undefined
                    //    }
                       className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2"
                       placeholder={field.placeholder}
                     />
                   </div>
                )}
                {field.type === 'password' && !field.disabled && (
                     <div className="grid grid-cols-1">
                     <label
                       htmlFor={field.name}
                       className=" text-white font-medium text-sm capitalize"
                     >
                       {field.label}
                     </label>
                     <input
                       required
                       type={field.type}
                       id={field.name}
                       name={field.name}
                    //    value={row.fields[field.name]}
                    //    onChange={(e) => handleInputChange(e, rowIndex, field.name)}
                    //    onClick={
                    //      field.category === 'with_modal'
                    //        ? () =>
                    //            handleOnClick({
                    //              action: 'clickedModal',
                    //              field,
                    //              modalState: true
                    //            })
                    //        : undefined
                    //    }
                       className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2"
                       placeholder={field.placeholder}
                     />
                   </div>
                )}
                {field.type === 'email' && !field.disabled && (
                     <div>
                     <label
                       htmlFor={field.name}
                       className=" text-white font-medium text-sm capitalize"
                     >
                       {field.label}
                     </label>
                     <input
                       required
                       type={field.type}
                       id={field.name}
                       name={field.name}
                    //    value={row.fields[field.name]}
                    //    onChange={(e) => handleInputChange(e, rowIndex, field.name)}
                    //    onClick={
                    //      field.category === 'with_modal'
                    //        ? () =>
                    //            handleOnClick({
                    //              action: 'clickedModal',
                    //              field,
                    //              modalState: true
                    //            })
                    //        : undefined
                    //    }
                       className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2"
                       placeholder={field.placeholder}
                     />
                   </div>
                )}
            </div>
        ))
    }
  return (
    <div className="px-4">
        <form onSubmit={handleSubmit}>
            <div className='w-full grid place-items-center'>
                <h1 className='text-white text-2xl font-bold'>{context?.title}</h1>
            </div>
            {renderForm()}
        </form>
    </div>
  )
}

export default Form