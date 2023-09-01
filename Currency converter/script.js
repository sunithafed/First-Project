
fetch('https://api.frankfurter.app/currencies')// to fetch currencies in api will return a promise// api call
.then(res=>res.json())// result .then into json
.then(res=>displayDropDown(res))// this then recievs json format result json result into method

let select = document.querySelectorAll('.currency')//pulls out currency class element
let btn = document.getElementById('btn')// to get button elemnt
let input = document.getElementById('input')// currency input

function displayDropDown(res){// to convert currencies object in array
  //console.log(Object.entries(res)[2][0])
  let curr = Object.entries(res)// the array values recived in ccy variable
  //(looping)
  for(let i=0;i<curr.length;i++){
    //console.log(Object.entries(res)[2][0])
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML += opt// to list all currencies adding all 
    select[1].innerHTML += opt
  }
}
// click event for conversion
btn.addEventListener('click',()=>{
  let curr1 = select[0].value
  let curr2 = select[1].value
  let inputVal = input.value
  if(curr1===curr2)// to check if curr is same and set alert
    alert("Choose different currencies")
  else
    convert(curr1,curr2,inputVal)
});
//conversion function code in google
function convert(curr1,curr2,inputVal){
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)// give variables
  .then(resp => resp.json())//json convert//
  .then((data) => {
    document.getElementById('result').value = Object.values(data.rates)[0]
  });

}