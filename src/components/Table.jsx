import React, { useContext, useEffect, useState } from 'react';
import { TableContext } from '../utils/context';
import Button from './Button';
import { useDeleteDataMutation, useUpdateDataMutation } from '../services/alumniApi';
import { toast } from 'react-toastify';

function Table() {
    const context = useContext(TableContext);
    const [trigger, setTrigger] = useState(false)
    const [deleteData] = useDeleteDataMutation()
    const [selectedRow, setSelectedRow] = useState({})
    const [updateModal, setUpdateModal] = useState(false)
    const [updateData] = useUpdateDataMutation()

    const handleDeleteUser = (id) => {
        deleteData({
            actionType: 'deleteUser',
            id: id
        }).then(res => {
            if (res.data.success === true) {
                toast.success("Data Deleted Successfully");
            } else {
                toast.error("Failed to delete data");
            }
        }).catch(error => {
            console.error("Delete request failed");
            toast.error("Failed to delete data");
        });
    };

    const handleUpdateUser = (data) => {
        updateData({
            actionType: 'updateUser',
            id: data.id,
            data: selectedRow
        }).then(res => {
            if (res.data.status === 200) {
                toast.success("Data Updated Successfully");
            } else {
                toast.error("Failed to update data");
            }
        }).catch(error => {
            console.error("Update request failed");
            toast.error("Failed to update data");
        });
    }
    const handleUserUpdate = (id) => {
        setSelectedRow(id)
    }

    const handleUpdate = (e) => {
        const {name, value} = e.target
        setSelectedRow(prev => ({
            ...prev,
            [name]:value
        }))
    }
    const renderTable = () => {
        return (
            <div className='divide-y divide-gray-200 grid place-items-center'>
                {updateModal && (
                    <div className="px-20 py-10 absolute border-2 z-10 bg-blue-500 rounded-xl">
                    <div className="mb-4">
                      <label className="block text-md font-medium text-white">
                        First Name:
                      </label>
                      <input
                        type="text"
                        name="fname"
                        className="mt-1 block w-full p-2 border border-gray-300 px-3 py-2 text-md focus:outline-none"
                        value={selectedRow.fname}
                        onChange={handleUpdate}
                      />
                      <label className="block text-md font-medium text-white">
                        Middle Name:
                      </label>
                      <input
                        type="text"
                        name="mname"
                        className="mt-1 block w-full p-2 border border-gray-300 px-3 py-2 text-md focus:outline-none"
                        value={selectedRow.mname}
                        onChange={handleUpdate}
                      />
                      <label className="block text-md font-medium text-white">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        name="lname"
                        className="mt-1 block w-full p-2 border border-gray-300 px-3 py-2 text-md focus:outline-none"
                        value={selectedRow.lname}
                        onChange={handleUpdate}
                      />
                      <label className="block text-md font-medium text-white">
                        Email:
                      </label>
                      <input
                        type="text"
                        name="email"
                        className="mt-1 block w-full p-2 border border-gray-300 px-3 py-2 text-md focus:outline-none"
                        value={selectedRow.email}
                        onChange={handleUpdate}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                        <Button 
                            bgColor='green'
                            btnSize='normalSize'
                            onClick={() => {
                                handleUpdateUser({data:selectedRow, id:selectedRow.id})
                            }}
                        >
                            Update
                        </Button>
                        <Button 
                            bgColor='red'
                            btnSize='normalSize'
                            onClick={() => {
                            setUpdateModal(false);
                            }}
                        >
                        Back
                        </Button>
                    </div>
                  </div>
                )}
                <table className='max-h-96'>
                        <thead className='bg-gray-50'>
                            <tr>
                                {context?.tableHeader.map((tblHeader, tblHeaderIndex) => (
                                    <th key={tblHeaderIndex} className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                        {tblHeader}
                                    </th>
                                ))}
                                {context?.actions && (
                                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Action</th>
                                        )}
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {context?.tableData.map((tblData, tblIndex) => (
                                <tr key={tblData.id} className='hover:bg-gray-100 px-6 py-3 whitespace-nowrap text-sm'>
                                    {context?.tableHeader.map((tblHeader) => (
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            {tblData[tblHeader]}
                                        </td>
                                    ))}
                                    {context?.actions && (
                                        <tr className='px-6 py-4 whitespace-nowrap flex justify-center items-center'>
                                            <td>
                                                <Button 
                                                    btnSize='actionBtn'
                                                    bgColor='green'
                                                    btnIcon='register'
                                                    onClick={() => {
                                                        handleUserUpdate(tblData)
                                                        setUpdateModal(true)
                                                    }}
                                                />
                                            </td>
                                            <td>
                                            <td>
                                                    <Button 
                                                        btnSize='actionBtn'
                                                        bgColor='red'
                                                        btnIcon='delete'
                                                        onClick={() => {
                                                            handleDeleteUser(tblData.id);
                                                        }}
                                                    />
                                                </td>
                                            </td>
                                        </tr>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        )
    }

    return (
        <>
            {renderTable()}
        </>
    );
}

export default Table;
