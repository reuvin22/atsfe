import React, {useRef, useState} from 'react'
import { TableContext, useFormContext } from '../../utils/context';
import Table from '../../components/Table';
import { useCreateDataMutation, useGetUserDataQuery } from '../../services/alumniApi';
import Pagination from '../../components/Pagination';
import ItemPerPage from '../../components/ItemPerPage';
import Button from '../../components/Button';
import { FormContext } from '../../utils/context';
import Form from '../../components/Form';
function Accounts() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemsPerPage] = useState(5)
  const [modalType, setModalType] = useState('')
  const [formOpen, setFormOpen] = useState(false)
  const context = useFormContext()
  const formRef = useRef(null)
  const {
    data: userList
  } = useGetUserDataQuery({
    items: itemPerPage,
    page: currentPage
  })

  const header = userList?.columns ?? []
  const list = userList?.data ?? []
  const page = userList?.pagination ?? []

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(e.target.value);
  };

  const handleNewPage = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleModal = () => {
    setFormOpen(false)
  }
  

  const handleSubmitForm = (actionType) => {
    formRef.current.handleSubmit(actionType)
  };

  const handleFormOpen = (data) => {
    switch (data.type) {
        case 'user-register':
            return (
                <>
                    <FormContext.Provider
                        value={{
                          initialFields: registrationForm,
                          title: 'Register',
                          ref: formRef,
                          handleSubmit: handleSubmitForm
                        }}
                    >
                        <Form />
                    </FormContext.Provider>
                    <div className='flex justify-center gap-5 mt-2'>
                        <Button 
                          bgColor='green' 
                          btnSize='normalSize'
                          onClick={() => handleSubmitForm('user-registration')}
                        >
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
        case 'update':
            
            break;
        default:
            return null;
    }
};

const registrationForm = [
  {
    name: 'fname',
    type: 'text',
    label: 'First Name',
    placeholder: 'Enter Your First Name'
  }, 
  {
    name: 'mname',
    type: 'text',
    label: 'Middle Name',
    placeholder: 'Enter Your Middle Name'
  }, 
  {
    name: 'lname',
    type: 'text',
    label: 'Last Name',
    placeholder: 'Enter Your Last Name'
  },  
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
        options: ['Select', 'Admin', 'Staff']
    }
];

  return (
    <div className='w-full h-full grid place-items-center sm:h-[100vh]'>
      <div className={formOpen ? 'w-96 sm:max-w-[90%] sm:z-10 max-h-98 absolute bg-blue-500 px-5 rounded-xl py-10' : 'hidden'}>
            {handleFormOpen({type: modalType})}
        </div>
      <div className='grid place-items-center gap-5'>
      <div className='flex justify-center items-end gap-10'>
          <h1 className='text-4xl font-bold text-black sm-text-sm'>Staff Account</h1>
            <Button 
              btnIcon="register"
              bgColor="green"
              onClick={() => handleFormOpen(setModalType('user-register'), setFormOpen(true))}
            >
              Add
            </Button>
        </div>
      <div className='w-full max-h-[700px] border-2 rounded-lg min-h-62 overflow-x-scroll sm:max-h-96'>
        <TableContext.Provider
          value={{ 
            tableData: list,
            tableHeader: header,
            title: 'Alumni List',
            actions: true
          }}
        >
          <Table />
        </TableContext.Provider>
      </div>
      <div className="flex flex-wrap py-2">
              <div className="flex items-center justify-center flex-grow">
                <Pagination
                    currentPage={page.current_page}
                    totalPages={page.total_pages}
                  onPageChange={(newPage) => handleNewPage(newPage)}
                />
              </div>

              <ItemPerPage className="flex flex-grow">
                <div className="flex items-center justify-end">
                  <span className="mr-2 mx-2 text-gray-700">Per Page:</span>
                  <select
                    value={itemPerPage}
                    onChange={(e) => handleItemsPerPageChange(e)}
                    className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </ItemPerPage>
            </div>
          </div>
    </div>
  )
}

export default Accounts