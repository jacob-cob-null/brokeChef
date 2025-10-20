import { ingredientList } from "./components/ingredientList"
import { ingredientInput } from "./components/ingredientInput"
import { apiButtons } from "./components/apiButtons"
import { ingredientItem } from "./components/ingredientItem"
import { warning, confirmation } from "../../utility/alerts"
import { ingredientModel } from "../../models/ingredientModel"
import { fetchApi } from "../../fetching/fetchApi"
import { fetchLLM } from "../../fetching/fetchLLM"
import { recipeModel } from "../../models/recipeModel"

export default function generateMenuView() {
    const page = document.createElement('div')
    page.className = "grid grid-rows-[30px_minmax(500px,600px)_70px_70px] gap-3 w-full h-full bg-gray-100 px-3 py-6 mb-4"

    page.innerHTML = '<h1 class="font-title text-center text-2xl">Generate some magic ig...</h1>'

    page.append(ingredientList())
    page.append(ingredientInput())
    page.append(apiButtons())

    //append events
    events(page)

    return page
}
function events(root) {
    //ingredient and recipe methods
    const ingredientHandler = ingredientModel()
    const recipeHandler = recipeModel()

    //add btn
    const addBtn = root.querySelector("#addBtn")
    const list = root.querySelector("#ingredientList")

    //generate buttons
    const api = root.querySelector("#api")
    const llm = root.querySelector("#llm")

    addBtn.addEventListener('click', () => {

        // input field
        const ingredientField = root.querySelector("#ingredient")
        const value = ingredientField.value.trim()

        //validate word through api and block duplicates
        if (!value) {
            warning("Oops! You left the field blank")
        } else {
            //save input value and append to list
            ingredientHandler.addIngredient(value)
            ingredientItem(value, list)
            ingredientField.value = ""
        }
    })

    api.addEventListener('click', async () => {
        if (ingredientHandler.getLength() < 3) {
            warning("Add at least 3 ingredients")
            return
        }
        list.innerHTML = ''
        list.innerHTML =
            `
        <h1 class="font-title text-3xl text-center text-slate-700">Making some Magic✨</h1>
        `
        const recipe = await fetchApi(ingredientHandler.getIngredients())
        recipeHandler.addRecipe(recipe)
        confirmation("You have fetched a new Recipe!")
        list.innerHTML = ''
    })

    llm.addEventListener('click', async () => {
        if (ingredientHandler.getLength() < 3) {
            warning("Add at least 3 ingredients")
            return
        }
        list.innerHTML = ''
        list.innerHTML =
            `
        <h1 class="font-title text-2xl text-center text-slate-700">Making some Magic✨</h1>
        `
        const recipe = await fetchLLM(ingredientHandler.getIngredients())
        recipeHandler.addRecipe(recipe)
        confirmation("You have generated a new Recipe!")
        list.innerHTML = ''
    })
}
