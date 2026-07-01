import { verifyEmptyMsg } from "../verify-empty-msg";
import { openScheduleForm } from '../switch-screen.js';
import { addEventScheduleCancel } from './delete.js';
import { addScheduleElement } from './create-schedules.js';
import { schedules } from "./schedules.js";
import { postSchedule } from "../api/add-schedule.js";
import { toastMsg } from "../toast-notification.js";
import { dataNow } from './inputs-value-default.js';

const form = document.querySelector('.schedule-form');

form.onsubmit = async (event) => {
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
        toastMsg('Identifique o tutor do pet');
        return
    }
    if (!pet.value.trim()) {
        pet.value = '';
        toastMsg('Insira o nome do pet');
        return
    }
    if (phone.value.length < 15) {
        toastMsg('Número de telefone inválido');
        return
    }
    if (!description.value.trim()) {
        toastMsg('Adicione a descrição do serviço');
        return
    }
    if (!hour.value) {
        toastMsg('Selecione um horário')
        return
    }

    // objeto que armazena dados do agendamento
    const scheduleObj = {
        id: Date.now().toString(),
        client: client.value.trim(),
        pet: pet.value.trim(),
        phone: phone.value,
        description: description.value.trim(),
        date: date.value,
        hour: Number(hour.value)
    };

    try {
        await postSchedule(scheduleObj);
        
        addScheduleElement(scheduleObj);
        openScheduleForm(false);
        addEventScheduleCancel();

        // reseta o form e define a data para a atual
        form.reset();
        date.value = dataNow;
        // Inserir o agendamento no array de agendamentos
        schedules.push(scheduleObj);
    } catch (error) {
        console.log(error);
    };
};