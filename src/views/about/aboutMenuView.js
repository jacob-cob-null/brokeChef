export default function aboutView() {
    const page = document.createElement('div')
    page.className = 'flex h-full w-full flex flex-col gap-4 px-4 py-2 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'

    page.innerHTML = `
<h1 class="text-6xl font-extrabold text-orange-500 mb-8 text-center">
    About BrokeChef
</h1>

<p class="text-slate-700 text-xl leading-relaxed max-w-3xl mx-auto font-body text-center">
    BrokeChef is your ultimate kitchen sidekick for those <span class="font-semibold text-orange-600">“what do I cook?”</span> nights.<br><br>

    Just enter what ingredients you have, and in seconds it creates a <span class="italic font-semibold text-orange-600">delicious, drool-worthy recipe</span>.<br><br>

    Whether you’re a broke student, a busy parent, or anyone wanting to turn random leftovers into <span class="font-bold text-orange-600">culinary masterpieces</span>, BrokeChef has your back.<br><br>

    Cooking doesn’t have to be complicated – it can be <span class="italic underline text-orange-600">fun, quirky, and satisfying</span>.<br><br>

    So grab that lonely carrot or half-empty jar of peanut butter – <span class="font-extrabold italic text-orange-600">BrokeChef will turn it into magic!</span>
</p>
 `

    return page
}