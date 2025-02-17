import Navbar from '@/components/navbar'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const MainLayout:React.FC<Props> = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default MainLayout