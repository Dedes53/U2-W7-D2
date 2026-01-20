const form = document.getElementById('form');
const cancel = document.getElementById('cancel');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const id = document.getElementById('id'); // riferimento al campo input
    const user = id.value; // leggiamo e assegnamo il valore del campo input ad una variabile

    sessionStorage.setItem("user", user); // salviamo il valore del campo input come variabile nel sessionStorage
});