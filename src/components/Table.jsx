import React, { useContext } from 'react';
import { TableContext } from '../utils/context';
import Button from './Button';

function Table() {
    const context = useContext(TableContext);

    return (
        <div className='divide-y divide-gray-200 grid place-items-center'>

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
                        <tr key={tblIndex} className='hover:bg-gray-100 px-6 py-3 whitespace-nowrap text-sm'>
                            {context?.tableHeader.map((tblHeader) => (
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    {tblData[tblHeader]}
                                </td>
                            ))}
                            {context?.actions && (
                                <tr className='px-6 py-4 whitespace-nowrap flex justify-center items-center'>
                                    <td><Button 
                                            btnSize='actionBtn'
                                            bgColor='green'
                                            btnIcon='register'
                                        />
                                    </td>
                                    <td>
                                        <Button 
                                            btnSize='actionBtn'
                                            bgColor='red'
                                            btnIcon='delete'
                                        />
                                    </td>
                                </tr>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
