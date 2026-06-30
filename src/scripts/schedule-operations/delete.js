import { verifyEmptyMsg } from "../verify-empty-msg";
import { deleteScheduleById } from "./schedules";

export function addEventScheduleCancel() {
    const listBtnScheduleCancel = document.querySelectorAll('.schedule-cancel');
    listBtnScheduleCancel.forEach((btn) => {
        btn.onclick = (event) => {
            event.target.closest('li').remove();
            const id = btn.dataset.id;
            deleteScheduleById(id);
            verifyEmptyMsg();
        };
    });
};