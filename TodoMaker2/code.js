const mainTodo = document.querySelector(".todo-list-element")
const inputValue = document.querySelector('#inputValue')

const getTodoList = () => {
    return JSON.parse(localStorage.getItem('TodoList'))
}

const addTodoListLocalStorage=(localTodoList)=>{
    return localStorage.setItem('TodoList',JSON.stringify(localTodoList))
}

let localTodoList = getTodoList() || []

const addTodoDynamicElement = (curElem) => {
    const divElement = document.createElement('div');
    divElement.classList.add('main-todo-div');
    divElement.innerHTML = `<li>${curElem}</li> <button class="dltBtn">Delete</button>`;
    mainTodo.append(divElement);
}

const addTodoList = (e) => {
    e.preventDefault();

    const todoListValue = inputValue.value.trim();

    inputValue.value=""

    if (todoListValue != "" && !localTodoList.includes(todoListValue)) {

        localTodoList.push(todoListValue)
        localTodoList = [...new Set(localTodoList)]
        console.log(localTodoList);
        localStorage.setItem('TodoList', JSON.stringify(localTodoList))

        addTodoDynamicElement(todoListValue)
    }
}

    const showTodoList = () => {
        console.log(localTodoList);

        localTodoList.forEach((curElem) => {
            addTodoDynamicElement(curElem);
        });
    }

    showTodoList();

    const removeTodoElem=(e)=>{
     const todoToRemove=e.target;
     let todoListContent=todoToRemove.previousElementSibling.innerText;
     let parentElem=todoToRemove.parentElement;
     console.log(todoListContent);

     localTodoList=localTodoList.filter((curTodo)=>{
       // console.log(curTodo);
       return curTodo!=todoListContent.toLowerCase();
     })
     addTodoListLocalStorage(localTodoList)
     parentElem.remove();
     console.log(localTodoList);
    }


     addTodoListLocalStorage(localTodoList)

    mainTodo.addEventListener('click',(e)=>{
        e.preventDefault();
       if(e.target.classList.contains('dltBtn')){
        removeTodoElem(e);
       }
    })

    document.querySelector(".btn").addEventListener('click', (e) => {

        addTodoList(e);
    })

