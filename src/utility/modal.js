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

      <!-- Source -->
      ${source
            ? `<a href="${source}" target="_blank" class="mt-3 text-blue-600 underline text-sm">View Source ↗</a>`
            : ""
        }

    </div>
  `;

    // append ingredients
    const list = page.querySelector(".ing-list");
    ingredients.forEach((ing) => {
        const li = document.createElement("li");
        li.textContent = "• " + ing;
        list.appendChild(li);
    });

    // close modal
    page.querySelector("#closeModal").addEventListener("click", () => {
        page.remove();
    });

    // append to body
    document.body.appendChild(page);
}
