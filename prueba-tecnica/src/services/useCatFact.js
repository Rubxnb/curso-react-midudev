import { useEffect, useState } from "react"
import { getRandomFact } from "./facts"

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshFact =() => {
        getRandomFact().then(setFact)
        // ES LO MISMO A ESTO
        // getRandomFact().then(newFact => setFact(newFact))
    }

    // para recuperar la cita al cargar la página
    useEffect(() => {
        refreshFact()
    }, [])

    return {fact, refreshFact}
}