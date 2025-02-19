// 🎵 Auto-Play Background Music (Muted Initially)
document.addEventListener("DOMContentLoaded", function () {
    let bgMusic = document.getElementById("bgMusic");
    bgMusic.volume = 0.5;
    setTimeout(() => bgMusic.play(), 1000);
});

// 🎀 Countdown Timer to June 6, 2025
function updateCountdown() {
    let eventDate = new Date("June 6, 2025 00:00:00");
    let now = new Date();
    let difference = eventDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = `${days} days left!`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 🎀 Predefined Messages Mapped to Exact Dates
const messageSchedule = {
    "2025-02-01": "🌸 February has begun, and so has the countdown to your special day! ☀️",
    "2025-02-02": "🎀 You're amazing, and today is proof of that! 💖",
    "2025-02-03": "💌 Just a reminder: You bring joy wherever you go! ✨",
    "2025-02-04": "🎶 If kindness was a song, you'd be the perfect melody. 🎼",
    "2025-02-05": "🥰 You make ordinary days extraordinary!",
    "2025-02-06": "🍰 You're sweeter than any dessert! 🎂",
    "2025-02-07": "🎇 You sparkle brighter than fireworks! ✨",
    // Add more messages until June 6, 2025
};

// 🎀 Show Daily Message
function getTodaysMessage() {
    const today = new Date().toISOString().split('T')[0];
    return messageSchedule[today] || "🎉 No new message today, but you're still amazing! 🎊";
}

document.getElementById("unlockMessage").addEventListener("click", function() {
    let message = getTodaysMessage();
    document.getElementById("dailyMessage").textContent = message;
    localStorage.setItem("lastUnlockedMessage", message);
});

// 🎀 Preserve Message After Refresh
const lastMessage = localStorage.getItem("lastUnlockedMessage");
if (lastMessage) {
    document.getElementById("dailyMessage").textContent = lastMessage;
}

// 🎀 Change Themes
const themes = ["coquette", "dark", "pastel"];
const themeSelector = document.getElementById("themeSelector");

function applyTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("selectedTheme", theme);
}

// 🎀 Auto-Change Theme Daily + Allow Custom Selection
function setDailyTheme() {
    let today = new Date().getDate() % themes.length;
    let defaultTheme = themes[today];

    let savedTheme = localStorage.getItem("selectedTheme") || defaultTheme;
    applyTheme(savedTheme);
}

themeSelector.addEventListener("change", function () {
    applyTheme(themeSelector.value);
});

setDailyTheme();

// 🎥 Play Video in Fullscreen on a Random Day
const randomDate = "2025-03-15"; // Change this to a random date
const today = new Date().toISOString().split('T')[0];

if (today === randomDate) {
    let video = document.getElementById("surpriseVideo");
    video.classList.remove("hidden");
    video.requestFullscreen();
    video.play();
}