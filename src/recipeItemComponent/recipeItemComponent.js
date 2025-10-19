export default function recipeItemComponent() {
  const component = document.createElement('div')
  component.className = 'grid h-fit h-max-[210px] w-full grid-cols-3 grid-rows-1 place-content-center gap-4 rounded-2xl bg-white p-4 drop-shadow-lg  outline-1 outline-slate-100'
  component.innerHTML = `
  <div class="relative w-full h-full rounded-xl overflow-hidden">
    <img
      src="https://placehold.co/600x600"
      class="absolute inset-0 w-full h-full object-cover"
      alt=""
    />
  </div>

  <div class="col-span-2 flex flex-col justify-start gap-2">
    <div class="flex justify-between items-center">
      <h1 class="text-xl font-semibold text-slate-800">Recipe Title</h1>
      <h1 class="text-3xl text-slate-500 mb-2">★</h1>
    </div>

    <p class="text-slate-600 text-base font-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, unde,
      fugit pariatur voluptatibus saepe fugiat optio
    </p>

    <div class="grid h-[40px] w-full grid-cols-2 gap-2">
      <div
        class="flex h-full items-center justify-center rounded-lg bg-orange-200 text-orange-800"
      >
        Prep time:
      </div>
      <div
        class="flex h-full items-center justify-center rounded-lg bg-amber-200 text-amber-800"
      >
        Servings
      </div>
    </div>
  </div>
`;

  return component
}