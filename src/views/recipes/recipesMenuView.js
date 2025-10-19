import recipeItemComponent from "../../recipeItemComponent/recipeItemComponent.js"

export default function recipesView() {
    const page = document.createElement('div')
    page.className = 'flex h-full w-full flex flex-col gap-4 p-4'


    page.innerHTML = `
    <span class="flex justify-between items-center">
        <h1 class="text-3xl text-slate-700 font-title">
            Recipes
        </h1>
        <h2 class="font-body text-slate-500 font-semibold italic text-lg">
            Like a darn museum!
        </h2>
    </span>
        <hr class="outline-1 outline-slate-700 mb-2">
    `
    const recipeCont = document.createElement('div')
    recipeCont.className = 'h-full w-full p-2 flex flex-col gap-2 overflow-x-hidden overflow-y-auto'

    page.appendChild(recipeCont)

    recipeCont.appendChild(recipeItemComponent())
    recipeCont.appendChild(recipeItemComponent())
    recipeCont.appendChild(recipeItemComponent())
    recipeCont.appendChild(recipeItemComponent())
    recipeCont.appendChild(recipeItemComponent())
    recipeCont.appendChild(recipeItemComponent())

    return page
}