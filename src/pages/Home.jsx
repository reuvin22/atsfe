import React from 'react'
import Title from '../components/Title'
import { FormContext } from '../utils/context'
import Form from '../components/Form'
import Button from '../components/Button'

function Home() {
  return (
    <div>
        <Title />
        <div className='w-full grid place-items-center border-2 py-10 px-3 rounded-xl'>
            <h1 className='text-4xl text'>Student Information</h1>
            <div className='w-full h-96'>
                <form className='grid grid-cols-3 gap-3 place-items-center'>
                    <div className='grid'>
                        <label htmlFor="First Name" className='font-serif text-black text-lg'>
                            First Name
                        </label>
                        <input
                            required
                            type='text'
                            id='fname'
                            name='fname'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your First Name'
                        />
                        <label htmlFor="First Name" className='font-serif text-black text-lg'>
                            Middle Name
                        </label>
                        <input
                            required
                            type='text'
                            id='mname'
                            name='mname'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Middle Name'
                        />
                        <label htmlFor="First Name" className='font-serif text-black text-lg'>
                            Last Name
                        </label>
                        <input
                            required
                            type='text'
                            id='lname'
                            name='lname'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Last Name'
                        />
                        <label htmlFor="Gender" className='font-serif text-black text-lg'>
                            Gender
                        </label>
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                        >
                            <option >Select</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                        </div>

                    <div className='grid'>
                        <label htmlFor="Civil Status" className='font-serif text-black text-lg'>
                            Civil Status
                        </label>
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                        >
                            <option >Select</option>
                            <option value='single'>Single</option>
                            <option value='married'>Married</option>
                            <option value='divorced'>Divorced</option>
                        </select>
                        <label htmlFor="Student Number" className='font-serif text-black text-lg'>
                            Student Number
                        </label>
                        <input
                            required
                            type='text'
                            id='student_number'
                            name='student_number'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Student Number (0123-4567-8900)'
                        />
                        <label htmlFor="First Name" className='font-serif text-black text-lg'>
                            Course
                        </label>
                        <input
                            required
                            type='text'
                            id='course'
                            name='course'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Course'
                        />
                        <label htmlFor="First Name" className='font-serif text-black text-lg'>
                           Year Graduated
                        </label>
                        <input
                            required
                            type='number'
                            id='year'
                            name='year'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Year Graduated'
                        />
                    </div>
                    <div>
                    <div className='grid'>
                        <label htmlFor="Employment Status" className='font-serif text-black text-lg'>
                            Employment Status
                        </label>
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                        >
                            <option >Select</option>
                            <option value='employed'>Employed</option>
                            <option value='unemployed'>Unemployed</option>
                        </select>
                        <label htmlFor="Related/Not Related" className='font-serif text-black text-lg'>
                            Related/Not Related
                        </label>
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                        >
                            <option >Select</option>
                            <option value='related'>Related</option>
                            <option value='not_related'>Not Related </option>
                        </select>
                        <label htmlFor="Email" className='font-serif text-black text-lg'>
                            Email
                        </label>
                        <input
                            required
                            type='email'
                            id='email'
                            name='email'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Email'
                        />
                        <label htmlFor="Contact Number" className='font-serif text-black text-lg'>
                            Contact Number
                        </label>
                        <input
                            required
                            type='number'
                            id='contact_number'
                            name='contact_number'
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Contact Number'
                        />
                        </div>
                    </div>
                    <div className='grid place-items-center justify-self-center w-96 mt-5 gap-2 col-span-3'>
                        <Button
                            bgColor='blue'
                            btnSize='fullWidth'
                        >
                            Submit
                        </Button>
                        <p className='text-md text-blue-600 hover:text-blue-300 cursor-pointer'>Want to login as admin?</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home