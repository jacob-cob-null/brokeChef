import { warning } from "../utility/alerts"

export async function fetchApi(ingredients) {
    const res = await fetch(`http://127.0.0.1:3000/recipe?ingredients=${ingredients}`)

    if (!res.ok) {
        warning(`Something went wrong! ${res.status}`)
    }

    const recipe = await res.json()

    alert(JSON.stringify(recipe))
}