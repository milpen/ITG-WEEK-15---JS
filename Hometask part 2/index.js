const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
const temperatures = [];

const citiesList = document.getElementById('cities');

for (let i = 0; i < cities.length; i++) {
    const temperatureInput = prompt(`Введите температуру для ${cities[i]}`);
    temperatures.push(Number(temperatureInput));
    const cityTemp = document.createElement('li');
    cityTemp.textContent = `Температура в городе ${cities[i]}: ${temperatureInput} °С`;
    citiesList.append(cityTemp);
};

const min = Math.min.apply(null, temperatures);
const max = Math.max.apply(null, temperatures);

const maxTemp = document.createElement('p');
maxTemp.textContent = `Максимальная температура: ${max}°С`;
maxTemp.classList.add('list');
citiesList.after(maxTemp);

const minTemp = document.createElement('p');
minTemp.textContent = `Минимальная температура: ${min}°С`;
minTemp.classList.add('list');
citiesList.after(minTemp);