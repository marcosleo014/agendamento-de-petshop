import dayjs from 'dayjs';

export const scheduleDateFilter = document.querySelector('#schedule-date-filter');
const scheduleDate = document.querySelector('#date');

const dataDayjsNow = dayjs();
const dataNow = dataDayjsNow.format('YYYY-MM-DD');
const hourNow = dataDayjsNow.format('H');

scheduleDateFilter.value = dataNow;

scheduleDate.value = dataNow;
scheduleDate.min = dataNow;

scheduleDate.onchange = () => verifyHourOption();

export function verifyHourOption() {
    const scheduleDate = document.querySelector('#date');
    const scheduleListHours = document.querySelectorAll('#hour option');
    if (scheduleDate.value === dataNow) {
        scheduleListHours.forEach((hourOption) => {
            if (Number(hourOption.value) <= hourNow) {
                hourOption.disabled = true;
            }
        });
    } else {
        scheduleListHours.forEach((hourOption, index) => {
            if (index != 0) {
                hourOption.disabled = false;
            }
        });
    }
}

// tratamento da entrada do input telefone
const phone = document.querySelector('#telephone');
phone.maxLength = 15;
phone.oninput = (event) => {
    regexPhone(event.target)
}
function regexPhone(phoneElement) {
    phoneElement.value = phoneElement.value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
}