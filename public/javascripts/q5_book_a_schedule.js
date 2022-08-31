document.addEventListener('DOMContentLoaded', () => {
  getSchedules();
  document.getElementById('schedule').onsubmit = bookSchedule;
  document.getElementById('student').onsubmit = createStudent;
});

function getSchedules() {
  let staffData = {};

  let requestStaffData = new XMLHttpRequest();
  requestStaffData.open('GET', '/api/staff_members');
  requestStaffData.responseType = 'json';

  requestStaffData.addEventListener('load', () => {
    requestStaffData.response.forEach(staff => {
      staffData[staff.id] = staff.name;
    });

    let requestSchedules = new XMLHttpRequest();
    requestSchedules.open('GET', '/api/schedules');
    requestSchedules.responseType = 'json';
    requestSchedules.addEventListener('load', () => {
      let schedules = requestSchedules.response.filter(schedule => !schedule.student_email);
      schedules.forEach(schedule => {
        let option = document.createElement('option');
        option.value = schedule.id;
        option.textContent = `${staffData[schedule.staff_id]} | ${schedule.date} | ${schedule.time}`;
        document.querySelector('form#schedule select').appendChild(option);
      });

      renderScheduleForm();
    });

    requestSchedules.send();
  });

  requestStaffData.send();
}

function renderScheduleForm() {
  document.getElementById('loading').remove();
  document.querySelector('form#schedule input[type="submit"]').removeAttribute('disabled');
  document.getElementById('schedule').style.visibility = 'visible';
}

function bookSchedule(event) {
  event.preventDefault();

  let bookScheduleRequest = new XMLHttpRequest();
  bookScheduleRequest.open('POST', event.target.action);
  bookScheduleRequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  let data = new FormData(event.target);
  let json = JSON.stringify(Object.fromEntries(data.entries()));

  bookScheduleRequest.addEventListener('load', () => {
    if (bookScheduleRequest.status === 404) {
      let sequenceMatch = bookScheduleRequest.responseText.match(/\d+/);
      if (sequenceMatch === null) return;
      renderStudentForm(sequenceMatch[0]);

      alert(bookScheduleRequest.responseText);
    } else {
      event.target.reset();
      alert('You\'re booked!');
      event.target.querySelector(`option[value="${data.get('id')}"`).remove();
    }
  });

  bookScheduleRequest.send(json);
}

function renderStudentForm(sequence) {
  document.querySelector('form#student input[type="submit"]').removeAttribute('disabled');
  document.getElementById('student').style.visibility = 'visible';
  document.querySelector('form#student input[name="booking_sequence"]').value = sequence;
}

function createStudent(event) {
  event.preventDefault();
  let createStudentRequest = new XMLHttpRequest();
  createStudentRequest.open('POST', event.target.action);
  createStudentRequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  let data = new FormData(event.target);
  let json = JSON.stringify(Object.fromEntries(data.entries()));

  createStudentRequest.addEventListener('load', () => {
    if (createStudentRequest.status >= 400) {
      alert(createStudentRequest.responseText);
    } else {
      document.querySelector('form#schedule input[name="student_email"]').value = data.get('email');
      hideStudentForm();
      alert(createStudentRequest.responseText);
      document.getElementById('schedule').dispatchEvent(new Event('submit', { cancelable: true }));
    }
  });
  createStudentRequest.send(json);
}

function hideStudentForm() {
  let form = document.getElementById('student');
  form.reset();
  form.style.visibility = 'hidden';
}