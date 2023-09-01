const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday")

// function calculateAge(){console.log("clicked");
// }
function calculateAge() {
    const birthdayValue = birthdayEl.value;
console.log (birthdayValue);
if (birthdayValue === ""){
    alert("please enter your birthday")
}else{
    const age = getAge(birthdayValue)
    console.log(age);
}

}
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    console.log(age);
    // console.log(birthdayDate.getFullYear());
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if(month <0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--
    }
}return age;

// // if (birthdayValue === ""){alert("please enter your birthday")
// // }
btnEl. addEventListener("click", calculateAge)