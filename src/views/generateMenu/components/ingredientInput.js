export function ingredientInput() {
  const div = document.createElement('div')
  div.className = "flex justify-center items-start p-3 gap-2 rounded-3xl h-fit bg-white drop-shadow-md"
  div.innerHTML = `<form class="flex justify-center w-full items-start h-full">
            <input
              type="text"
              id="ingredient"
              class="bg-white h-[60px] w-full rounded-3xl text-start p-4 text-xl focus:outline-white"
              placeholder="Enter your Ingredient"
            />
          </form>
          <div
            id="addBtn"
            class="w-[75px] h-[60px] rounded-full flex justify-center items-center text-4xl bg-emerald-100 hover:brightness-95 active:scale-95 transition-all duration-150"
          >
            <span class="material-icons !text-4xl text-emerald-900">add</span>`
  return div
}