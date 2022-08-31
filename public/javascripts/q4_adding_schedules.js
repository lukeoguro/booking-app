document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add').onclick = addSchedule;
  document.getElementById('remove').onclick = removeSchedule;
  addSchedule();

  document.querySelector('form').onsubmit = submitForm;
});

const [addSchedule, removeSchedule] = (() => {
  let id = 1;

  function addSchedule() {
    let form = document.querySelector('form');

    let div = document.createElement('div');
    div.classList.add('schedule');
    div.style.border = '1px dotted black';

    let p = document.createElement('p');
    p.textContent = `Schedule ${id}`;
    id += 1;
    div.appendChild(p);

    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Staff Name:';
    div.appendChild(nameLabel);
    div.appendChild(document.createElement('br'));

    let select = document.createElement('select');
    select.setAttribute('name', 'staff_id');
    div.appendChild(select);
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('br'));

    let dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Date:';
    div.appendChild(dateLabel);
    div.appendChild(document.createElement('br'));

    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'text');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('placeholder', 'mm-dd-yy');
    div.appendChild(dateInput);
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('br'));

    let timeLabel = document.createElement('label');
    timeLabel.setAttribute('for', 'time');
    timeLabel.textContent = 'time:';
    div.appendChild(timeLabel);
    div.appendChild(document.createElement('br'));

    let timeInput = document.createElement('input');
    timeInput.setAttribute('type', 'text');
    timeInput.setAttribute('name', 'time');
    timeInput.setAttribute('placeholder', 'hh:mm');
    div.appendChild(timeInput);
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('br'));

    let submitBtn = document.getElementById('submit');
    submitBtn.insertAdjacentElement('beforebegin', div);

    populateStaffName(div);
  }

  function removeSchedule() {
    let schedules = document.querySelectorAll('div.schedule');
    if (schedules.length > 1) {
      let lastSchedule = schedules[schedules.length - 1];
      lastSchedule.remove();
      id -= 1;
    }
  }

  return [addSchedule, removeSchedule];
})();

function populateStaffName(div) {
  let request = new XMLHttpRequest();
  request.open('GET', '/api/staff_members');
  request.responseType = 'json';

  request.addEventListener('load', () => {
    for (let staff of request.response) {
      let option = document.createElement('option');
      option.value = staff.id;
      option.textContent = staff.name;
      div.querySelector('select').appendChild(option);
    }
  });

  request.send();
}

function submitForm(event) {
  event.preventDefault();

  let data = { "schedules": [] };
  let schedules = document.querySelectorAll('div.schedule');
  schedules.forEach(schedule => {
    let datum = {};
    datum.staff_id = schedule.querySelector(`[name='staff_id']`).value;
    datum.date = schedule.querySelector(`[name='date']`).value;
    datum.time = schedule.querySelector(`[name='time']`).value;
    data.schedules.push(datum);
  });

  let json = JSON.stringify(data);

  let request = new XMLHttpRequest();
  request.open('POST', event.target.action);
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  request.addEventListener('load', () => {
    if (request.status === 400) {
      alert(request.response);
    } else {
      let form = document.querySelector('form');
      while (true) {
        removeSchedule();
        if (document.querySelectorAll('div.schedule').length <= 1) break;
      }

      form.reset();
      alert(request.response);
    }
  });

  request.send(json);
}