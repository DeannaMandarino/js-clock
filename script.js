function setTime() {
  const now = new Date();

  // Get the current second, minute, and hour values
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate degrees for each hand
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90 + (seconds / 60) * 6; //ensures the minute hand moves smoothly as the seconds pass
  const hoursDegrees = ((hours % 12) / 12) * 360 + 90 + (minutes / 60) * 30; //ensures the hour hand moves gradually as minutes pass
}

// Update the clock every 1000ms (1 second)
setInterval(setTime, 1000);

// Call setTime initially to ensure the clock is set correctly when the page loads
setTime();