import { searchInput } from "./components/searchInput"
import { resultContainer } from "./components/resultContainer"
import { warning } from "../../utility/alerts"
import { renderSearched } from "../../recipeItemComponent/renderSearched"

export function searchMenuView() {
    const page = document.createElement('div')

    page.className = 'h-full w-full flex flex-col gap-4 p-4'

    page.innerHTML = `
        <h1 class="text-2xl font-title text-center">Find your Recipes</h1>
    `
    page.appendChild(searchInput())
    page.appendChild(resultContainer())

    //append events
    searchEvent(page)

    return page
}
function searchEvent(root) {
    //btn and input
    const searchBtn = root.querySelector('#searchBtn')
    const input = root.querySelector('#recipesField')

    searchBtn.addEventListener('click', () => {
        const value = input.value.trim()
        //container 
        const searchCont = document.getElementById('searchRes')

        //alert empty field
        if (!value) {
            warning("Recipes input field cannot be empty!")
            return
        }
        renderSearched(searchCont, value)
    })
}
