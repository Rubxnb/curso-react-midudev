import { useEffect, useState } from "react"

const CAT_IMAGE_BASE_URL = 'https://cataas.com'

export function useCatImage({fact}) {
    const [image, setImage] = useState()
    // para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if(!fact) return
        //const firstWord = fact.split(' ')[0]
        const firstWord = fact.split(' ',3).join(' ')
        console.log(firstWord)
        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const { url } = data
                setImage(url)
            })
    }, [fact])

    return { image: `${CAT_IMAGE_BASE_URL}${image}`}
}