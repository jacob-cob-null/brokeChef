import { recipeModel } from "../models/recipeModel";
import recipeItemComponent from "./recipeItemComponent";

export function renderRecipe(target) {
    const recipeHandler = recipeModel();

    const recipeList = recipeHandler.getLocal()

    recipeList.forEach(ing => {
        target.appendChild(recipeItemComponent(ing))
    });
}