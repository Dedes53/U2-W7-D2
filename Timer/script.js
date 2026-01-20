const timer = document.getElementById('timer');
const savedTime = "savedTime";
let time = 0;

// verifichiamo se ci sia o meno del tempo già trasorso, se si lo impostiamo come base da cui partire

if (sessionStorage.getItem(savedTime) === null) { time = 0; }
else {
    time = isNaN(parseInt(sessionStorage.getItem(savedTime))) ? 0 : parseInt(sessionStorage.getItem(savedTime));
}



setInterval(() => {
    time++; //incremento il time di uno ad ogni esecuzione
    timer.innerHTML =
        `<p style="font-size: 2em;">You are watching <b>nothing</b> for </p>
        <h1 style="font-size: 5em; color:red">${time}</h1> 
        <p style="font-size: 2em;">seconds</p>`;
    sessionStorage.setItem(savedTime, time); // salvo il tempo che trascorre nel sessionStorage 
}, 1000); // setto l'eseuzione ad ogni secondo (1000 ms)