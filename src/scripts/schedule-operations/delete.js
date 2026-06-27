import { verifyEmptyMsg } from "../verify-empty-msg";

export function addEventScheduleCancel() {
    const listBtnScheduleCancel = document.querySelectorAll('.schedule-cancel');
    listBtnScheduleCancel.forEach((btn) => {
        btn.onclick = (event) => {
            event.target.closest('li').remove();
            verifyEmptyMsg();
        };
    });
};