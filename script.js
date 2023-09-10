// Get the current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

// Display the current day of the week
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
currentDayElement.textContent = `Current Day: ${currentDayOfWeek}`;

// Display the current UTC time in milliseconds
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
currentUTCTimeElement.textContent = `Current UTC Time: ${currentDate.getTime()}`;

// Update the track dynamically
const trackElement = document.querySelector('[data-testid="myTrack"]');
trackElement.textContent = 'Frontend Development';