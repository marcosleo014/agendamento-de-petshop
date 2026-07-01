import { toastMsg } from "../toast-notification";
import { apiConfig } from "./api-configurations";

export async function postSchedule(scheduleObj) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(scheduleObj)
        });
        toastMsg('Agendamento realizado com sucesso!')
    } catch (error) {
        console.log(error);
        toastMsg('Erro ao realizar o agendamento!');
        throw error
    };
};