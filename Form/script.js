const form = document.getElementById('form');
const cancel = document.getElementById('cancel');
const savedUser = "user";
const userList = document.getElementById('previousList');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const id = document.getElementById('id'); // riferimento al campo input
    const user = id.value; // leggiamo e assegnamo il valore del campo input ad una variabile

    sessionStorage.setItem(savedUser, user); // salviamo il valore del campo input come variabile nel sessionStorage

    form.reset(); // resettiamo il form
});

cancel.addEventListener('click', function () {
    sessionStorage.removeItem(savedUser);
})

const previousUser = function () {

    const previously = sessionStorage.getItem(savedUser) // leggiamo il valore salvato nel sessionStorage
    const liUser = document.createElement("li");

    if (previously === null) {

    }

    userList.appendChild(liUser);
}