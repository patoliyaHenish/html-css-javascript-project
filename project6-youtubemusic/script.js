var arr = [
    { songName: "Perfect - Ed Sheeran", url: "./songs/Ed Sheeran - Perfect.m4a", img: "https://m.media-amazon.com/images/M/MV5BMGU5YTRjMTUtZDU4Mi00NjFlLWExYTAtMjVkN2JmOTE1Y2Q2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg", due: "4:24" },
    { songName: "Steal My Girl - One Direction", url: "./songs/One Direction - Steal My Girl.mp3", img: "https://i.pinimg.com/originals/dd/0f/90/dd0f90fd3163ba24b68ff5d5948b5f3d.jpg", due: "3:49" },
    { songName: "Jason Derulo - Swalla (feat. Nicki Minaj & Ty Dolla $ign)", url: "./songs/Jason Derulo - Swalla (feat. Nicki Minaj & Ty Dolla $ign).mp3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIqsmwGWOxgl1EQZB29FJ60h3vgwFwl1wbw&s", due: "3:38" },
    { songName: "There's Nothing Holdin' Me Back - Shawn Mendes", url: "./songs/Shawn Mendes - There's Nothing Holdin' Me Back.mp3", img: "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521", due: "3:20" },
    { songName: "Closer - The Chainsmokers ft. Halsey", url: "./songs/The Chainsmokers - Closer ft. Halsey.mp3", img: "https://i.scdn.co/image/ab67616d0000b273495ce6da9aeb159e94eaa453", due: "4:06"}
]

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var audio = new Audio()

var selectedSong = 0;

function mainFunction() {
    var clutter = "";

    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id="${index}">
                    <div class="part1">
                        <img src="${elem.img}" alt="">
                        <h2>${elem.songName}</h2>
                    </div>
                    <h6>${elem.due}</h6>
                </div>`;
    })

    allSongs.innerHTML = clutter;

    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}

mainFunction();

allSongs.addEventListener("click", function (details) {
    selectedSong = details.target.id;
    mainFunction();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag
    audio.play();
});

var flag = 0;
play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
});

forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++;
        mainFunction();
        audio.play();
    } else {
        forward.style.opacity = 0.4;
    }
});

backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--;
        mainFunction();
        audio.play();
    } else {
        backward.style.opacity = 0.4;
    }
});