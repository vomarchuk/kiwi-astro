// src/components/Sidebar.jsx
import React, { useEffect, useState } from 'react'
import { fetchItems } from '../api/firebaseFunctions'
import styled from '@emotion/styled'

const Sidebar = () => {
  const [categories, setCategories] = useState('') as any

  useEffect(() => {
    fetchItems('categories').then((categories) => setCategories(categories))
  }, [])
  return (
    <AsideStyled>
      <Nav>
        <SideBarButton href="/">Home</SideBarButton>
        <SideBarButton href="/category">Category</SideBarButton>
        <SideBarButton href="/contact">Contact</SideBarButton>
        {/* Add more links as needed */}
        {categories &&
          categories.map((category: any) => (
            <SideBarButton href="/category">{category.name}</SideBarButton>
          ))}
      </Nav>
    </AsideStyled>
  )
}

export default Sidebar

const AsideStyled = styled.aside`
  display: flex;
  width: 30vh;
  background-color: #4caf50;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 5px;
`

const SideBarButton = styled.a``
