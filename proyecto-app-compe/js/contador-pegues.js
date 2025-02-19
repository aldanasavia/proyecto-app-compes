let counter = 0;

document.getElementById('incrementar-pegues').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').textContent = counter;
});

document.getElementById('btnTop').addEventListener('click', () => {
    document.getElementById('displayTop').textContent = counter;
});

document.getElementById('btnZona').addEventListener('click', () => {
    document.getElementById('displayZona').textContent = counter;
});