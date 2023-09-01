let input = document.getElementById('input');
let button = document.getElementById('button');
let todolist = document.getElementById('todolist');
// to easy managemnet of items in to do list we use array
//local storage we need array(saved in our computer)
let todos = [];

//when each time website is loaded it will check for existing local storage and includes tht values
//we use this to data to be retrieved in local storage
//page loaded each time this functions call
window.onload = () => { 
    
    // console.log('loaded')
    //to check storage and get those items use below
localStorage.getItem('todos')
//string nto parse json object
//parsed object store in todos or if no object retrieved store in empty array
todos = JSON.parse(localStorage.getItem('todos')) || []
console.log(todos)
//sending parsed object in this method/function to display
todos.forEach(todo =>addtodo(todo))
    

}

// enable click button and add functionality in click button
button.addEventListener('click',() => {
    // push input values in array
    todos.push(input.value);
    console.log(todos)// if we print the message the list added
    //in to do input text will vanish.so we need to save in local storage

    //to save for local storage(complete array)
    localStorage.setItem('todos',JSON.stringify(todos)) //string format using json stringify

    addtodo(input.value);// display value
    // to empty the entteres values in the text box once added
    input.value=''
    


});

//value display add another function
function addtodo(todo){
    // build para
    let para = document.createElement('p')// create para
    para.innerText = todo// para values innertext should be todo
    // to attach the above para to the given div todolist so that it will display in doc
    todolist.appendChild(para)// to append this para
    // to delte the added values in para
    

    para.addEventListener('click',()=>{
        // if clicked what to be done to be give here
        para.style.textDecoration = 'line-through'//used for strikeout
      // if the values striked to be removed in console message array as well
      remove(todo)
      
    })
    para.addEventListener('dblclick',()=>{// if we double click the value
        todolist.removeChild(para)//  the para/ value double clicked should be removed completely from the list
        remove(todo)
      
    })

    //seperate function for remove items
    function remove(todo){
        let index = todos.indexOf(todo)// store as index    
       if(index>-1)// to check if todo is in list(important check)
       todos.splice(index,1)// splice is used for delete the elemnt to be mnetined

    }
// localStorage.clear
// this will show the local storage with updated items with removed one. should be given within remove function
localStorage.setItem('todos',JSON.stringify(todos))


}