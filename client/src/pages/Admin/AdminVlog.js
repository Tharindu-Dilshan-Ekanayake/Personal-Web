import React from 'react'
import AdminNav from '../../component/AdminCompo/AdminNav'
import Vlogscompo from '../../component/AdminCompo/Vlogscompo'

export default function AdminVlog() {
  return (
    <div className='flex'>
      <div className=''>
        <AdminNav/>
      </div>
      <div className='w-screen'>
        <div className='pt-12'>
          <Vlogscompo/>
        </div>
        
      </div>
    </div>
  )
}
