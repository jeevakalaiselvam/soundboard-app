//Main reference to DOM to add sound board elements during runtime
const boards = document.getElementById("boards");

//List of all sound ids for soundboards
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

//List of all sound source paths for soundboard elements
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

//List of all sound names for all soundboard elements
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

//Counter to mark the currently playing sound
let currentActive = "";

/**
 * This function creates a sound board element for a given sound target passed as argument
 * @author Jeeva Kalaiselvam
 * @param {String} sound - The sound name
 * @param {String} soundsrc - The sound source path
 * @param {String} soundid - The sound source id of the element
 */
function createBoard(sound, soundsrc, soundid) {
    const board = document.createElement("div");
    board.classList.add("board-container");

    //Create a board element and tag corresponding id and source elements for it
    board.innerHTML = `
            <div class="board" id="${soundid}">
                <i class="fas fa-play icon-small" id="icon${soundid}"></i>
            </div>
            <h3 class="music">${sound}</h3>
            <audio src="sounds/${soundsrc}" id="${soundid}sound"/>
    `;

    //Add all boards to main container
    boards.appendChild(board);

    const boardEl = document.getElementById(soundid);
    boardEl.addEventListener("click", () => {
        currentActive = soundid;
        const audio = document.getElementById(`${soundid}sound`);
        stopAllSounds();
        audio.play();

        //Keep changing color of the playing sound element as visual notification to user
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

    //Setup listeners to create hover effect
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

/**
 * @author Jeeva Kalaiselvam
 * This function creates all soundboard element for all sounds declared above
 */
function generateAllBoard() {
    for (let i = 0; i < soundNames.length; i++) {
        createBoard(soundNames[i], soundSrcs[i], soundIDs[i]);
    }
}

/**
 * @author Jeeva Kalaiselvam
 * This function will stop all playing sound
 */
function stopAllSounds() {
    for (let i = 0; i < soundNames.length; i++) {
        const audio = document.getElementById(`${soundIDs[i]}sound`);
        audio.pause();
    }
}

//Generate all the sound boards for all sounds present
generateAllBoard();
