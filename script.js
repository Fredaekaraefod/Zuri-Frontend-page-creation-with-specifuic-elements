function updateTime() {
    const now = new Date();
    const currentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][now.getUTCDay()];
    const currentUTC = now.toISOString().split('T')[1].split('.')[0];

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Today is ${currentDay}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `UTC Time: ${currentUTC}`;
}

// Update time initially
updateTime();

// Update time every second
setInterval(updateTime, 1000);
