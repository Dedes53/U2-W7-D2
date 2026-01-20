const timer = document.getElementById('timer');
let time = 0;

setInterval(() => {
    time++; //incremento il time di uno ad ogni esecuzione
    timer.innerHTML =
        `<p style="font-size: 2em;">You are watching <b>nothing</b> for </p>
        <h1 style="font-size: 5em; color:red">${time}</h1> 
        <p style="font-size: 2em;">seconds</p>`;
    sessionStorage.setItem('watchTime', time); // salvo il tempo che trascorre nel sessionStorage 
}, 1000); // setto l'eseuzione ad ogni secondo (1000 ms)