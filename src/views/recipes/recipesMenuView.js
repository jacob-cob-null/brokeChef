import recipeItemComponent from "../../recipeItemComponent/recipeItemComponent.js"

export default function recipesView() {
    const page = document.createElement('div')
    page.className = 'flex h-full w-full flex flex-col gap-4 px-4 py-2'


    page.innerHTML = `
    <span class="flex justify-between items-center m-2.5">
        <h1 class="text-3xl text-slate-700 font-title">
            Recipes
        </h1>
        <h2 class="font-body text-slate-600 font-semibold italic text-lg">
            Like a darn museum!
        </h2>
    </span>
    `

    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())

    return page
}