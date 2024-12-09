const secondHand = document.querySelector('.clock__hand--seconds');
const minuteHand = document.querySelector('.clock__hand--minutes');
const hourHand = document.querySelector('.clock__hand--hours');

let lastSecond = 0; // Keep track of the last second to avoid the jump

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

  // Apply the rotations to the clock hands
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // Fix the jump for the seconds hand
  if (seconds === 0 && lastSecond !== 0) {
    // Reset the second hand rotation to avoid the jump when it reaches 0
    secondHand.style.transition = 'none';
    setTimeout(() => {
      secondHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }, 50); // Delay re-enabling the transition slightly
  }
  
  lastSecond = seconds;
}

// Update the clock every 1000ms (1 second)
setInterval(setTime, 1000);

// Call setTime initially to ensure the clock is set correctly when the page loads
setTime();