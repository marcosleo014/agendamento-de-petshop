function verifyEmptyMsg() {
    const scheduleListsDOM = document.querySelectorAll('.schedule-list');
    scheduleListsDOM.forEach((list) => {
        const emptyMsg = list.previousElementSibling;
        if (list.children.length == 0) {
            list.hidden = true;
            emptyMsg.hidden = false;
        } else {
            list.hidden = false;
            emptyMsg.hidden = true;
        };
    });
};

verifyEmptyMsg();