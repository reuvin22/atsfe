import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { FormContext } from '../utils/context'
import Form from '../components/Form'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useCreateDataMutation } from '../services/alumniApi'
import { toast } from 'react-toastify'
function Home() {
    const [createData] = useCreateDataMutation();
    const [formData, setFormData] = useState({});
    const notify = () => toast.success("Data Inserted Successfully")
    const handleSubmit = (e) => {
        e.preventDefault();
        createData({
            url: 'alumni',
            actionType: 'alumni-data',
            data: formData
        })
        .unwrap()
        .then(response => {
            if(response.status === "success"){
                setFormData(Object.fromEntries(
                    Object.entries(formData).map(([key]) => [key, ''])
                  ));
                notify()
            }
        })
    }
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevForm) => ({
          ...prevForm,
          [name]: value
        }));
      };

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
                            value={formData.fname}
                            onChange={handleOnChange}
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your First Name'
                        />
                        <input
                            required
                            type='text'
                            id='mname'
                            name='mname'
                            value={formData.mname}
                            onChange={handleOnChange}
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Middle Name'
                        />
                        <input
                            required
                            type='text'
                            id='lname'
                            name='lname'
                            value={formData.lname}
                            onChange={handleOnChange}
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Last Name'
                        />
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            onChange={handleOnChange}
                            name='gender'
                        >
                            <option value='select'>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            name='civilStatus'
                            onChange={handleOnChange}
                        >
                            <option value='select'>Select Civil Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                        </select>
                        <input
                            required
                            type='text'
                            id='studentNumber'
                            name='studentNumber'
                            value={formData.studentNumber}
                            onChange={handleOnChange}
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Student Number (0123-4567-8900)'
                        />
                        <input
                            required
                            type='text'
                            id='course'
                            name='course'
                            value={formData.course}
                            onChange={handleOnChange}
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Course'
                        />
                        <input
                            required
                            type='number'
                            id='year'
                            name='year'
                            value={formData.year}
                            onChange={handleOnChange}
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Year Graduated'
                        />
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            required
                            onChange={handleOnChange}
                            name='employmentStatus'
                        >
                            <option value='select'>Select Employment Status</option>
                            <option value="Employed">Employed</option>
                            <option value="Unemployed">Unemployed</option>
                        </select>
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            name='relatedOrNot'
                            onChange={handleOnChange}
                        >
                            <option value='select'>Job Related or Not</option>
                            <option value="Related">Related</option>
                            <option value="Not Related">Not Related </option>
                        </select>
                        <select 
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            onChange={handleOnChange}
                            name='employmentType'
                        >
                            <option value='select'>Select Employment Type</option>
                            <option value="Full Time">Full-Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Freelancer">Freelancer</option>
                        </select>
                        <input
                            required
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleOnChange}
                            className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500"
                            placeholder='Enter your Email'
                        />
                    </div>
                    <div className='grid place-items-center justify-self-center mt-4 gap-2 col-span-3 w-full'>
                        <Button
                            bgColor='blue'
                            btnSize='normalSize'
                            typeBtn='submit'
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