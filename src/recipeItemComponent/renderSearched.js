import { recipeModel } from "../models/recipeModel"
import recipeItemComponent from "./recipeItemComponent"

const recipeHandler = recipeModel()
export function renderSearched(target, query = "") {
    const recipes = recipeHandler.getLocal()
    const keyword = query.toLowerCase().trim()

    target.innerHTML = ""
    let foundAny = false

    recipes.forEach(recipe => {
        const allValues = [
            ...Object.values(recipe),
            ...(Array.isArray(recipe.ingredients) ? recipe.ingredients : [])
        ]

        const match = allValues.some(value => {
            if (value == null) return false
            return String(value).toLowerCase().includes(keyword)
        })

        if (match) {
            foundAny = true
            target.appendChild(recipeItemComponent(recipe))
        }
    })

    if (!foundAny) {
        target.innerHTML = `
    <p class="text-center text-slate-500 mt-4">
      No recipes found for <span class="font-semibold text-slate-700 text-2xl font-title">"${keyword}"</span>.
    </p>
  `
    }
}
