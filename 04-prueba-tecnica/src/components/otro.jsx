import React from 'react';
import { useCatImage } from '../services/useCatImage';

const Otro = ({fact}) => {

    const {image} = useCatImage({fact})

    return (
        <>
            <img src={image}/>
        </>
    );
}

export default Otro;
