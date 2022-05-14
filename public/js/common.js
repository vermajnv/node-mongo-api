document.querySelector('#deleteButton').addEventListener('click', (event) => {
    event.preventDefault();
    event.target.dataset.id;
    const endPoint = `/course/${event.target.dataset.id}`;
    console.log(endPoint);
    fetch(endPoint, {
        method : 'delete',
    })
    .then((data) => {
        return data.json();
    })
    .then((response) => {
        location.href = response.redirect;
    });
})