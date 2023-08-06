const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const ageButton = document.getElementById('img-button');
const p = document.querySelectorAll('.invalid-res');
const labels = document.querySelector('.labels')
// para mostrar los resultados
const showYear = document.getElementById('date-year');
const showMonth = document.getElementById('date-month');
const showDay = document.getElementById('date-day');

const invalidValue = ()=>{
    labels.style.color = 'hsl(0, 100%, 67%)'
    inputDay.style.border = '1px solid hsl(0, 100%, 67%)'
    inputMonth.style.border = '1px solid hsl(0, 100%, 67%)'
    inputYear.style.border = '1px solid hsl(0, 100%, 67%)'
}

ageButton.addEventListener('click', (e)=>{
    const fechaNacimiento = new Date(inputYear.value,inputMonth.value,inputDay.value);
    const fechaActual = new Date();
    const diferenciaMilisegundos = fechaActual - fechaNacimiento;
    //
    let edad = {};
        edad.anios = Math.floor(diferenciaMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
        edad.meses = Math.floor((diferenciaMilisegundos % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
        edad.dias = Math.floor((diferenciaMilisegundos % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    //
    if (inputDay.value === '' || inputYear.value === '' || inputMonth.value === '') {
        p.forEach(v => v.innerText = 'This field is required')
        invalidValue()
        
    }
    if (inputYear.value > fechaActual.getFullYear()) {
        document.getElementById('invalid-year').innerText = 'Must be in the past'
    }
    if (inputMonth.value < 1 || inputMonth.value > 12) {//Here there is a problem
        document.getElementById('invalid-month').innerText = 'Must be a valid month'
    }
    if (inputDay.value > 31) {
        document.getElementById('invalid-day').innerText = 'Must be a valid day'
    }
    
    if (fechaNacimiento < fechaActual && inputYear.value > 1900) {
        showYear.innerText = `${edad.anios}`
        showMonth.innerText = `${edad.meses + 1}`
        showDay.innerText = `${edad.dias}`
    } else { 
        invalidValue()
    }
})
