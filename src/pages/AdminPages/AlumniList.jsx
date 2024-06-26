import React, { useState } from 'react';
import { TableContext } from '../../utils/context';
import Table from '../../components/Table';
import { useDeleteDataMutation, useGetAlumniDataQuery } from '../../services/alumniApi';
import Pagination from '../../components/Pagination';
import ItemPerPage from '../../components/ItemPerPage';
import Button from '../../components/Button';

function AlumniList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemsPerPage] = useState(5)
  const {
    data: alumniList
  } = useGetAlumniDataQuery({
    items: itemPerPage,
    page: currentPage,
    tab: 'tab2'
  })

  const header = alumniList?.columns ?? []
  const list = alumniList?.data ?? []
  const page = alumniList?.pagination ?? []

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(e.target.value);
  };

  const handleNewPage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='w-full h-full grid place-items-center sm:h-[100vh]'>
      <div className='grid place-items-center gap-5'>
        <h1 className='text-4xl font-bold text-black sm-text-sm'>Alumni List</h1>
      <div className='w-[90%] max-h-[700px] rounded-lg min-h-62 overflow-x-scroll border-2 sm:max-h-96'>
        <TableContext.Provider
          value={{ 
            tableData: list,
            tableHeader: header,
            title: 'Alumni List'
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
  );
}

export default AlumniList;
