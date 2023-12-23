const todoList = [];

renderTodoList();

function renderTodoList() {
	let todoListHTML = '';

  todoList.forEach((todoObject) => {
    const { task, date } = todoObject;
		const html = `
      <div>${task}</div> 
      <div>${date}</div>
      <button class= "delete-button js-delete-button">Delete</button>`;
		
		todoListHTML += html;
  })

	document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button').forEach( // querySelectorAll은 class관련된 쿼리를 배열방식으로 모두 찾아준다.
    (deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    }); 
}

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });

document.querySelector('.js-list-input')
  .addEventListener('keydown', (event) => {
    if(event.key === 'Enter') addTodo();
  })

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



