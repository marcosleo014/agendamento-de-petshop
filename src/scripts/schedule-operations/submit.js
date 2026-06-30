import { verifyEmptyMsg } from "../verify-empty-msg";
import { openScheduleForm } from '../switch-screen.js';
import { addEventScheduleCancel } from './delete.js';
import { addScheduleElement } from './create-schedules.js';
import { schedules } from "./schedules.js";

const form = document.querySelector('.schedule-form');

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
        id: Date.now(),
        client: client.value.trim(),
        pet: pet.value.trim(),
        phone: phone.value,
        description: description.value.trim(),
        date: date.value,
        hour: Number(hour.value)
    };
    
    addScheduleElement(scheduleObj);
    openScheduleForm(false);
    addEventScheduleCancel();

    // Inserir o agendamento no array de agendamentos
    schedules.push(scheduleObj);

    form.reset()
    date.value = scheduleObj.date;
};