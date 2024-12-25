const poems = [
    {
        title: "Nature's Peace",
        content: "This poem explores the tranquility of nature, the soft whispers of trees, the serene sounds of rivers flowing, and the peace it brings to the soul."
    },
    {
        title: "Simple Joys",
        content: "A warm poem about life's simple pleasures, like a warm cup of tea, a stroll in the park, and the feeling of sun on your face."
    },
    {
        title: "Sunset Reflections",
        content: "Reflecting on life through the lens of a sunset, the hues of orange and pink reminding us of the beauty in endings."
    },
    {
        title: "An Ode to the Night Sky",
        content: "A poem dedicated to the vastness and mystery of the night sky, filled with stars that tell stories beyond our comprehension."
    },
    {
        title: "Whispers of the Forest",
        content: "A tribute to the whispers of the forest, where the trees seem to communicate with each other in the language of the wind."
    },
    {
        title: "Solitude",
        content: "A poetic ode to the fire's mesmerizing dance, the crackling sounds and the warmth it offers on cold nights."
    },
    {
        title: "Emotions",
        content: "A reflection on the ocean's eternal embrace, its waves crashing on the shore, bringing both calm and power."
    },
    {
        title: "City Lights",
        content: "The solitary mountain stands tall, watching over the world below, its stillness inspiring solitude and strength."
    },
    {
        title: "Morning Bliss",
        content: "A quiet moment in the meadow, where the tall grasses sway in the breeze, and the silence is filled with the gentle hum of life."
    },
    {
        title: "Ocean Waves",
        content: "A poem about the city at night, where the lights flicker like stars and the hustle and bustle never fades, even in the darkest hours."
    },
    {
        title: "Autumn Path",
        content: "A celebration of autumn, with its crisp air, the golden leaves falling, and the calm before the coming winter's chill."
    },
    {
        title: "Echoes of Time",
        content: "A reflection on the passage of time, how moments slip away like water through our fingers, leaving only echoes of memories behind."
    },
    {
        title: "The Eternal Sky",
        content: "A meditation on the vastness of the sky, how it stretches infinitely, a constant reminder of the infinite possibilities in life."
    }
];


// Show Modal with Poem Content
function showModal(index) {
    const modal = document.getElementById('poemModal');
    const poem = poems[index];
    document.getElementById('poemTitle').innerText = poem.title;
    document.getElementById('poemContent').innerText = poem.content;
    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    document.getElementById('poemModal').style.display = 'none';
}

// Share Button: Copy Link to Clipboard
function copyToClipboard() {
    const poemLink = window.location.href; // This would be the URL for the current page
    navigator.clipboard.writeText(poemLink).then(() => {
        alert("Poem link copied to clipboard!");
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}
function redirectToPoemSubmission() {
    window.location.href = "PoemSubmission.html"; // Change to your target page URL
}
function redirectToJoinOurCommunity() {
    window.location.href = "JoinOurCommunity.html"; // Change to your target page URL
}