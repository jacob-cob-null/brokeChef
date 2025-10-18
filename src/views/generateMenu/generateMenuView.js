import { ingredientList } from "./components/ingredientList"
import { ingredientInput } from "./components/ingredientInput"
import { apiButtons } from "./components/apiButtons"
import { ingredientItem } from "./components/ingredientItem"
import { warning } from "../../utility/alerts"

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
    //add btn
    const addBtn = root.querySelector("#addBtn")
    const list = root.querySelector("#ingredientList")

    addBtn.addEventListener('click', () => {
        // input field
        const ingredientField = root.querySelector("#ingredient")
        const value = ingredientField.value.trim()

        //validate word through api and block duplicates
        if (!value) {
            warning("Oops! You left the field blank")
        } else {
            //save input value and append to list
            ingredientItem(value, list)
            ingredientField.value = ""
        }
    })
}
