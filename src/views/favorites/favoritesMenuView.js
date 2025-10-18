import recipeItemComponent from "../../recipeItemComponent/recipeItemComponent.js"

export default function favoritesView() {
    const page = document.createElement('div')
    page.className = 'flex h-full w-full flex flex-col gap-4 p-4'


    page.innerHTML = `
    <span class="flex justify-between items-center">
        <h1 class="text-3xl text-slate-700 font-title">
            Favorites
        </h1>
        <h2 class="font-body text-slate-500 font-semibold italic text-md">
            The audacity to be picky?
        </h2>
    </span>
    <hr class="outline-1 outline-slate-700 mb-2">
    `


    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())
    page.appendChild(recipeItemComponent())

    return page
}