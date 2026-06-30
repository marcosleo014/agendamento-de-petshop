export let schedules = [
    // {
    //     id: 2135465465,
    //     client: 'Marcos Leonan',
    //     pet: 'Meau',
    //     phone: '(86) 99538-6030',
    //     description: 'mata essa porra',
    //     date: '2026-07-01',
    //     hour: 19
    // }
];

export function deleteScheduleById(id) {
    schedules = schedules.filter(scheduleObj => scheduleObj.id != id);
};