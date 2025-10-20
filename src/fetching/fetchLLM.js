import { warning } from "../utility/alerts"

export async function fetchLLM(ingredients) {
    const res = await fetch(`http://127.0.0.1:3000/generate?ingredients=${ingredients}`)

    if (!res.ok) {
        warning(`Something went wrong! ${res.status}`)
    }

    const recipe = await res.json()

    alert(JSON.stringify(recipe))
}