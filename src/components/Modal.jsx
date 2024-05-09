import React, { useState } from 'react';
import { FormContext, useModalContext } from '../utils/context';
import Form from './Form';
import Button from './Button';

function Modal({formType}) {
    const context = useModalContext()
    const [closeModal, setCloseModal] = useState(false)

    const handleModal = () => {
        setCloseModal(false)
    }

    const handleFormOpen = (data) => {
        switch (data.type) {
            case 'user-register':
                return (
                    <>
                        <FormContext.Provider
                            value={{
                                initialFields: registrationForm,
                                title: 'Register',
                            }}
                        >
                            <Form />
                        </FormContext.Provider>
                        <div className='flex justify-center gap-5 mt-2'>
                            <Button bgColor='green' btnSize='normalSize'>
                                Register
                            </Button>
                            <Button
                                bgColor='red'
                                btnSize='normalSize'
                                onClick={() => handleModal()}
                            >
                                Close
                            </Button>
                        </div>
                    </>
                );
            case 'delete':
                // Implement delete form
                break;
            case 'update':
                // Implement update form
                break;
            default:
                return null;
        }
    };

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
            name: 'confirm_password',
            type: 'password',
            label: 'Confirm Password',
            placeholder: 'Confirm Password'
        },
        {
            name: 'role',
            type: 'select',
            label: 'Role',
            options: ['Admin', 'Staff']
        }
    ];

    return (
        <div className='w-96 h-96 absolute bg-blue-500 px-5 rounded-xl py-2'>
            {handleFormOpen({type: formType})}
        </div>
    );
}

export default Modal;
