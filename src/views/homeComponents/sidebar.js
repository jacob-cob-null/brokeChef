export default function sidebar() {
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    sidebar.className =
        "fixed top-0 left-0 h-full w-[70%] sm:w-[400px] bg-white shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out";
    sidebar.innerHTML = `
  <div>
    <div class="flex justify-end mb-4">
      <button id="closeSidebar" class="material-icons m-4" style="font-size:35px">close</button>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#" class="flex items-center px-4 py-2 gap-3 text-2xl text-gray-700 hover:text-gray-900">
            <span class="material-icons mt-1.5">library_books</span>
            <h1>Recipes</h1>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-4 py-2 gap-3 text-2xl w-full text-gray-700 hover:text-gray-900">
            <span class="material-icons mt-1.5">bookmark</span>
            Favorites
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-4 py-2 gap-2 text-2xl text-gray-700 hover:text-gray-900">
            <span class="material-icons mt-1.5">search</span>
            Search
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-4 py-2 gap-3 text-2xl text-gray-700 hover:text-gray-900 hover:bg-slate-100 active:bg-slate-200">
            <span class="material-icons mt-1">question_mark</span>
            About
          </a>
        </li>
      </ul>
    </nav>
  </div>
`;
    //init event
    sidebarEvent()
    return sidebar

}

function sidebarEvent() {

    document.addEventListener("DOMContentLoaded", () => {
        const menuButton = document.querySelector(
            '[data-hs-overlay="#hs-sidebar-offcanvas"]'
        );
        const sidebar = document.getElementById("sidebar");
        const closeButton = document.getElementById("closeSidebar");

        menuButton.addEventListener("click", () => {
            sidebar.classList.remove("-translate-x-full");
        });

        closeButton.addEventListener("click", () => {
            sidebar.classList.add("-translate-x-full");
        });
    });
}