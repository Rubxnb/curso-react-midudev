import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

import React from 'react';

export const Products = ({products}) => {
    return (
        <main className='products'>
        <ul>
        {products.slice(0,10).map((product, index) => (
                <li key={index}>
                    <img src={product.thumbnail} alt={product.title}/>
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                        <button>                            
                            <AddToCartIcon/>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
            
        </main>
    );
}

