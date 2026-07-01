import { verifyEmptyMsg } from "../verify-empty-msg";
import { deleteScheduleById } from "./schedules";

export async function addEventScheduleCancel() {
    const listBtnScheduleCancel = document.querySelectorAll('.schedule-cancel');
    listBtnScheduleCancel.forEach((btn) => {
        btn.onclick = async (event) => {
            try {
                const id = btn.dataset.id;
                await deleteScheduleById(id);
                event.target.closest('li').remove();
                verifyEmptyMsg();
            } catch (error) {
                console.log(error)
            }
        };
    });
};