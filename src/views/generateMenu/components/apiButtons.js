export function apiButtons() {
  const div = document.createElement('div')

  div.className = "flex w-full h-full items-center"
  div.innerHTML = `<button
            class="w-full h-[60px] rounded-3xl bg-emerald-400 flex justify-center items-center gap-3 text-xl text-white shadow-xs"
          >
            <span class="material-icons mt-1 text-white">auto_awesome</span>
            Generate
          </button>

          <span class="text-gray-400 font-medium px-1">or</span>

          <button
            class="w-full h-[60px] rounded-3xl bg-orange-300 flex justify-center items-center gap-3 text-xl text-white shadow-xs"
          >
            <span class="material-icons mt-1 text-white">search</span>
            Search
          </button>`

  return div
}
