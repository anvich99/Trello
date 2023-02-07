'user strict'
//верстка
// const content = document.getElementById('trello');  
// content.classList.add('trello');
// import { container} from './script.js'
//import trello from './addWindow.js';
import renderTest from './test.js';
import { showWarning } from "./warning";

let columnTodoAllNumber = document.createElement('p');
let columnInProgressAllNumber = document.createElement('p');
let columnDoneAllNumber = document.createElement('p');

// console.log(trello.store)
function board(container) {
    const main = document.createElement('div');   
    main.classList.add('main-trello');
    container.append (main);         
    
    const containerTwo = document.createElement('div');
    containerTwo.classList.add('main-trello-container');
    main.append (containerTwo);
    
    const row = document.createElement('div');
    row.classList.add('main-trello-row');
    containerTwo.append (row);
    
    //1 столбец
    const columnTodo = document.createElement('div');
    columnTodo.classList.add('main-trello-column-todo');
    columnTodo.classList.add('column-js');
    columnTodo.dataset.flag = 'todo';
    row.append (columnTodo);
    
    const columnTodoHeader = document.createElement('div');
    columnTodoHeader.classList.add('main-trello-column-header');
    columnTodoHeader.classList.add('todo-header');
    columnTodo.append (columnTodoHeader);
    
    const columnTodoHeaderTitle = document.createElement('p');
    columnTodoHeaderTitle.classList.add('main-trello-column-header__title');
    columnTodoHeaderTitle.innerHTML = 'TODO:';
    columnTodoHeader.append (columnTodoHeaderTitle);
    
    columnTodoAllNumber = document.createElement('p');
    columnTodoAllNumber.classList.add('main-trello-column-header__all-number');
    columnTodoAllNumber.innerHTML = '10';  ///временно
    columnTodoHeader.append (columnTodoAllNumber);
    
    // блок для вставки карточек
    const cardsTodo = document.createElement('div');
    cardsTodo.classList.add('main-list-items-wrap');
    columnTodo.append(cardsTodo);
    
    const itemListToDO = document.createElement('ul');
    itemListToDO.classList.add('main-list-items');
    itemListToDO.classList.add('one');
    cardsTodo.append(itemListToDO);
    
    
    const columnTodoBtnAdd = document.createElement('div');
    columnTodoBtnAdd.classList.add('main-trello-column-todo-button-add');
    columnTodoBtnAdd.classList.add('button');
    columnTodoBtnAdd.classList.add('btn-js'); //что бы вешать событие
    columnTodoBtnAdd.dataset.do = 'todo';
    columnTodoBtnAdd.innerHTML = 'Add card'; 
    columnTodoBtnAdd.type = 'button';
    columnTodo.append (columnTodoBtnAdd);
    
    //2 столбец
    const columnInProgress = document.createElement('div');
    columnInProgress.classList.add('main-trello-column-in-progress');
    columnInProgress.classList.add('column-js');
    columnInProgress.dataset.flag = 'progress';
    row.append (columnInProgress);
    
    const columnInProgressHeader = document.createElement('div');
    columnInProgressHeader.classList.add('main-trello-column-header');
    columnInProgressHeader.classList.add('in-progress-header');
    columnInProgress.append (columnInProgressHeader);
    
    const columnInProgressHeaderTitle = document.createElement('p');
    columnInProgressHeaderTitle.classList.add('main-trello-column-header__title');
    columnInProgressHeaderTitle.innerHTML = 'IN PROGRESS:';
    columnInProgressHeader.append (columnInProgressHeaderTitle);
    
    columnInProgressAllNumber = document.createElement('p');
    columnInProgressAllNumber.classList.add('main-trello-column-header__all-number');
    columnInProgressAllNumber.innerHTML = '4';  ///временно
    columnInProgressHeader.append (columnInProgressAllNumber);
    
    ///блок для вставки карточек
    const cardsInProgress = document.createElement('div');
    cardsInProgress.classList.add('main-list-items-wrap');
    columnInProgress.append (cardsInProgress);
    
    const itemListProgress = document.createElement('ul');
    itemListProgress.classList.add('main-list-items');
    itemListProgress.classList.add('two');
    cardsInProgress.append(itemListProgress);
    
    
    const columnInProgressBtnAdd = document.createElement('div');
    columnInProgressBtnAdd.classList.add('main-trello-column-in-progress-button-add');
    columnInProgressBtnAdd.classList.add('button');
    columnInProgressBtnAdd.classList.add('btn-js');//что бы вешать событие
    columnInProgressBtnAdd.dataset.do = 'progress'
    columnInProgressBtnAdd.innerHTML = 'Add card'; 
    columnInProgressBtnAdd.type = 'button';
    columnInProgress.append (columnInProgressBtnAdd);
    
    //3 столбец
    const columnDone = document.createElement('div');
    columnDone.classList.add('main-trello-column-done');
    columnDone.classList.add('column-js');
    columnDone.dataset.flag = 'done';
    row.append (columnDone );
    
    const columnDoneHeader = document.createElement('div');
    columnDoneHeader.classList.add('main-trello-column-header');
    columnDoneHeader.classList.add('done-header');
    columnDone.append (columnDoneHeader);
    
    const columnDoneHeaderTitle = document.createElement('p');
    columnDoneHeaderTitle.classList.add('main-trello-column-header__title');
    columnDoneHeaderTitle.innerHTML = 'DONE:';
    columnDoneHeader.append (columnDoneHeaderTitle);
    
    columnDoneAllNumber = document.createElement('p');
    columnDoneAllNumber.classList.add('main-trello-column-header__all-number');
    columnDoneAllNumber.innerHTML = '2';  ///временно
    columnDoneHeader.append (columnDoneAllNumber);
    
    //блок для вставки карточек
    const cardsDone = document.createElement('div');
    cardsDone.classList.add('main-list-items-wrap');
    columnDone.append (cardsDone);
    
    const itemListDone = document.createElement('ul');
    itemListDone.classList.add('main-list-items');
    itemListDone.classList.add('three');
    cardsDone.append(itemListDone);
    
    const columnDoneBtnDel = document.createElement('div');
    columnDoneBtnDel.classList.add('main-trello-column-button-del');
    columnDoneBtnDel.classList.add('button');
    columnDoneBtnDel.classList.add('btn-js');//что бы вешать событие
    columnDoneBtnDel.dataset.do = 'done';
    columnDoneBtnDel.innerHTML = 'Add card'; 
    columnDoneBtnDel.type = 'button';
    columnDone.append (columnDoneBtnDel);
    
    columnInProgressBtnAdd.addEventListener("click", () => {
        const inProgressTasksLength = document.querySelector(".main-list-items.two").children.length;
    
    if (inProgressTasksLength < 6) {
        const testDiv = document.createElement("div");
        testDiv.classList.add("todoModals");
        // testDiv.classList.add('view')
        container.prepend(testDiv);
        // renderTest("progress", " in Progress");
        // setTimeout(counter/All, 1000)
    } else {
        showWarning();
    }
    });

    // columnTodoBtnAdd.addEventListener('click', ()=>{
    //     const testDiv = document.createElement('div');
    //     testDiv.classList.add('todoModals')
    //     // testDiv.classList.add('view')
    //     container.prepend(testDiv);
    //     //trello();
    // })
    
    // columnInProrgessBtnAdd.addEventListener('click', ()=>{
    //     const testDiv = document.createElement('div');
    //     testDiv.classList.add('todoModals')
    //     // testDiv.classList.add('view')
    //     container.prepend(testDiv);
    //     renderTest('progress');
    // })
    
    // columnDoneBtnDel.addEventListener('click', ()=>{
    //     const testDiv = document.createElement('div');
    //     testDiv.classList.add('todoModals')
    //     // testDiv.classList.add('view')
    //     container.prepend(testDiv);
    //     renderTest('done');
    // })
    counterAll()
}

function counterAll(){
    columnTodoAllNumber.innerHTML = `${document.querySelector('.one').childNodes.length}`;
    columnInProgressAllNumber.innerHTML= `${document.querySelector('.two').childNodes.length}`;
    columnDoneAllNumber.innerHTML= `${document.querySelector('.three').childNodes.length}`;
}

export {board, counterAll};

// export {itemListToDO, itemListProgress, itemListDone};
// export {columnTodoAllNumber, columnInProrgessAllNumber, columnDoneAllNumber}; ///Катя - для подстчета кол-ва - доработаю

