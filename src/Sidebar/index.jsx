import React from 'react'
import { Container, Content } from './styles.jsx'
import { FaTimes, FaHome, FaRegSun, FaRegFileAlt, } from 'react-icons/fa'
import * as S from "styles.jsx"
import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <S.Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <S.Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </S.Content>
    </S.Container>
  )
}

export default Sidebar