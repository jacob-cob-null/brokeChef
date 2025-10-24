import { recipeModel } from "../models/recipeModel"
import { showModal } from "../utility/modal"
const recipeHandler = recipeModel()

export default function recipeItemComponent(recipeObj) {
  const id = recipeObj.id || crypto.randomUUID()
  const title = recipeObj.title
  const prepTime = recipeObj.prepTime
  const servings = recipeObj.servings
  const isFavorite = recipeObj.isFavorite
  const imageUrl = recipeObj.imageUrl
  const source = recipeObj.source
  const description = recipeObj.description || "No description provided."

  const icon = isFavorite ? "★" : "☆"

  const component = document.createElement("div")
  component.className =
    "grid h-fit max-h-[210px] w-full grid-cols-3 gap-4 rounded-2xl bg-white p-4 drop-shadow-lg outline outline-1 outline-slate-100"
  component.id = id

  component.innerHTML = `
    <div class="relative w-full h-full rounded-xl overflow-hidden">
    <a href="${source}" target="_blank">
      <img
        src="${imageUrl}"
        class="absolute inset-0 w-full h-full object-cover shadow-inner"
        alt="${title}"
      />
      </a>
    </div>

    <div class="col-span-2 flex flex-col justify-start gap-2">
      <div class="flex justify-between items-center">

          <h1 class="text-xl font-semibold text-slate-800">${title}</h1>

        <h1 class="toggle-favorite text-3xl text-slate-500 mb-2 cursor-pointer">${icon}</h1>
      </div>

      <p class="text-slate-600 text-base font-body">
        ${description}
      </p>

      <div class="grid h-[40px] w-full grid-cols-2 gap-2">
        <div class="flex h-full items-center justify-around py-2 rounded-lg bg-orange-200 text-orange-800">
          <span class="material-icons-outlined">timer</span>${prepTime} Mins
        </div>
        <div class="flex h-full items-center justify-around rounded-lg bg-amber-200 text-amber-800">
           Servings: ${servings}
        </div>
      </div>
    </div>
  `
  // TODO: show modal here
  component.addEventListener("click", () => {
    showModal(recipeObj)
  })

  //toggle handler
  const toggle = component.querySelector(".toggle-favorite")
  toggle.addEventListener("click", (e) => {
    e.stopPropagation()
    recipeHandler.addFavorite(id)

    // update star instantly
    const updated = recipeHandler.getLocal().find(r => r.id === id)
    toggle.textContent = updated?.isFavorite ? "★" : "☆"
  })

  return component
}
