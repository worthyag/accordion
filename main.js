// Variables
let accordion = document.getElementsByClassName('content-container');
accordion = Array.from(accordion);
console.log(accordion);

accordion.forEach(item => item.addEventListener('click', displayAnswer));

function displayAnswer(e) {
    console.log(e);
    console.log(this);
    console.log(e.target);

    this.classList.toggle('active');
}