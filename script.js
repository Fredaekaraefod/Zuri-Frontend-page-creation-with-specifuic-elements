function updateTime() {
    const now = new Date();
    const currentUTC = now.getTime(); // Get the current time in milliseconds

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Today is ${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][now.getUTCDay()]}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `UTC Time (in milliseconds): ${currentUTC}`;
}

// Update time initially
updateTime();

// Update time every second
setInterval(updateTime, 1000);
