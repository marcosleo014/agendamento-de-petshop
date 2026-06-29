import { schedules } from './schedules.js';
import { addScheduleElement, listsPeriodSchedule } from './create-schedules.js';
import { addEventScheduleCancel } from './delete.js';
import { scheduleDateFilter } from './inputs-value-default.js';
import { verifyEmptyMsg } from '../verify-empty-msg.js';

scheduleDateFilter.onchange = () => attListSchedule();

export function attListSchedule() {
    listsPeriodSchedule.forEach(list => list.replaceChildren());
    schedules.forEach(scheduleObj => {
        addScheduleElement(scheduleObj);
    });
    addEventScheduleCancel();
    verifyEmptyMsg();
};