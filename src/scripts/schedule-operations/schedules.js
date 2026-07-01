import { deleteSchedule } from "../api/delete-schedule";
import { getSchedules } from "../api/get-schedules";
import { toastMsg } from "../toast-notification";

export let schedules;

export async function loadSchedules() {
    try {
        schedules = await getSchedules();
    } catch (error) {
        schedules = [];
        console.log(error);
        toastMsg('Erro ao obter agendamentos!')
    }
};

export async function deleteScheduleById(id) {
    try {
        await deleteSchedule(id);
        schedules = schedules.filter(scheduleObj => scheduleObj.id != id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};