// setTimer()

function setTimer() {
  // Set the date we're counting down to
  let countDown = new Date();
  countDown.setHours(countDown.getHours() + 1);
  // Update the count down every 1 second
  let timer = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = countDown - now;
    // Time calculations for hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById('operation-timer').innerHTML = hours.toLocaleString(undefined,{minimumIntegerDigits: 2}) + ':'
    + minutes.toLocaleString(undefined,{minimumIntegerDigits: 2}) + ':' + seconds.toLocaleString(undefined,{minimumIntegerDigits: 2});
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(timer);
    }
  }, 1000);
}
