import recipeItemComponent from "../../recipeItemComponent/recipeItemComponent.js"

export default function favoritesView() {
    const page = document.createElement('div')
    page.className = 'flex h-full w-full flex flex-col gap-4 px-4 py-2'

    const header = document.createElement('h1')
    header.textContent = 'The king still had taste...'
    header.className = 'text-3xl text-slate-700'

    page.appendChild(header)
    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())

    return page
}