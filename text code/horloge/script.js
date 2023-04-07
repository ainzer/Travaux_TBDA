function runClock() {
    const date = new Date();
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
    
    const hourAngle = (hours * 30) + (minutes * 0.5);
    const minuteAngle = (minutes * 6);
    const secondAngle = (seconds * 6);
    
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
  }
  
  setInterval(runClock, 1000);
  