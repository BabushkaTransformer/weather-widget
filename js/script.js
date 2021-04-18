const parent = document.querySelector(".weather__bottom");
const btn = document.querySelector(".weather__btn");

const generateCard = (img, name, temp, info) => {
	return `
	<div class="card">
		<div class="card__img"><img src="http://openweathermap.org/img/wn/${img}@2x.png" alt=""></div>
		<div class="card__name">${name}</div>
		<div class="card__temp">${Math.round(temp - 273)}&deg;</div>
		<div class="card__info">${info}</div>
	</div>`;
};

const getWeather = () => {
	let city_name = document.querySelector(".weather__input").value;
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=0a12d033bdb59158bd99322c07452856`)
		.then((resp) => resp.json())
		.then((data) => {
			parent.insertAdjacentHTML(
				"afterbegin",
				generateCard(data.weather[0]["icon"], data.name, data.main.temp, data.weather[0]["description"])
			);
		});
};

btn.addEventListener("click", () => {
	getWeather();
	document.querySelector(".weather__input").value = "";
});
addEventListener("keydown", function (e) {
	if (e.keyCode === 13) {
		getWeather();
		document.querySelector(".weather__input").value = "";
	}
});
