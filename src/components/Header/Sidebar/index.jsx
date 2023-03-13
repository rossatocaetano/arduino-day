
import React from 'react'
import { Container, Itens } from './style'

//import SidebarItem from '../SidebarItem'

export const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <Itens>
        <ul>
          <li><a href='#top'>Home</a></li>
          <li><a href='#programacao'>Programação</a></li>
          <li><a href='#historia'>História</a></li>
        </ul>
      </Itens>
    </Container>
  )
}

