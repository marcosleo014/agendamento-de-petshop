import { verifyEmptyMsg } from "./verify-empty-msg";

const form = document.querySelector('.schedule-form');
const listScheduleMorning = document.querySelector('.morning')
const listScheduleAfternoon = document.querySelector('.afternoon')
const listScheduleNight = document.querySelector('.night')

form.onsubmit = (event) => {
    event.preventDefault();
    
    // obtendo os elemento do DOM
    const client = document.querySelector('#name-client');
    const pet = document.querySelector('#name-pet');
    const phone = document.querySelector('#telephone');
    const description = document.querySelector('#service-description');
    const date = document.querySelector('#date');
    const hour = document.querySelector('#hour');

    // Tratando os valores dos inputs
    if (!client.value.trim()) {
        client.value = '';
        return alert('Identifique o tutor do pet');
    }
    if (!pet.value.trim()) {
        pet.value = '';
        return alert('Insira o nome do pet');
    }
    if (phone.value.length < 15) {
        return alert('Insira o número de telefone válido');
    }
    if (!description.value.trim()) {
        return alert('Insira a descrição do serviço');
    }
    if (!hour.value) {
        return alert('Selecione um horário')
    }

    // objeto que armazena dados do agendamento
    const scheduleObj = {
        client: client.value.trim(),
        pet: pet.value.trim(),
        phone: phone.value,
        description: description.value.trim(),
        date: date.value,
        hour: Number(hour.value)
    };
    
    addScheduleElement(scheduleObj);
    
    form.reset()
    date.value = scheduleObj.date;
};

// função que insere o agendamento na página de acordo com sua data e horário
function addScheduleElement(scheduleObj) {
    const dateFilter = document.querySelector('#schedule-date-filter').value;
    const dateSchedule = document.querySelector('#date').value;
    const stop = dateFilter !== dateSchedule ? true : false;
    console.log(dateFilter , 'vs.', dateSchedule)
    if (stop) {
        return;
    };
    const schedule = createScheduleElement(scheduleObj);
    const hour = scheduleObj.hour;

    if (hour < 13) {
        listScheduleMorning.append(schedule);
    } else if (hour > 18) {
        listScheduleNight.append(schedule);
    } else if (13 < hour < 18) {
        listScheduleAfternoon.append(schedule);
    }
    verifyEmptyMsg();
}

// função que recebe o objeto com info do agendamento e retorna o elemento HTML
function createScheduleElement(scheduleObj) {
    const li = document.createElement('li');
    const article = document.createElement('article');
    const div = document.createElement('div');
    const time = document.createElement('time');
    const pIn = document.createElement('p');
    const strong = document.createElement('strong');
    const span = document.createElement('span');
    const pOut = document.createElement('p');
    const btn = document.createElement('button');

    time.innerText = scheduleObj.hour + ':00';
    strong.innerText = scheduleObj.pet;
    span.innerText = '/ ' + scheduleObj.client;
    pOut.innerText = scheduleObj.description;

    pIn.append(strong, span);
    div.append(time, pIn);
    article.append(div, pOut, btn);
    li.append(article);

    return li;
};

// tratamento da entrada do input telefone
const phone = document.querySelector('#telephone');
phone.maxLength = 15;
phone.oninput = (event) => {
    regexPhone(event.target)
}
function regexPhone(phoneElement) {
    phoneElement.value = phoneElement.value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
}