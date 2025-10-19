import { pageView } from "../views/pageView.js"
import renderHome from "../views/homeView.js"
import generateMenuView from "../views/generateMenu/generateMenuView.js";

export function redirectAuth() {

    pageView(renderHome)
    const body = document.getElementById('body')
    body.append(generateMenuView())

}