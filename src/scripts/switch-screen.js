const scheduleDOM = document.querySelector('.schedule');
const scheduleFormContainer = document.querySelector('.schedule-form-container');
const backgroundFormContainer = document.querySelector('.background');
const btnOpenScheduleForm = document.querySelector('.open-schedule-form');
const btnCloseScheduleForm = document.querySelector('.close-schedule-form');

btnCloseScheduleForm.onclick = () => {
    openScheduleForm(false);
}

btnOpenScheduleForm.onclick = () => {
    openScheduleForm(true);
}

scheduleFormContainer.onclick = () => {
    console.log('clicou pra sair')
}

export function openScheduleForm(bool) {
    if (bool) {
        scheduleDOM.classList.add('blur');
    } else {
        scheduleDOM.classList.remove('blur');
    }
    scheduleFormContainer.hidden = !bool;
    backgroundFormContainer.hidden = !bool;
    btnOpenScheduleForm.hidden = bool;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}