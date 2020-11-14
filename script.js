let counter = 1;
const addNewSchedule = document.getElementById('add-new-schedule');
addNewSchedule.addEventListener('click', () => {
    const scheduleDiv = document.getElementById('schedule-container')
    const newSchedule = scheduleDiv.cloneNode(true);
    newSchedule.firstElementChild.firstElementChild.value = '';
    newSchedule.children[1].children[0].children[0].lastElementChild.value = ''
    newSchedule.children[1].children[0].children[1].lastElementChild.value = ''
    newSchedule.children[1].children[2].children[0].lastElementChild.value = ''
    newSchedule.children[1].children[2].children[1].lastElementChild.value = ''

    newSchedule.id = `schedule-container${counter}`;
    document.getElementById('schedule-form').appendChild(newSchedule);
    counter++;
})

const removeSchedule = document.getElementById('remove-schedule');
removeSchedule.addEventListener('click', () => {
    counter--;

    const removeSchedule = document.getElementById(`schedule-container${counter}`);
    document.getElementById('schedule-form').removeChild(removeSchedule);

})
