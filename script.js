const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '152fd748femsh4a08ddf44e7ffcdp176790jsn261a7cc12024',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather =(city)=>{

cityName.innerHTML=city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response=>response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.temp
		feels_like.innerHTML=response.feels_like
		humidity.innerHTML=response.humidity
		max_temp.innerHTML=response.max_temp
		min_temp.innerHTML=response.min_temp
		wind_speed.innerHTML=response.wind_speed
		wind_degrees.innerHTML=response.wind_degrees
		sunrise.innerHTML=response.sunrise
		sunset.innerHTML=response.sunset
		
		c.innerHTML=response.cloud_pct
		t.innerHTML=response.temp
		f.innerHTML=response.feels_like
		h.innerHTML=response.humidity
		m.innerHTML=response.max_temp
		mi.innerHTML=response.min_temp
		w.innerHTML=response.wind_speed
		wi.innerHTML=response.wind_degrees
		s.innerHTML=response.sunrise
		sun.innerHTML=response.sunset
	})
	.catch(err=>console.error(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")