export function ingredientModel() {
    const ingredients = []

    function addIngredient(value) {
        ingredients.push(value)
    }
    function deleteIngredient(value) {
        ingredients = ingredients.filter(ing => ing != value)
    }
    function clearIngredient() {
        ingredients.length = 0
    }
    function getIngredients() {
        const list = ingredients.join(',')
        return list
    }
    function getLength() {
        return ingredients.length
    }

    return {
        addIngredient,
        deleteIngredient,
        clearIngredient,
        getIngredients,
        getLength
    }
}