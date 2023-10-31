//your JS code here. If required.
 function updateTimer() {
      const timerElement = document.getElementById('timer');
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString(); // Get current date and time in a formatted string
      timerElement.textContent = formattedDate; // Update the content of the 'timer' element
    }

    // Call updateTimer initially to show the time immediately
    updateTimer();

    // Set an interval to update the timer every second (1000 milliseconds)
    setInterval(updateTimer, 1000);