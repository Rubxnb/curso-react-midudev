import React from 'react'
import { useCatImage } from './services/useCatImage'
import { useCatFact } from './services/useCatFact'
import Otro from './components/otro'
import './App.css'

function App() {
    const {fact, refreshFact} = useCatFact()
    const { image } = useCatImage({fact})

    function handleClick() {
        refreshFact()
    }

    return (
        <main>
            <h2>App de gatitos asdfasd</h2>
            <button onClick={handleClick}>Nueva cita</button>
            <section>    
                {fact && <h3>{fact}</h3>}
                {image && <img src={image} alt="This is an imagen from caat APi"/>}
            </section>
            <Otro fact={fact}/>
            <Otro fact={fact}/>
            <Otro fact={fact}/>
            <Otro fact={fact}/>
        </main>
    )
}

export default App;
