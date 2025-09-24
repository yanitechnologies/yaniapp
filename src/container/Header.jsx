import React from 'react'
import Navbar from '../components/Navbar';
import AnnouncementBanner from '../components/AnnouncementBanner'
const Header = () => {
  return (
    <div>
        <AnnouncementBanner />
        <Navbar />
    </div>
  )
}

export default Header
