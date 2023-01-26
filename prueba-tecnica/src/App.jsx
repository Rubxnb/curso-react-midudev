import React, {useEffect, useState} from 'react'
import Imagenes from '../components/imagenes-chulas/Imagenes'

function App() {

    const [fact, setFact] = useState('')
    const [image, setImage] = useState()


    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then(respuesta => respuesta.json())
            .then(data =>{ 
                const {fact} = data
                setFact(fact)
            })

    }, [])

    useEffect(() => {
        const word = fact.split(' ')[0]
        console.log(word)
        fetch(`https://cataas.com/cat/says/${fact}`)
            .then(respuesta => respuesta.json())
            .then(data => setImage(data.fact))
    }, [fact]);
    return (
        <main>
            <h2>App de gatitos asdfasd</h2>
            {fact && <h3>{fact}</h3>}
            {image && <img src={image}/>}
        </main>
    )
}

export default App;
