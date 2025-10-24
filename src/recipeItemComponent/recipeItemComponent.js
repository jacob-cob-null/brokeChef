import { recipeModel } from "../models/recipeModel";
import { showModal } from "../utility/modal";
const recipeHandler = recipeModel();

export default function recipeItemComponent(recipeObj) {
  const id = recipeObj.id || crypto.randomUUID();
  const title = recipeObj.title;
  const prepTime = recipeObj.prepTime;
  const servings = recipeObj.servings;
  const isFavorite = recipeObj.isFavorite;
  const imageUrl = recipeObj.imageUrl;
  const source = recipeObj.source;
  const description = recipeObj.description || "No description provided.";

  const icon = isFavorite ? "★" : "☆";

  const component = document.createElement("div");
  component.className = `
    grid h-[200px] w-full grid-cols-3 gap-3 
    rounded-2xl bg-white p-3 shadow-md 
    outline outline-1 outline-slate-100 
    overflow-hidden hover:shadow-lg transition-all
  `;
  component.id = id;

  component.innerHTML = `
    <!-- Left: Image -->
    <div class="relative h-full w-full rounded-xl overflow-hidden">
      <a href="${source}" target="_blank" class="block h-full w-full">
        <img
          src="${imageUrl}"
          alt="${title}"
          class="h-full w-full object-cover"
        />
      </a>
    </div>

    <!-- Right: Content -->
    <div class="col-span-2 flex flex-col justify-between h-full">
      
      <!-- Title + Favorite -->
      <div class="flex items-start justify-between">
        <h1 class="text-lg font-semibold text-slate-800 truncate pr-2">${title}</h1>
        <span class="toggle-favorite text-2xl text-slate-400 cursor-pointer select-none">${icon}</span>
      </div>

      <!-- Description -->
      <p class="text-slate-600 text-sm line-clamp-3 overflow-hidden">
        ${description}
      </p>

      <!-- Info Footer -->
      <div class="grid grid-cols-2 gap-2 text-xs font-medium">
        <div class="flex items-center justify-center gap-1 rounded-lg bg-orange-100 text-orange-800 py-1">
          <span class="material-icons-outlined text-base">timer</span>
          ${prepTime}m
        </div>
        <div class="flex items-center justify-center rounded-lg bg-amber-100 text-amber-800 py-1">
          Serves: ${servings}
        </div>
      </div>
    </div>
  `;

  // modal click
  component.addEventListener("click", () => {
    showModal(recipeObj);
  });

  // toggle favorite
  const toggle = component.querySelector(".toggle-favorite");
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    recipeHandler.addFavorite(id);

    const updated = recipeHandler.getLocal().find((r) => r.id === id);
    toggle.textContent = updated?.isFavorite ? "★" : "☆";
  });

  return component;
}
