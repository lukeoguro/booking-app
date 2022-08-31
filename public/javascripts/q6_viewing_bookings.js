document.addEventListener('DOMContentLoaded', () => {
  listDates();
});

function listDates() {
  let datesRequest = new XMLHttpRequest();
  datesRequest.open('GET', '/api/bookings');
  datesRequest.responseType = 'json';

  datesRequest.addEventListener('load', () => {
    let dates = datesRequest.response;


    dates.forEach(date => {
      let li = document.createElement('li');
      li.textContent = date;
      li.classList.add('date');
      document.getElementById('dates').appendChild(li);

      listBookings(date, li);
    });
  });

  datesRequest.send();
}

function listBookings(date, previousSibling) {
  let bookingsRequest = new XMLHttpRequest();
  bookingsRequest.open('GET', `/api/bookings/${date}`);
  bookingsRequest.responseType = 'json';

  bookingsRequest.addEventListener('load', () => {
    let ul = document.createElement('ul');
    ul.classList.add('bookings', 'hidden');

    bookingsRequest.response.forEach(booking => {
      let li = document.createElement('li');
      li.textContent = booking.join(' | ');
      ul.appendChild(li);
    });

    previousSibling.insertAdjacentElement('afterend', ul);
  });

  bookingsRequest.send();
}

document.addEventListener('click', (event) => {
  if (event.target.matches('li.date')) {
    event.target.nextSibling.classList.toggle('hidden');
  }
});