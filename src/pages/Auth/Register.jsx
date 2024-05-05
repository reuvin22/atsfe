import React from 'react'
import { FormContext } from '../../utils/context'
import Button from '../Button'
import Form from '../Form'
function Register() {
    const registrationForm = [
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          placeholder: 'Enter Your Email'
        },
        {
          name: 'password',
          type: 'password',
          label: 'Password',
          placeholder: 'Enter Your Password'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholder: 'Enter Your Password'
          },
    
          {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholder: 'Enter Your Password'
          },
      ]
  return (
    <>
    <div className='absolute bg-slate-400 w-96 h-54 py-5 rounded-xl'>
                <FormContext.Provider value={{ 
                    initialFields: registrationForm,
                    title: 'Register'
                    }}>
                    <Form />
                </FormContext.Provider>
                <div className='flex justify-center gap-5 mt-2'>
                    <Button
                        bgColor='blue'
                        btnSize='normalSize'
                    >
                        Login
                    </Button>
                    <Button
                        bgColor='red'
                        btnSize='normalSize'
                        onClick={() => handleModal('closeModal')}
                    >
                        Close
                    </Button>
                </div>
            </div>
    </>
  )
}

export default Register