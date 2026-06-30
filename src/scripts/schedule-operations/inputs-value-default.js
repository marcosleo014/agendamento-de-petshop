import dayjs from 'dayjs';
import { schedules } from './schedules.js';

export const scheduleDateFilter = document.querySelector('#schedule-date-filter');
const scheduleDate = document.querySelector('#date');

const dataDayjsNow = dayjs();
const dataNow = dataDayjsNow.format('YYYY-MM-DD');
const hourNow = dataDayjsNow.format('H');
const scheduleListHours = document.querySelectorAll('#hour option');

scheduleDateFilter.value = dataNow;

scheduleDate.value = dataNow;
scheduleDate.min = dataNow;

scheduleDate.onchange = () => verifyHourOption();

export function verifyHourOption() {
    const scheduleDate = document.querySelector('#date');
    scheduleListHours.forEach(hourOption => {
        if (scheduleDate.value === dataNow && Number(hourOption.value) <= hourNow) {
            hourOption.disabled = true;
        } else if (checkAvailabilityHour(hourOption.value, scheduleDate.value)) {
            hourOption.disabled = true;
            console.log(hourOption)
        } else {
            hourOption.disabled = false;
        };
    });
    // desativar o option que assume o valor default
    scheduleListHours[0].disabled = true;
};

// função que verifica a disponibilidade de horário para o data do form
function checkAvailabilityHour(hour, date) {
    return schedules.some(schedule => schedule.date === date && schedule.hour === Number(hour));
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