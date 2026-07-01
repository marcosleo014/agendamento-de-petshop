import { toastMsg } from '../toast-notification.js';
import { apiConfig } from './api-configurations.js';

export async function getSchedules() {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
        toastMsg('Erro ao se conectar com o servidor!')
        throw error
    };
};