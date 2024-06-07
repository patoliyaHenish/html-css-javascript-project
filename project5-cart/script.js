// show real prodcuts
var products = [
    { name: "Battercreek coffee", headline: "Artisan Coffee", price: "29.99$", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Black-Brown Bag", headline: "Stylish Comfort", price: "59.99$", image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Polaroid camera", headline: "Capture Life", price: "109.99$", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Chanel parfum", headline: "Timeless Elegance", price: "200$", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Jenuin beverage", headline: "Pure Essence", price: "4$", image: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];
var popular = [
    { name: "Canada Dry", headline: "Natural Taste", price: "16.99$", image: "https://images.unsplash.com/photo-1615306119247-67565da835da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Dial Body Wash", headline: "Spring Water", price: "25$", image: "https://images.unsplash.com/photo-1630552352899-0ff485109562?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxwcm9kdWN0fGVufDB8fDB8fHww" },
    { name: "Disposable lighter", headline: "Just Spark", price: "14.99$", image: "https://images.unsplash.com/photo-1520931061294-db3e762a9273?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

var cart = [];

function addProduct() {
    var clutter = "";
    products.forEach(function (product, index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden    ">
                    <img class="w-full h-full object-cover" src="${product.image}" />  
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button data-value="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-value="${index}"
                                class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
    });

    document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts() {
    var clutter = "";
    popular.forEach(function (product) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="" />
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                    </div>
                </div>`;
    });

    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart() {
    document.querySelector(".products").addEventListener("click", function (details) {
        if (details.target.classList.contains('add')) {
            cart.push(products[details.target.dataset.value]);
        };
    })
}

function showCart() {
    document.querySelector(".carticon").addEventListener("click", function () {
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function (item, index) {
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${item.image}" />
            </div> 
            <div>
                <h3 class="font-semibold">${item.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${item.price}</h5>
            </div>
        </div>`;
        });

        document.querySelector(".cartexpnd").innerHTML = clutter;
    });
}

addPopularProducts();
addProduct();
addToCart();
showCart();