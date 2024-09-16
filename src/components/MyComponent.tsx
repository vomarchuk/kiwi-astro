import React from 'react'
import { fetchItems } from '../api/firebaseFunctions'

interface MyComponentProps {
  message: string
}

const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
  return <div>{message}</div>
}

export default MyComponent
