(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Are you sureeee?",
    "We can Play Minecraft Together 😞 ??",
    "I can do Cosplay Just For You 😭 ?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, Vinay will be soo saaad...",
    "I'll Pause my Online Game Just for You 🤧",
    "I will do the chores...",
    "Ok fine, I will stop asking...",
    "Just kidding 😭, say yes please! ❤️"
];

let messageIndex = 0;

// Add this line to create a new image tag for the Pikachu sad GIF
const pikachuSadGif = document.createElement('img');
pikachuSadGif.src = 'sad.gif'; // Replace with the actual path to the Pikachu sad GIF
pikachuSadGif.alt = 'Pikachu Sad';
pikachuSadGif.style.display = 'none'; // Initially hidden

// Add breaks to create a gap between the buttons and the Pikachu sad GIF
const breaks = Array.from({ length: 4 }, () => document.createElement('br'));
breaks.forEach(br => document.body.appendChild(br));

document.body.appendChild(pikachuSadGif);

// Reference to the currently playing GIF
const currentGif = document.querySelector('.current-gif'); // Replace with the actual selector for the current GIF

// Reference to the background song
const backgroundSong = document.getElementById('backgroundSong');

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Hide all GIFs except the Pikachu sad GIF
    const allGifs = document.querySelectorAll('img');
    allGifs.forEach(gif => {
        if (gif !== pikachuSadGif) {
            gif.style.display = 'none';
        }
    });
    pikachuSadGif.style.display = 'block';

    // Hide the <h5> element with the id 'minnuvinay'
    const h5Element = document.getElementById('minnuvinay');
    if (h5Element) {
        h5Element.style.display = 'none';
    }

    // Play the background song for all messages
    if (backgroundSong) {
        backgroundSong.play();
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html"; // Redirect to yes_page.html immediately
}