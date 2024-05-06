import React from 'react'
import { TableContext } from '../../utils/context';
import Table from '../../components/Table';

function Accounts() {
  const tableHead = [
    'firstName',
    'lastName',
    'role'
  ];
  const tableData = [
    firstName => 'Reuvin'
  ];
  return (
    <div className='border-8 w-full h-full grid place-items-center sm:h-[100vh]'>
      <TableContext.Provider
        value={{ 
          tableData: tableData,
          tableHeader: tableHead
        }}
      >
        <Table />
      </TableContext.Provider>
    </div>
  )
}

export default Accounts