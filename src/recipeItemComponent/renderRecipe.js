import { recipeModel } from "../models/recipeModel";
import recipeItemComponent from "./recipeItemComponent";

const recipeHandler = recipeModel();

export function renderRecipe(target, type = "regular") {


    const recipeList = recipeHandler.getLocal()

    if (type == "regular") {
        recipeList.forEach(ing => {
            target.appendChild(recipeItemComponent(ing))
        });
    }
    else {
        recipeList.forEach(ing => {
            if (ing["isFavorite"]) {
                target.appendChild(recipeItemComponent(ing))
            }
        });
    }

}