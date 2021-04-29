const boards = document.getElementById("boards");

const soundIDs = [
    "avengersiphone",
    "bollywood",
    "buttabomma",
    "jacksparrow",
    "johncenawwe",
    "jokerbgm",
    "kgfbgm",
    "pikachu",
    "suicidesquadbgm",
    "takitakiiphone",
];

const soundSrcs = [
    "avengersiphone.mp3",
    "bollywood.mp3",
    "buttabomma.mp3",
    "jacksparrow.mp3",
    "johncenawwe.mp3",
    "jokerbgm.mp3",
    "kgfbgm.mp3",
    "pikachu.mp3",
    "suicidesquadbgm.mp3",
    "takitakiiphone.mp3",
];

const soundNames = [
    "Avengers Iphone",
    "Bollywood Music",
    "Butta Bomma",
    "Jack Sparrow",
    "John Cena WWE",
    "Joker",
    "KGF",
    "Pikachu",
    "Suicide Squad",
    "Taki Taki Iphone",
];

let currentActive = "";

function createBoard(sound, soundsrc, soundid) {
    const board = document.createElement("div");
    board.classList.add("board-container");
    board.innerHTML = `
            <div class="board" id="${soundid}">
                <i class="fas fa-play icon-small" id="icon${soundid}"></i>
            </div>
            <h3 class="music">${sound}</h3>
            <audio src="sounds/${soundsrc}" id="${soundid}sound"/>
    `;

    boards.appendChild(board);

    const boardEl = document.getElementById(soundid);
    boardEl.addEventListener("click", () => {
        currentActive = soundid;
        const audio = document.getElementById(`${soundid}sound`);
        stopAllSounds();
        audio.play();

        window.setInterval(function () {
            colors = [
                "violet",
                "indigo",
                "blue",
                "green",
                "yellow",
                "orange",
                "red",
            ];
            const item = document.getElementById(`icon${soundid}`);
            color = colors[Math.floor(Math.random() * 7)];
            item.style.color = color;
            console.log(item);
        }, 500);
    });

    boardEl.addEventListener("mouseover", (e) => {
        const icon = document.getElementById(`icon${soundid}`);
        icon.classList.remove("fa-play");
        icon.classList.add("fa-music");
    });
    boardEl.addEventListener("mouseout", (e) => {
        if (e.target.id === currentActive) {
        } else {
            const icon = document.getElementById(`icon${soundid}`);
            icon.classList.remove("fa-music");
            icon.classList.add("fa-play");
        }
    });
}

function setupRainbowColors(id) {
    colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
    const item = document.getElementById(id);
    color = colors[Math.floor(Math.random() * 7)];
    item.style.color = color;
    console.log(item);
}

function generateAllBoard() {
    for (let i = 0; i < soundNames.length; i++) {
        createBoard(soundNames[i], soundSrcs[i], soundIDs[i]);
    }
}

function stopAllSounds() {
    for (let i = 0; i < soundNames.length; i++) {
        const audio = document.getElementById(`${soundIDs[i]}sound`);
        audio.pause();
    }
}

generateAllBoard();
