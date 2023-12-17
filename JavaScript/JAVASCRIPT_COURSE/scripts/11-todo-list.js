const todoList = [];

renderTodoList();

function renderTodoList() {
	let todoListHTML = '';

	for(let i=0; i<todoList.length; ++i) {
		const todo = todoList[i];
		const html = `<p>${todo}</p>`;
		todoListHTML += html;
	}

	document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
	const inputElement = document.querySelector('.js-list-input');
	// inputELement를 .value로 받아서 inputElement = ''로 초기화하면 초기화가 안됨, .value는 call by value라서 주소안에 진짜 값은 바꾸지못함
	todoList.push(inputElement.value);
	renderTodoList();

	inputElement.value = '';
}



