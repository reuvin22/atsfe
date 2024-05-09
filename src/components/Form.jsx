import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { useFormContext } from '../utils/context'
import { useLoginMutation } from '../services/loginApi';
import { useCreateDataMutation } from '../services/alumniApi';
import { toast } from 'react-toastify';

const Form = (ref => {
    const context = useFormContext()
    const [formData, setFormData] = useState({});
    const [createData] = useCreateDataMutation()
    const handleInputChange = (e) => {
      const {name, value} = e.target
      setFormData(prev => ({
        ...prev,
        [name]:value
      }))
    }

    useImperativeHandle(context?.ref, () => ({
      handleSubmit: (actionType) => handleSubmit(actionType)
    }));

    const handleSubmit = (actionType) => {
          createData({
            url: 'register',
            data: formData,
            actionType
          }).then(res => {
            if(res.data.status === "success"){
              toast.success("Data Inserted Successfully")
              setFormData(Object.fromEntries(
                Object.entries(formData).map(([key]) => [key, ''])
              ));

            }
          })
          if(formData.role === 'Select'){
            toast.error("Select is not an Option")
          }

    }

    const renderForm = (row, rowIndex) => {
        return context?.initialFields?.map(field => (
            <div key={field.name} className={`${context?.fontColor}`}>
                {field.type === 'text' && !field.disabled && (
                     <div className="grid grid-cols-1">
                     <label
                       htmlFor={field.name}
                       className="text-white font-medium text-sm capitalize"
                     >
                       {field.label}
                     </label>
                     <input
                      required
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2"
                      placeholder={field.placeholder}
                    />
                   </div>
                )}
                {field.type === 'number' && !field.disabled && (
                     <div className="grid grid-cols-1">
                     <label
                       htmlFor={field.name}
                       className="text-white font-medium text-sm capitalize"
                     >
                       {field.label}
                     </label>
                     <input
                        required
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2"
                        placeholder={field.placeholder}
                    />
                   </div>
                )}
                {field.type === 'password' && !field.disabled && (
                     <div className="grid grid-cols-1">
                     <label
                       htmlFor={field.name}
                       className="text-white font-medium text-sm capitalize"
                     >
                       {field.label}
                     </label>
                      <input
                        required
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
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
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2"
                      placeholder={field.placeholder}
                    />
                   </div>
                )}
                {field.type === 'select' && !field.disabled && (
                     <div className='grid gap-1'>
                     <label
                       htmlFor={field.name}
                       className=" text-white font-medium text-sm capitalize"
                     >
                       {field.label}
                     </label>
                     <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className='border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2'
                    >
                        {field.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>
                                {option}
                            </option>
                        ))}
                      </select>
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
            <div className={`${context?.fontColor}`}>
              {renderForm()}
            </div>
        </form>
    </div>
  )
}
)
export default Form