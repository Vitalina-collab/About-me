const Name = document.getElementById('name');

const userName = prompt('Привет!Как тебя зовут?', 'Имя');
if (userName) {
    Name.textContent = userName;
}