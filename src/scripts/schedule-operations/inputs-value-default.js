import dayjs from 'dayjs';

const scheduleDateFilter = document.querySelector('#schedule-date-filter');
const scheduleDate = document.querySelector('#date');

const dataDayjsNow = dayjs();
const dataNow = dataDayjsNow.format('YYYY-MM-DD');
const hourNow = dataDayjsNow.format('H');

scheduleDateFilter.value = dataNow;

scheduleDate.value = dataNow;
scheduleDate.min = dataNow;

scheduleDate.onchange = () => verifyHourOption();

function verifyHourOption() {
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

verifyHourOption();