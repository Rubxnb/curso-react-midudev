import React, {useEffect, useState} from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_IMAGE_BASE_URL = 'https://cataas.com'
function App() {

    const [fact, setFact] = useState()
    const [image, setImage] = useState()


    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const firstWord = fact.split(' ')[0]
                console.log(firstWord)
                fetch(`${CAT_IMAGE_BASE_URL}/cat/says/${firstWord}?json=true`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const { url } = data
                        setImage(url)
                    })
            })

        
            
    }, [])


    return (
        <main>
            <h2>App de gatitos asdfasd</h2>
            {fact && <h3>{fact}</h3>}
            {image && <img src={`${CAT_IMAGE_BASE_URL}${image}`} alt="This is an imagen from caat APi"/>}
        </main>
    )
}

export default App;
