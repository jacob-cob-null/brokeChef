export function recipeModel() {
    let recipes = []

    function addRecipe(obj) {
        recipes.push(obj)
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
