export default function navbar(menuTitle) {
  const navbar = document.createElement("div");
  navbar.className = "bg-white grid grid-cols-3 items-center px-8";
  navbar.innerHTML = `
  <span class="material-icons" style="font-size:35px" data-hs-overlay="#hs-sidebar-offcanvas">menu</span>
  <h1 class="text-center text-2xl">${menuTitle}</h1>
  <span class="material-icons justify-self-end" style="font-size:35px">account_circle</span>
`;
  return navbar

}