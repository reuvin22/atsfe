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
            title: 'Login'
            }}>
            <Form />
            </FormContext.Provider>
            <div className='flex items-center gap-5 mt-2'>
                <Button
                    bgColor='blue'
                    btnSize='fullWidth'
                >
                    Login
                </Button>
                <Button
                    bgColor='red'
                    onClick={() => handleModal('openModal')}
                >
                    Register
                </Button>
            </div>
        </div>
        {action === true && (
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
        )}
      </div>
    </>
  )
}

export default Login
