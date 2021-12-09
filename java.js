let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "second delectus aut autem",
    "completed": false
  }]

// Function to fetch all to dos
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

// Function to see the returned objects in the console
const logTodos = () => {
    console.log(arrayOfTodos)
  }

// Function to populate the ordered list with the to dos
const populateTodos = () => {
    //Capture the ol item into a variable (getElementById)
    let todoList = document.getElementById('todo-list');

    for (i=0; i < arrayOfTodos.length; i++) {

      //createText inside the li using the title property.
      // use createTextNode
      todoTitle = document.createTextNode(arrayOfTodos[i].title);
        
        //createElement to make a new LI
        let todoItem = document.createElement("LI");
            if (arrayOfTodos[i].completed) {
                // add a class to the li to make text green
                todoItem.classList.add("istrue");
            } else {
                todoItem.classList.add("isfalse");
            }

        //Now append the text to the new element
        todoItem.appendChild(todoTitle);

        //Then append the element to the ol element.
        todoList.appendChild(todoItem);

    } // end of for loop
} // end of function

const filterTodos = () => {

  // Capture the ol item into a variable (getElementById)
  let todoList = document.getElementById("todo-list");

  // Get the userID number from the input field in the html form
  const num = document.getElementById("number_input").value;

  // Filter the array 
  const arrayFilter = arrayOfTodos.filter(array => array.userId == num);

  //Loop through and display the results -- just like populateTodos
  for (let i = 0; i < arrayFilter.length; i++) {
    let todoItem = document.createElement("LI");

    // Uncomment the list item you want to display: Just the title, or a concatenated string with the User Id, Title, and Completed status
    //todoItem.innerHTML = arrayFilter[i].title;
    todoItem.innerHTML = "<b>User:</b> " + arrayFilter[i].userId + ",  <b>Title:</b> " + arrayFilter[i].title + ",  <b>Completed:</b> " + arrayFilter[i].completed;
    
    todoList.appendChild(todoItem);
  }
}

const completedTodos = () => {
  // Capture the ol item into a variable (getElementById)
  let todoList = document.getElementById("todo-list");

  // Filter the array 
  const arrayFilter = arrayOfTodos.filter(array => array.completed === true);

  //Loop through and display the results -- just like populateTodos
  for (let i = 0; i < arrayFilter.length; i++) {
    let todoItem = document.createElement("LI");

    // Uncomment the list item you want to display: Just the title, or a concatenated string with the User Id, Title, and Completed status
    //todoItem.innerHTML = arrayFilter[i].title;
    todoItem.innerHTML = "<b>User:</b> " + arrayFilter[i].userId + ",  <b>Title:</b> " + arrayFilter[i].title + ",  <b>Completed:</b> " + arrayFilter[i].completed;
    
    todoList.appendChild(todoItem);
  }
}

// Same function as completedTodos except array.completed === false
const notCompletedTodos = () => {
  // Capture the ol item into a variable (getElementById)
  let todoList = document.getElementById("todo-list");

  // Filter the array 
  const arrayFilter = arrayOfTodos.filter(array => array.completed === false);

  //Loop through and display the results -- just like populateTodos
  for (let i = 0; i < arrayFilter.length; i++) {
    let todoItem = document.createElement("LI");

    // Uncomment the list item you want to display: Just the title, or a concatenated string with the User Id, Title, and Completed status
    //todoItem.innerHTML = arrayFilter[i].title;
    todoItem.innerHTML = "<b>User:</b> " + arrayFilter[i].userId + ",  <b>Title:</b> " + arrayFilter[i].title + ",  <b>Completed:</b> " + arrayFilter[i].completed;
    
    todoList.appendChild(todoItem);
  }
}

const resetToDos = () => {
 
  // I want to get rid of the whole list, so I target the <ol> tag
  const listItems = document.getElementsByTagName("OL")

  // Loop through the list items and set the innerHTML to null
  for (i=0; i < listItems.length; i++) {
    listItems[i].innerHTML = null
  } 

}