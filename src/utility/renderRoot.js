import recipesView from "../views/recipes/recipesMenuView";
import favoritesView from "../views/favorites/favoritesMenuView";

export function renderRootView(view = "recipes") {
    const body = document.getElementById("body")
    if (!body) return
    body.innerHTML = "";

    if (view === "recipes") body.appendChild(recipesView());
    else if (view === "favorites") body.appendChild(favoritesView());
}
