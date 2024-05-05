import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Dashboard from './AdminPages/Dashboard'
import AlumniList from './AdminPages/AlumniList'
import Accounts from './AdminPages/Accounts'
function AdminPage() {
  const [pages, setPages] = useState('');
  const renderPages = (pages) => {
    switch(pages){
      case 'dashboard':
        return <Dashboard />

      case 'alumni':
        return <AlumniList />

      case 'accounts':
        return <Accounts />

      default:
        return <Dashboard />
    }
  }
  return (
    <div className='flex'>
        <SideBar />
        <div className='w-full'>
            {renderPages(pages)}
        </div>
    </div>
  )
}

export default AdminPage