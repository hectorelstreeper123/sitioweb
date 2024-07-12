function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (!day || !month || !year) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const birthDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    const diffInMilliseconds = currentDate - birthDate;

    if (isNaN(diffInMilliseconds)) {
        alert('Por favor, ingrese una fecha válida.');
        return;
    }

    const years = currentDate.getFullYear() - birthDate.getFullYear();
    const months = currentDate.getMonth() - birthDate.getMonth() + (years * 12);
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const seconds = Math.floor(diffInMilliseconds / 1000);

    document.getElementById('result').innerHTML = `
        Tienes ${years} años, ${months} meses, ${days} días, y ${seconds} segundos de vida.
    `;
}
// Ajustar el cálculo de años si el cumpleaños aún no ha ocurrido este año
    if (
        now.getMonth() < birthdate.getMonth() ||
        (now.getMonth() === birthdate.getMonth() && now.getDate() < birthdate.getDate())
    ) {
        years--;
    }
