const timer = document.getElementById('timer');
let time = 0;

setInterval(() => {
    time++;
    timer.innerHTML = `<p style="font-size: 2em;">You are watching nothing for </p>
   <h1 style="font-size: 5em; color:red">${time}</h1> 
   <p style="font-size: 2em;">seconds</p>`;
    sessionStorage.setItem('watchTime', time);
}, 1000);