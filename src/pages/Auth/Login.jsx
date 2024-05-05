import Form from '../../components/Form'
import { FormContext } from '../../utils/context'
import Button from '../../components/Button'
import { useRef, useState } from 'react'
import Alert from '../../components/Alert'
import { Link } from 'react-router-dom'

function Login() {
    const formRef = useRef(null)
    const [action, setAction] = useState(false);
    const [message, setMessage] = useState('');
    const [alertOpen, setAlertOpen] = useState(false)
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
  
  const handleSubmit = () => {
    setAlertOpen(true);
    setMessage('Success');
  }


  return (
    <>
      <div className='w-[100vw] h-[100vh] grid place-items-center bg-gradient-to-r from-slate-400 to-blue-500'>
        {alertOpen && <Alert
            bgColor='success' 
            alertMessage={message}
            propIsOpen={true}
            btnColor='success'
        />}
        <div className='w-96 h-54 grid place-items-center border-2 py-10 px-3 rounded-xl'>
            <FormContext.Provider value={{ 
            initialFields: testForm,
            title: 'Admin Login',
            }}>
            <Form />
            </FormContext.Provider>
            <div className='grid place-items-center gap-1 mt-2 w-52'>
                <Button
                    bgColor='blue'
                    btnSize='fullWidth'
                    onClick={handleSubmit}
                >
                    Login
                </Button>
                <Link to="/"><p className='text-md text-white hover:text-blue-300 cursor-pointer'>Back to form</p></Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
