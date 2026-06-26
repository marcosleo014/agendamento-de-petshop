const form = document.querySelector('.schedule-form');

form.onsubmit = (event) => {
    event.preventDefault();
    console.log('agendamento criado!');
}