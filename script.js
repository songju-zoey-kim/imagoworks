// Create arrays for AI and human images
const aiImages = Array.from({length: 100}, (_, i) => `ai_image_${i+1}.webp`);
const humanImages = Array.from({length: 200}, (_, i) => `human_image_${i+1}.webp`);

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to load random images
function loadRandomImages() {
    // Select 1 random AI image
    const selectedAIImage = aiImages[Math.floor(Math.random() * aiImages.length)];

    // Select 2 random human images
    const selectedHumanImage1 = humanImages[Math.floor(Math.random() * humanImages.length)];
    const selectedHumanImage2 = humanImages[Math.floor(Math.random() * humanImages.length)];

    // Put selected images into an array and shuffle
    const gameImages = [selectedAIImage, selectedHumanImage1, selectedHumanImage2];
    const randomizedImages = shuffle(gameImages);

    // Assign the shuffled images to the buttons
    document.getElementById('btn1').src = randomizedImages[0];
    document.getElementById('btn2').src = randomizedImages[1];
    document.getElementById('btn3').src = randomizedImages[2];

    // Return the selected AI image to check for a win later
    return selectedAIImage;
}

// Initially load random images
let selectedAIImage = loadRandomImages();

// Function to check if the user clicked the AI image
function checkWin(index) {
    const btn = document.getElementById(`btn${index + 1}`);
    if (btn.src.includes(selectedAIImage)) {
        document.getElementById("result").innerText = "You win!";
    } else {
        document.getElementById("result").innerText = "Try again!";
    }

    // Wait for 1 second before refreshing the page to start a new game
    setTimeout(() => {
        window.location.reload(); // Refresh the page to start a new game
    }, 1000); // 1 second delay to allow the user to see the result
}
