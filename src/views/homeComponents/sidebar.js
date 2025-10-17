import renderHome from "../homeView";
import generateMenuView from "../generateMenu/generateMenuView";
import recipesView from "../recipes/recipesMenuView";
import favoritesView from "../favorites/favoritesMenuView";
import aboutView from "../about/aboutMenuView";
export default function sidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  sidebar.className =
    "fixed top-0 left-0 h-full w-[70%] sm:w-[400px] bg-white shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out z-50";

  sidebar.innerHTML = `
      <div>
        <div class="flex justify-end mb-4">
          <button id="closeSidebar" class="material-icons m-4" style="font-size:35px">close</button>
        </div>
        <nav>
          <ul>
            <li class="generate">
              <a href="#" class="generate flex items-center px-4 py-2 gap-3 text-2xl text-gray-700 hover:text-gray-900  hover:bg-slate-100 active:bg-slate-200">
                <span class="generate material-icons mt-1.5">auto_awesome</span>
                <h1 class="generate">Generate</h1>
              </a>
            </li>
            <li>
              <a href="#" class="recipes flex items-center px-4 py-2 gap-3 text-2xl text-gray-700 hover:text-gray-900  hover:bg-slate-100 active:bg-slate-200">
                <span class="material-icons mt-1.5">library_books</span>
                <h1>Recipes</h1>
              </a>
            </li>
            <li>
              <a href="#" class="favorites flex items-center px-4 py-2 gap-3 text-2xl w-full text-gray-700 hover:text-gray-900  hover:bg-slate-100 active:bg-slate-200">
                <span class="material-icons mt-1.5">bookmark</span>
                Favorites
              </a>
            </li>
            <li>
              <a href="#" class="search flex items-center px-4 py-2 gap-2 text-2xl text-gray-700 hover:text-gray-900  hover:bg-slate-100 active:bg-slate-200">
                <span class="material-icons mt-1.5">search</span>
                Search
              </a>
            </li>
            <li>
              <a href="#" class="about flex items-center px-4 py-2 gap-3 text-2xl text-gray-700 hover:text-gray-900 hover:bg-slate-100 active:bg-slate-200">
                <span class="material-icons mt-1">question_mark</span>
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    `;

  document.addEventListener('click', (e) => {
    // Open sidebar when menu button is clicked
    if (e.target.matches('[data-hs-overlay="#hs-sidebar-offcanvas"]')) {
      sidebar.classList.remove("-translate-x-full");
    }

    // Close sidebar when close button is clicked
    if (e.target.matches('#closeSidebar')) {
      sidebar.classList.add("-translate-x-full");
    }
  });

  //menu items selection
  sidebar.addEventListener('click', (e) => {

    const body = document.getElementById('body')

    if (e.target.classList.contains('recipes')) {
      body.innerHTML = ''
      body.append(recipesView())
    }
    if (e.target.classList.contains('generate')) {
      body.innerHTML = ''
      body.append(generateMenuView())
    }
    if (e.target.classList.contains('favorites')) {
      body.innerHTML = ''
      body.append(favoritesView())
    }
    if (e.target.classList.contains('search')) {
      body.innerHTML = ''
      alert('search')
    }
    if (e.target.classList.contains('about')) {
      body.innerHTML = ''
      body.append(aboutView())
    }
  })

  return sidebar;
}