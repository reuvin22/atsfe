import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Dashboard from './AdminPages/Dashboard'
import AlumniList from './AdminPages/AlumniList'
import Accounts from './AdminPages/Accounts'
import { NavigationContext } from '../utils/context'
import Home from './Home'
function AdminPage() {
  const [pages, setPages] = useState('dashboard');

  const handleTab = (tab) => {
    setPages(tab)
  }

  const renderPages = (pages) => {
    switch(pages){
      case 'dashboard':
        return <Dashboard />
        
      case 'alumni':
        return <AlumniList />

      case 'accounts':
        return <Accounts />

      case 'logout':
        return <Home />

      default:
        return <Dashboard />
    }
  }
  return (
    <div className='flex h-full'>
      <NavigationContext.Provider
            value={{ 
              pages: null,
              onChangeTab: (tab) => handleTab(tab)
             }}>
              <SideBar />
      </NavigationContext.Provider>
        <div className='w-full'>
            {renderPages(pages)}
        </div>
    </div>
  )
}

export default AdminPage