// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const weatherIcon = document.querySelector(".weather-icon");
// const temp = document.querySelector(".temp");
// const city = document.querySelector(".city");
// const humidity = document.querySelector(".humidity");
// const wind = document.querySelector(".wind");



// button.addEventListener("click", function() {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=173a073ab55aa0c69bdc943f3f8ebec0&units=metric`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.weather[0].main);
//         if (data.weather[0].main == "Clouds"){
//             weatherIcon.src = "images/images 2/clouds.png";
//         }
//         else if(data.weather[0].main == "Clear"){
//             weatherIcon.src = "images/images 2/clear.png";
//         }
//         else if(data.weather[0].main == "Drizzle"){
//             weatherIcon.src = "images/images 2/drizzle.png";
//         }
//         else if(data.weather[0].main == "Mist"){
//             weatherIcon.src = "images/images 2/mist.png";
//         }
//         else if(data.weather[0].main == "Rain"){
//             weatherIcon.src = "images/images 2/rain.png";
//         }
//         else if(data.weather[0].main == "Snow"){
//             weatherIcon.src = "images/images 2/snow.png";
//         }
//     //   weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//     //   temp.textContent = `${data.main.temp}°C`;
//       city.textContent = data.name;
//       const roundedTemp = Math.round(data.main.temp);
//       temp.textContent = `${roundedTemp}°C`;
//       humidity.textContent = `${data.main.humidity}%`;
//       wind.textContent = `${data.wind.speed} km/h`;
   
//     })
//     .catch(error => console.error(error))
// })

// // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Cologne}&appid=${bd85a1490cb3c45483afaceba053b60d
// // }&units=metric`)
// //   .then(response => response.json())
// //   .then(data => {
// //     const weatherConditions = data.weather.map(condition => condition.main); // Get an array of all weather conditions
// //     if (weatherConditions.includes("Clouds")) {
// //       console.log("The weather is cloudy");
// //     }
// //     if (weatherConditions.includes("Rain")) {
// //       console.log("The weather is rainy");
// //     }
// //   })
// //   .catch(error => console.error(error));




