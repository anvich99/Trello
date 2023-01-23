'user strict'
//верстка
const content = document.getElementById('trello');  
content.classList.add('trello');

const main = document.createElement('div');   
main.classList.add('main-trello');
content.append (main);         

const container = document.createElement('div');
container.classList.add('main-trello-container');
main.append (container);

const row = document.createElement('div');
row.classList.add('main-trello-row');
container.append (row);

//1 столбец
const columnTodo = document.createElement('div');
columnTodo.classList.add('main-trello-column-todo');
row.append (columnTodo);

const columnTodoHeader = document.createElement('div');
columnTodoHeader.classList.add('main-trello-column-header');
columnTodoHeader.classList.add('todo-header');
columnTodo.append (columnTodoHeader);

const columnTodoHeaderTitle = document.createElement('p');
columnTodoHeaderTitle.classList.add('main-trello-column-header__title');
columnTodoHeaderTitle.innerHTML = 'TODO:';
columnTodoHeader.append (columnTodoHeaderTitle);

const columnTodoHeaderAllNumber = document.createElement('p');
columnTodoHeaderAllNumber.classList.add('main-trello-column-header__all-number');
columnTodoHeaderAllNumber.innerHTML = '10';  ///временно
columnTodoHeader.append (columnTodoHeaderAllNumber);

const columnTodoBtnAdd = document.createElement('div');
columnTodoBtnAdd.classList.add('main-trello-column-todo-button-add');
columnTodoBtnAdd.classList.add('button');
columnTodoBtnAdd.innerHTML = 'Add todo'; 
columnTodoBtnAdd.type = 'button';
columnTodo.append (columnTodoBtnAdd);

//2 столбец
const columnInProrgess = document.createElement('div');
columnInProrgess.classList.add('main-trello-column-in-prorgess');
row.append (columnInProrgess);

const columnInProrgessHeader = document.createElement('div');
columnInProrgessHeader.classList.add('main-trello-column-header');
columnInProrgessHeader.classList.add('in-prorgess-header');
columnInProrgess.append (columnInProrgessHeader);

const columnInProrgessHeaderTitle = document.createElement('p');
columnInProrgessHeaderTitle.classList.add('main-trello-column-header__title');
columnInProrgessHeaderTitle.innerHTML = 'IN PRORGESS';
columnInProrgessHeader.append (columnInProrgessHeaderTitle);

const columnInProrgessHeaderAllNumber = document.createElement('p');
columnInProrgessHeaderAllNumber.classList.add('main-trello-column-header__all-number');
columnInProrgessHeaderAllNumber.innerHTML = '4';  ///временно
columnInProrgessHeader.append (columnInProrgessHeaderAllNumber);

//3 столбец
const columnDone = document.createElement('div');
columnDone.classList.add('main-trello-column-done');
row.append (columnDone );

const columnDoneHeader = document.createElement('div');
columnDoneHeader.classList.add('main-trello-column-header');
columnDoneHeader.classList.add('done-header');
columnDone.append (columnDoneHeader);

const columnDoneHeaderTitle = document.createElement('p');
columnDoneHeaderTitle.classList.add('main-trello-column-header__title');
columnDoneHeaderTitle.innerHTML = 'DONE';
columnDoneHeader.append (columnDoneHeaderTitle);

const columnDoneHeaderAllNumber = document.createElement('p');
columnDoneHeaderAllNumber.classList.add('main-trello-column-header__all-number');
columnDoneHeaderAllNumber.innerHTML = '2';  ///временно
columnDoneHeader.append (columnDoneHeaderAllNumber);

const columnDoneBtnDel = document.createElement('div');
columnDoneBtnDel.classList.add('main-trello-column-button-del');
columnDoneBtnDel.classList.add('button');
columnDoneBtnDel.innerHTML = 'Delete all'; 
columnDoneBtnDel.type = 'button';
columnDone.append (columnDoneBtnDel);
