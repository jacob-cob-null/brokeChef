export function ingredientItem(item, root) {

    const section = document.createElement('section')
    section.className = "text-3xl text-slate-700 bg-white w-full active:bg-gray-100 p-2 rounded-xl"

    section.innerText = item
    section.dataset.item = item

    section.addEventListener("click", () => {
        section.remove()
        //filter to remove in array
    })

    // saving item to an array

    //append
    root.append(section)
}