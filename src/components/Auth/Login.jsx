import Form from '../Form'
import { FormContext } from '../../utils/context'
import Button from '../Button'
import { useRef, useState } from 'react'

function Login() {
    const formRef = useRef(null)
    const [action, setAction] = useState(false);
  const testForm = [
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
  ]

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

  const handleModal = (action) => {
    if(action === 'openModal'){
        setAction(true)
    }else if(action === 'closeModal'){
        setAction(false)
    }
  }
  
  return (
    <>
      <div className='w-[100vw] h-[100vh] grid place-items-center bg-gradient-to-r from-slate-400 to-blue-500'>
        <div className='w-96 h-54 grid place-items-center border-2 py-10 px-3 rounded-xl'>
            <FormContext.Provider value={{ 
            initialFields: testForm,
            title: 'Admin Login'
            }}>
            <Form />
            </FormContext.Provider>
            <div className='flex items-center gap-5 mt-2 w-52'>
                <Button
                    bgColor='blue'
                    btnSize='fullWidth'
                >
                    Login
                </Button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
