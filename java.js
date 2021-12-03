    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

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
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)

    }    
    const populateTodos = () => {
    let todoList = document.getElementById('todo-list');
    
    for (i=0; i < arrayOfTodos.length; i++) {
    todoTitle = document.createTextNode(arrayOfTodos[i].title);
    let todoItem  = document.createElement("LI");
        todoItem.appendChild(todoTitle);
        todoList.appendChild(todoItem);
    }
    }