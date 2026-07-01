import { toastMsg } from "../toast-notification";
import { apiConfig } from "./api-configurations";

export async function deleteSchedule(id) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: 'DELETE'
        });
        toastMsg('Agendamento cancelado!')
    } catch (error) {
        console.log(error);
        toastMsg('Erro ao cancelar o agendamento!');
        throw error
    }
};