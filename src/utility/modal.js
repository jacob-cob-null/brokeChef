import { recipeModel } from "../models/recipeModel";
import favoritesView from "../views/favorites/favoritesMenuView";
import recipesView from "../views/recipes/recipesMenuView";


const recipeHandler = recipeModel()

export function showModal(recipeObj) {
  const id = recipeObj.id || crypto.randomUUID();
  const title = recipeObj.title;
  const prepTime = recipeObj.prepTime;
  const servings = recipeObj.servings;
  const isFavorite = recipeObj.isFavorite;
  const imageUrl = recipeObj.imageUrl;
  const source = recipeObj.source;
  const ingredients = recipeObj.ingredients || ["No ingredients provided"];
  const description = recipeObj.description || "No description provided.";
  const icon = isFavorite ? "★" : "☆";

  const page = document.createElement("div");
  page.className =
    "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4";

  page.innerHTML = `
    <div class="flex h-[600px] w-[340px] flex-col items-center justify-start gap-3 rounded-2xl bg-white p-4 shadow-xl overflow-y-auto">
      
      <!-- Header -->
      <div class="flex w-full items-center justify-between">
        <h1 class="text-xl font-semibold truncate">${title}</h1>
        <button id="closeModal" class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-xl font-bold hover:bg-slate-300">
          <span class="material-icons-round">arrow_back</span>
        </button>
      </div>

      <!-- Image -->
      <img src="${imageUrl}" alt="${title}" class="h-[200px] w-full rounded-xl object-cover" />

      <!-- Quick Info -->
      <div class="flex w-full gap-2 text-sm font-medium">
        <div class="flex h-10 flex-1 items-center justify-center gap-1 rounded-xl bg-orange-100 text-orange-800">
          <span class="material-icons-outlined text-base">timer</span>
          ${prepTime} mins
        </div>
        <div class="flex h-10 flex-1 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
          Servings: ${servings}
        </div>
      </div>

      <!-- Description -->
      <p class="text-slate-700 text-sm leading-snug">${description}</p>

      <hr class="w-full border-t border-slate-200 my-2" />

      <!-- Ingredients -->
      <div class="w-full">
        <h2 class="text-lg font-semibold mb-1">Ingredients</h2>
        <ul class="ing-list flex flex-col gap-1 text-sm text-slate-700"></ul>
      </div>
      <div class="w-full flex justify-around items-center gap-4">
        <a href="${source}" target="_blank" class="w-full">
        <button class="w-full h-[40px] bg-blue-300 rounded-xl">Source</button>
        </a>
        <button id="del_btn" class="w-full h-[40px] bg-red-300 rounded-xl">Delete Recipe</button>
      </div>
    </div>
  `;

  //append ingredients
  const list = page.querySelector(".ing-list");
  ingredients.forEach((ing) => {
    const li = document.createElement("li");
    li.textContent = "• " + ing;
    list.appendChild(li);
  });

  //close modal
  page.querySelector("#closeModal").addEventListener("click", () => {
    page.remove();
  });

  //delete recipe
  const del_btn = page.querySelector("#del_btn")
  del_btn.addEventListener('click', () => {
    page.remove();
    recipeHandler.deleteRecipe(id)

    const bodyContainer = document.getElementById('body')
    if (bodyContainer) {
      bodyContainer.innerHTML = ''
      bodyContainer.appendChild(recipesView())
      return
    }
    const app = document.getElementById('app')
    if (app) {
      app.innerHTML = ''
      app.appendChild(recipesView())
      return
    }
    location.reload()
  })

  // append to body
  document.body.appendChild(page);
}
