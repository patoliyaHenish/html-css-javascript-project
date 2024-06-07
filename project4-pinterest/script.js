var arr = [
    { name: "White and Gray robot", image: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Nebula", image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1807&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Galaxy", image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Red planet", image: "https://plus.unsplash.com/premium_photo-1676668504488-c7ec7c7dc7e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Night sky", image: "https://images.unsplash.com/photo-1614910767616-d11ce66fcb5d?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Saturn planet", image: "https://plus.unsplash.com/premium_photo-1717325378155-cad290c20f5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Colorful design", image: "https://images.unsplash.com/photo-1659313647979-22cab6ce0499?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Buildings", image: "https://images.unsplash.com/photo-1717334526465-057253ebcf52?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "mettle-pipe", image: "https://images.unsplash.com/photo-1717210398097-41e12156ecff?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "white-house", image: "https://images.unsplash.com/photo-1705020417871-5a46dc8e88d7?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "house", image: "https://images.unsplash.com/photo-1717144585365-ad3a728a6c54?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "white-boat", image: "https://images.unsplash.com/photo-1716855159790-0bbff6e7b8ae?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]


// function to show the images

function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;

    })
    document.querySelector(".container").innerHTML = clutter;
}

// click on search to change layer

function searchFeature() {
    var input = document.querySelector("#searchinput");

    input.addEventListener("focus", function () {
        document.querySelector(".overlay").style.display = "block";
    })

    input.addEventListener("blur", function () {
        document.querySelector(".overlay").style.display = "none";
    })

    input.addEventListener("input", function () {
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function (obj) {
            clutter += `<div class="res flex px-8 py-3">
            <i class = "ri-search-line font-semibold mr-5"></i>
            <h3 class = "fonr-semibold">${obj.name}</h3></div>`
        })
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}




searchFeature();
showTheCards();