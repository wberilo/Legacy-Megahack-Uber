
const createDiv = (className) => {
    const div = document.createElement('div');
    div.className = className;

    return div;
};

const createAdressInput = (text, inputId, divClass, spanClass) => {
    const div = createDiv(divClass);

    
    const input = codument.createElement('input');
    input.type = 'text';
    input.className = 'input-address';
    input.id = inputId;
    
    const span = document.createElement('span');
    span.className = spanClass;

    const label = document.createElement('label');
    label.htmlFor = inputId;
    label.appendChild(text);
    label.appendChild(span);

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

const createAdressContainer = () => {
    const div = createDiv("address-container");

    const startPointDiv = createAdressContainer('Ponto inicial', "start-point-address", "start-address-wrapper", "start-point-square");
    const endPointDiv = createAdressContainer('Ponto final', "end-point-address", "end-address-wrapper", "end-point-square");

    div.appendChild(startPointDiv);
    div.appendChild(endPointDiv);

    return div;
}

const createCalendarInput = () => {
    const calendar = document.createElement('input');
    const calendarWrapper = createDiv("calendar-wrapper");
    calendar.type = 'date';
    calendarWrapper.appendChild(calendar);
    return calendarWrapper;
}

const createNewSchedule = () => {
    const scheduleDiv = createDiv("schedule-container");
    const calendarWrapper = createCalendarInput();
    const adressContainer = createAdressContainer();

    scheduleDiv.appendChild(calendarWrapper);
    scheduleDiv.appendChild(adressContainer);

    return scheduleDiv;
}

const addNewSchedule = document.getElementById('add-new-schedule');
addNewSchedule.addEventListener('click', () => {
    const scheduleDiv = document.getElementById('schedule-container')
    const newSchedule = scheduleDiv.cloneNode();
    console.log(newSchedule);
})
