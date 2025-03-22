const input = document.getElementById('input');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const resultimg = document.getElementById('resultimg');
const countryname = document.getElementById('countryname');
const maxmin = document.getElementById('maxmin');
const day = document.getElementById('day');
const div = document.getElementById('div');
const searchingspace = document.getElementById('searchingspace');

const date = new Date;
console.log(date)

const monthName = date.toLocaleString('en-US', { month: 'long' });

day.textContent = `${monthName}, ${date.getDay()}`;

async function getInfo() {
    const value = input.value;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=a263900027ce1a4600a0cb5d3707996b`)
        const data = await response.json();
        console.log(data);

        result.textContent = Math.round(data.main.temp - 273.15) + '°';
        countryname.textContent = data.name;
        maxmin.textContent = 'Max: ' + Math.round(data.main.temp_max - 273.15) + '°  Min: ' + Math.round(data.main.temp_min - 273.15) + '°';

        if (data.weather[0].description === 'clear sky') {
            resultimg.src = 'img/sun.png';
            resultimg.style.display = 'block';
            div.style.background = 'linear-gradient(180deg, #A1C4FD 0%, #C2E9FB 50%, #FCE38A 100%)'
            searchingspace.style.background = 'linear-gradient(229.56deg, #A1C4FD 0%, #C2E9FB 50%, #FCE38A 100%)'

        } else if (data.weather[0].description === 'broken clouds') {
            resultimg.src = 'img/clouds.png';
            resultimg.style.display = 'block';
                        div.style.background = 'linear-gradient(180deg, #3E2D8F 26.99%, rgba(157, 82, 172, 0.7) 95.21%)'
            searchingspace.style.background = 'linear-gradient(229.56deg, #3E2D8F 26.99%, rgba(157, 82, 172, 0.7) 95.21%)'
        }
    }
    catch(error) {
        console.log(error)
    }
}

submit.addEventListener('click', getInfo);