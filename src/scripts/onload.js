import { attListSchedule } from "./schedule-operations/att-schedules-list.js";
import { verifyHourOption } from "./schedule-operations/inputs-value-default.js";
import { loadSchedules } from "./schedule-operations/schedules.js";

window.onload = async () => {
    await loadSchedules();
    attListSchedule();
    verifyHourOption();
};