import React from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
      <Sidebar />
     <div>
        {
            children
        }
     </div>
      </div>
     
    </div>
  )
}

export default Layout
