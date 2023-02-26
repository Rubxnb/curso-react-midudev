import React from 'react'
import Filters from './Filters'
import { CartIcon } from './Icons'

export default function Header({changeFilters}) {
    return(
        <header>
            <h1>React Shop <CartIcon/></h1>
            <Filters changeFilters={changeFilters}/>
        </header>
    )
}