import React, { useContext } from 'react';
import { TableContext } from '../utils/context';

function Table() {
    const context = useContext(TableContext);

    return (
        <div className='min-w-full divide-y divide-gray-200 grid place-items-center'>
            <table className='min-w-full max-h-96'>
                <thead className='bg-gray-50'>
                    <tr>
                        {context?.tableHeader.map((tblHeader, tblHeaderIndex) => (
                            <th key={tblHeaderIndex} className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                {tblHeader}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {context?.tableData.map(tblData => (
                        <tr key={tblData.id} className='hover:bg-gray-100'>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                {tblData}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
