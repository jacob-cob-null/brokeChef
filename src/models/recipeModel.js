export function recipeModel() {
    // initialize from localStorage so multiple model instances share stored data
    let recipes = JSON.parse(localStorage.getItem("recipes") || "[]")

    function addRecipe(obj) {
        // ensure the recipe has a stable id and default fields before saving
        const recipe = Object.assign({
            id: (obj && obj.id) || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString()),
            isFavorite: obj && typeof obj.isFavorite !== 'undefined' ? obj.isFavorite : false
        }, obj)

        recipes.push(recipe)
        saveLocally()
    }

    function deleteRecipe(id) {
        recipes = recipes.filter(recipe => recipe.id != id)
        saveLocally()
    }

    function addFavorite(id) {
        const recipeItem = recipes.find(recipe => recipe.id == id)
        if (recipeItem) {
            recipeItem.isFavorite = !recipeItem.isFavorite
            saveLocally()
        }
    }

    function saveLocally() {
        localStorage.setItem("recipes", JSON.stringify(recipes))
    }

    function getLocal() {
        const saved = localStorage.getItem("recipes")
        recipes = saved ? JSON.parse(saved) : []
        return recipes
    }

    return {
        addRecipe,
        deleteRecipe,
        addFavorite,
        getLocal
    }
}
