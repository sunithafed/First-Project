// let ampm = document.getElementById('ampm');

// // This function is used to display time continuously by fetching data
// function displayTime() {
//   let dateTime = new Date();
//   let hr = dateTime.getHours();
// //   let ampm = hours >= 12 ? 'PM' : 'AM';
// //   hours = hours % 12 || 12; // use 12 instead of 0 when hours is 0
//   let min = padZero(dateTime.getMinutes());
//   let sec = padZero(dateTime.getSeconds());

//   if(hr>12){
//     hr = hr - 12
//     ampm.innerHTML = 'PM'
// }
//     // document.getElementById('sun-symbol').style.display = 'none'; // hide sun symbol in PM
//     // document.getElementById('moon-symbol').style.display = 'inline'; // show moon symbol in PM
//     // body.style.backgroundColor = '#FF3CAC';
//     // body.style.backgroundImage = 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)';
 
//     // document.getElementById('sun-symbol').style.display = 'inline'; // show sun symbol in AM
//     // document.getElementById('moon-symbol').style.display = 'none'; // hide moon symbol in AM
//     // body.style.backgroundColor = '#74EBD5';
//     // body.style.backgroundImage = 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)';

//     // Set background gradient for AM time
  

//   // if (hours >= 19 || hours < 4) { // display moon from 7 PM to 4 AM
//   //     document.getElementById('sun-symbol').style.display = 'none';
//   //     document.getElementById('moon-symbol').style.display = 'inline';
//   // } else if (hours >= 4 && hours < 19) { // display sun from 4:01 AM to 6:59 PM
//   //     document.getElementById('sun-symbol').style.display = 'inline';
//   //     document.getElementById('moon-symbol').style.display = 'none';
//   // }

//   document.getElementById('hours').innerHTML = padZero(hours);
//   document.getElementById('mins').innerHTML = min;
//   document.getElementById('seconds').innerHTML = sec;
//   ampm.innerHTML = ampm;
// }

// // We need to set interval of displaying up-to-date time by giving duration in milliseconds
// setInterval(displayTime, 500);

// // If second in single digit it should be given 0 in beginning for better view
// function padZero(num) {
//   return num < 10 ? "0" + num : num;
// }

// function displayDate() {
//   let dateTime = new Date();
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   let day = days[dateTime.getDay()];
//   let date = dateTime.getDate();
//   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   let month = months[dateTime.getMonth()];
//   let year = dateTime.getFullYear();
//   document.getElementById('date').innerHTML = `${date} ${month} ${year} ${day}`;
// }

// // Call the displayDate() function initially and every 24 hours (86400000 milliseconds)
// displayDate();
// setInterval(displayDate, 86400000);
let ampm = document.getElementById('ampm')
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());
    if(hr>12){
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }
       
    document.getElementById('hours').innerHTML = padZero(hr)
    document.getElementById('mins').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime,500)
function displayDate() {
      let dateTime = new Date();
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[dateTime.getDay()];
      let date = dateTime.getDate();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let month = months[dateTime.getMonth()];
      let year = dateTime.getFullYear();
      document.getElementById('date').innerHTML = `${date} ${month} ${year} ${day}`;
    }
    
    // // Call the displayDate() function initially and every 24 hours (86400000 milliseconds)
    displayDate();
    setInterval(displayDate, 86400000);