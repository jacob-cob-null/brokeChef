export default function recipeItemComponent(recipeObj) {
  const id = recipeObj["id"] || crypto.randomUUID()
  const title = recipeObj["title"]
  const prepTime = recipeObj["prepTime"]
  const servings = recipeObj["servings"]
  const isFavorite = recipeObj["isFavorite"]
  const imageUrl = recipeObj["imageUrl"]
  const source = recipeObj["source"]
  const description = recipeObj["description"] || "No description provided."

  const icon = isFavorite ? "★" : "☆"

  const component = document.createElement('div')
  component.className =
    'grid h-fit max-h-[210px] w-full grid-cols-3 gap-4 rounded-2xl bg-white p-4 drop-shadow-lg outline outline-1 outline-slate-100'
  component.id = id

  component.innerHTML = `
    <div class="relative w-full h-full rounded-xl overflow-hidden">
      <img
        src="${imageUrl}"
        class="absolute inset-0 w-full h-full object-cover"
        alt="${title}"
      />
    </div>

    <div class="col-span-2 flex flex-col justify-start gap-2">
      <div class="flex justify-between items-center">
        <a href="${source}" target="_blank">
          <h1 class="text-xl font-semibold text-slate-800">${title}</h1>
        </a>
        <h1 class="text-3xl text-slate-500 mb-2">${icon}</h1>
      </div>

      <p class="text-slate-600 text-base font-body">
        ${description}
      </p>

      <div class="grid h-[40px] w-full grid-cols-2 gap-2">
        <div class="flex h-full items-center justify-center rounded-lg bg-orange-200 text-orange-800">
          Time:
          <br> ${prepTime} Minutes
        </div>
        <div class="flex h-full items-center justify-center rounded-lg bg-amber-200 text-amber-800">
          Servings: ${servings}
        </div>
      </div>
    </div>
  `

  return component
}
