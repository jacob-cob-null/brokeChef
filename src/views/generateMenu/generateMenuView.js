import { headerText } from "./components/headerText"
import { ingredientList } from "./components/ingredientList"
import { ingredientInput } from "./components/ingredientInput"
import { apiButtons } from "./components/apiButtons"

export default function generateMenuView() {
    const page = document.createElement('div')
    page.className = "grid grid-rows-[minmax(500px,600px)_80px_80px] gap-3 w-full h-full bg-gray-100 p-6"


    page.append(ingredientList())
    page.append(ingredientInput())
    page.append(apiButtons())

    return page
}