document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Собираем данные формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Покажем сообщение
    const messageBox = document.getElementById('form-message');
    if (name && email && message) {
        messageBox.innerHTML = `<p>${name}! Ваше сообщение не отправлено, напишите по контактам.</p>`;
        messageBox.style.color = 'red';
    } else {
        messageBox.innerHTML = '<p>Пожалуйста, заполните все поля.</p>';
        messageBox.style.color = 'red';
    }
});