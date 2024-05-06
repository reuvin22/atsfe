import React from 'react'
import Title from '../components/Title'
import { FormContext } from '../utils/context'
import Form from '../components/Form'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useCreateDataMutation } from '../services/alumniApi'

function Home() {
    const [createData] = useCreateDataMutation();

    const handleSubmit = () => {
        createData({
            url: 'alumni',
            actionType: 'alumni-data'
        })
    }
  return (
    <div>
        <Title />
        <div className='w-full grid place-items-center py-10 px-3 rounded-xl'>
            <h1 className='text-4xl text'>Student Information</h1>
            <div className='w-full h-96'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-3 gap-3 place-items-center sm:grid-cols-1 mt-10'>
                        <input
                            required
                            type='text'
                            id='fname'
                            name='fname'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your First Name'
                        />
                        <input
                            required
                            type='text'
                            id='mname'
                            name='mname'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Middle Name'
                        />
                        <input
                            required
                            type='text'
                            id='lname'
                            name='lname'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Last Name'
                        />
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                        >
                            <option value={null}>Select Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                        >
                            <option value={null}>Select Civil Status</option>
                            <option value='single'>Single</option>
                            <option value='married'>Married</option>
                            <option value='divorced'>Divorced</option>
                        </select>
                        <input
                            required
                            type='text'
                            id='student_number'
                            name='student_number'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Student Number (0123-4567-8900)'
                        />
                        <input
                            required
                            type='text'
                            id='course'
                            name='course'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Course'
                        />
                        <input
                            required
                            type='number'
                            id='year'
                            name='year'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Year Graduated'
                        />
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            required
                        >
                            <option>Select Employment Status</option>
                            <option value='employed'>Employed</option>
                            <option value='unemployed'>Unemployed</option>
                        </select>
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                        >
                            <option>Job Related or Not</option>
                            <option value='related'>Related</option>
                            <option value='not_related'>Not Related </option>
                        </select>
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                        >
                            <option>Select Employment Type</option>
                            <option value='full_time'>Full-Time</option>
                            <option value='part_time'>Part Time</option>
                            <option value='freelancer'>Freelancer</option>
                        </select>
                        <input
                            required
                            type='email'
                            id='email'
                            name='email'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Email'
                        />
                    </div>
                    <div className='grid place-items-center justify-self-center mt-4 gap-2 col-span-3 w-full'>
                        <Button
                            bgColor='blue'
                            btnSize='normalSize'
                        >
                            Submit
                        </Button>
                        <Link to="/login"><p className='text-md text-blue-600 hover:text-blue-300 cursor-pointer mb-5'>Want to login as admin?</p></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home