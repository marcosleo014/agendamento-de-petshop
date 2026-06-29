import { verifyEmptyMsg } from "../verify-empty-msg";

const listScheduleMorning = document.querySelector('.morning');
const listScheduleAfternoon = document.querySelector('.afternoon');
const listScheduleNight = document.querySelector('.night');
export const listsPeriodSchedule = [listScheduleMorning, listScheduleAfternoon, listScheduleNight];

// função que insere o agendamento na página de acordo com sua data e horário
export function addScheduleElement(scheduleObj) {
    const dateFilter = document.querySelector('#schedule-date-filter').value;
    const dateSchedule = scheduleObj.date;
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

    const hourFormat = scheduleObj.hour.toString().padStart(2, '0') + ':00';
    time.innerText = hourFormat;
    strong.innerText = scheduleObj.pet;
    span.innerText = '/ ' + scheduleObj.client;
    pOut.innerText = scheduleObj.description;
    btn.dataset.id = scheduleObj.id;
    btn.classList.add('schedule-cancel');

    pIn.append(strong, span);
    div.append(time, pIn);
    article.append(div, pOut, btn);
    li.append(article);

    return li;
};