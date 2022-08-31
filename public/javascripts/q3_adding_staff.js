document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let data = new FormData(form);
    let json = JSON.stringify(Object.fromEntries(data.entries()));

    let request = new XMLHttpRequest();
    request.open('POST', form.action);
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    request.addEventListener('load', () => {
      if (request.status === 400) {
        alert(request.response);
      } else {
        let response = JSON.parse(request.response);
        alert(`Successfully created staff with id: ${response.id}`);
        form.reset();
      }
    });

    request.send(json);
  })
});