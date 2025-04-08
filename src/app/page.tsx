import Header from '@/stories/header'
import RightSidebar from '@/stories/right-sidebar'
import React from 'react'

const Home = () => {
  return (
    // <div className='text-red-700'>Home</div>
    <div className='flex items-start'>
      <RightSidebar/>
      <Header/>
    </div>
  )
}

export default Home