const todoList = [];

renderTodoList();

function renderTodoList() {
	let todoListHTML = '';

	for(let i=0; i<todoList.length; ++i) {
		const todoObject = todoList[i];
    const { task, date } = todoObject;
		const html = `
      <div>${task}</div> 
      <div>${date}</div>
      <button class= "delete-button" onclick ="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>`;
		
		todoListHTML += html;
	}

	document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
	const inputElement = document.querySelector('.js-list-input');
  const inputDate = document.querySelector('.js-date-input');
	// inputELement를 .value로 받아서 inputElement = ''로 초기화하면 초기화가 안됨, .value는 call by value라서 주소안에 진짜 값은 바꾸지못함
  if(inputElement.value != '') {
    todoList.push({task: inputElement.value, 
      date: inputDate.value });
    renderTodoList();

    inputElement.value = '';
  }
}



