import React from 'react'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'
export default function Footer() {

  const {filters} = useFilters()
  return (
    
   <footer className='footer'>
   {
        JSON.stringify(filters, null, 2)
    }
    {/* <h4>Prueba técnica de React - <span>@Rubxnb</span></h4>
    <h5>Shopping Cart con useContect & useReducer</h5> */}
   </footer> 
  )
}
 