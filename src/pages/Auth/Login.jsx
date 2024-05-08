import Form from '../../components/Form'
import { FormContext } from '../../utils/context'
import Button from '../../components/Button'
import { useRef, useState } from 'react'
import Alert from '../../components/Alert'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../services/loginApi'
import Cookies from 'js-cookie'

function Login() {
    const [message, setMessage] = useState('');
    const [alertOpen, setAlertOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login] = useLoginMutation()
    const navigate = useNavigate()

  const handleModal = (action) => {
    if(action === 'openModal'){
        setAction(true)
    }else if(action === 'closeModal'){
        setAction(false)
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const res = await login({email, password})
        if(!res.data && !res.data.token) {
            throw new Error("Token not found in response")
        }

        Cookies.set('session' ,res.data.session)
        Cookies.set('token', res.data.token)

        localStorage.setItem('isLoggedIn', 'true')
        navigate('/dashboard')
    } catch(error) {
        console.log(error)
    }
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
        <div className='w-96 h-54 grid place-items-center border-2 py-10 px-3 rounded-xl gap-5
        bg-blue-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 sm:w-full'>
            <h1 className='text-center font-bold text-white text-xl'>Admin Login</h1>
            <input
                            required
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Email'
                        />
                        <input
                            required
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Password'
                        />
            <div className='grid place-items-center gap-1 w-52'>
              <Link to={'/dashboard'}>
                <Button
                    bgColor='blue'
                    btnSize='normalSize'
                    onClick={(e) => handleSubmit(e)}
                >
                    Login
                </Button>
                </Link>
                <Link to="/"><p className='text-md text-white hover:text-blue-300 cursor-pointer'>Back to form</p></Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
