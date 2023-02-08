'use strict'

import svg_del from 'bundle-text:../img/trash.svg';
import svg_edit from 'bundle-text:../img/pencil.svg';

function renderProgress(title, description, user, data, flag){
    getTasks();
    if(flag === 'todo'){
        const cardsTodo = document.querySelector('.one');
        const itemToDO = document.createElement('li');
        itemToDO.classList.add('main-list-items-task');
        cardsTodo.append(itemToDO);

        const line = document.createElement('div');
        line.classList.add('main-list-items__line');
        line.style.background = '#1C5A7C';
        itemToDO.append(line);

        const cardContent = document.createElement('div');
        cardContent.classList.add('main-list-items-content');
        
        const headerItem = document.createElement('div');
        headerItem.classList.add('main-list-items-task-header');
        cardContent.append(headerItem);

        const titleItemToDO = document.createElement('h4');
        titleItemToDO.classList.add('items-task__title');
        headerItem.innerText = title;

        const btnsItem = document.createElement('div');
        btnsItem.classList.add('items-task-buttons');

        const btnEdit = document.createElement('button');
        btnEdit.classList.add('items-task-buttons-edit');
        btnEdit.innerHTML = svg_edit;

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('items-task-buttons-delete');
        btnDelete.innerHTML = svg_del;
    
        btnsItem.append(btnEdit, btnDelete);
        headerItem.append(titleItemToDO, btnsItem);

        const descriptionItem = document.createElement('div');
        descriptionItem.classList.add('items-task__description');
        descriptionItem.innerText = description;

        const infoItem = document.createElement('div');
        infoItem.classList.add('items-task-info');

        const dateItem = document.createElement('div');
        dateItem.classList.add('items-task-info__date');
        dateItem.innerText = data;

        const usersItem = document.createElement('div');
        usersItem.classList.add('items-task-info__user');
        infoItem.append(dateItem, usersItem);
        usersItem.innerText = user;

        cardContent.append(headerItem, descriptionItem, infoItem);
        itemToDO.append(cardContent);
    }else if(flag === 'progress'){
        const cardsInProgress = document.querySelector('.two');
        // console.log(renderTest.todos['task']['titleTask'])

        const itemProgress = document.createElement('li');
        itemProgress.classList.add('main-list-items-task');
        cardsInProgress.append(itemProgress);

        const line = document.createElement('div');
        line.classList.add('main-list-items__line');
        line.style.background = '#106354';
        itemProgress.append(line);
        
        const cardContent = document.createElement('div');
        cardContent.classList.add('main-list-items-content');

        const headerItem = document.createElement('div');
        headerItem.classList.add('main-list-items-task-header');
        cardContent.append(headerItem)
        // cardsInProgress.append(headerItem);

        const titleItemProgress = document.createElement('h4');
        titleItemProgress.classList.add('items-task__title');
        headerItem.innerText = title;

        const btnsItem = document.createElement('div');
        btnsItem.classList.add('items-task-buttons');

        const btnEdit = document.createElement('button');
        btnEdit.classList.add('items-task-buttons-edit');
        btnEdit.innerHTML = svg_edit;
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('items-task-buttons-delete');
        btnDelete.innerHTML = svg_del;
    
        btnsItem.append(btnEdit, btnDelete);
        headerItem.append(titleItemProgress, btnsItem);

        const descriptionItem = document.createElement('div');
        descriptionItem.classList.add('items-task__description');
        descriptionItem.innerText = description;

        const infoItem = document.createElement('div');
        infoItem.classList.add('items-task-info');

        const dateItem = document.createElement('div');
        dateItem.classList.add('items-task-info__date');
        dateItem.innerText = data;

        const usersItem = document.createElement('div');
        usersItem.classList.add('items-task-info__user');
        infoItem.append(dateItem, usersItem);
        usersItem.innerText = user;

        cardContent.append(headerItem, descriptionItem, infoItem);
        itemProgress.append(cardContent);
        cardsInProgress.append(itemProgress);
    }else {
        const cardsDone = document.querySelector('.three');

        const itemDone = document.createElement('li');
        itemDone.classList.add('main-list-items-task');
        cardsDone.append(itemDone);

        const line = document.createElement('div');
        line.classList.add('main-list-items__line');
        line.style.background = '#71441B';
        itemDone.append(line);
        
        const cardContent = document.createElement('div');
        cardContent.classList.add('main-list-items-content');

        const headerItem = document.createElement('div');
        headerItem.classList.add('main-list-items-task-header');
        cardsDone.append(headerItem);

        const titleItemDone = document.createElement('h4');
        titleItemDone.classList.add('items-task__title');
        headerItem.innerText = title;

        const btnsItem = document.createElement('div');
        btnsItem.classList.add('items-task-buttons');

        const btnEdit = document.createElement('button');
        btnEdit.classList.add('items-task-buttons-edit');
        btnEdit.innerHTML = svg_edit;

        cardEdit(btnEdit, 'done');

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('items-task-buttons-delete');
        btnDelete.innerHTML = svg_del;
    
        btnsItem.append(btnEdit, btnDelete);
        headerItem.append(titleItemDone, btnsItem);

        const descriptionItem = document.createElement('div');
        descriptionItem.classList.add('items-task__description');
        descriptionItem.innerText = description;

        const infoItem = document.createElement('div');
        infoItem.classList.add('items-task-info');

        const dateItem = document.createElement('div');
        dateItem.classList.add('items-task-info__date');
        dateItem.innerText = data;

        const usersItem = document.createElement('div');
        usersItem.classList.add('items-task-info__user');
        infoItem.append(dateItem, usersItem);
        usersItem.innerText = user;

        cardContent.append(headerItem, descriptionItem, infoItem);
        itemDone.append(cardContent);
        cardsDone.append(itemDone);
    }  
    dargAndDrop ()
}
function getTasks(){
    const todos = JSON.parse(localStorage.getItem('tasks'))
}
function cardEdit(btn, flag){
    btn.addEventListener('click', ()=>{
        const testDiv = document.createElement('div');
        testDiv.classList.add('todoModals')
        container.prepend(testDiv);
        renderTest(flag, flag);

    })
}

let draggeaItem = null;
function dargAndDrop (){
    const listItems = document.querySelectorAll('.main-list-items-task');
    const  lists = document.querySelectorAll('.main-list-items');

    //вытаскивание карточки
    for (let i=0; i<listItems.length; i++){
        const item = listItems[i];
        item.addEventListener('dragstart', () =>{
            draggeaItem = item;
            setTimeout(() => {
                item.style.display = 'none'; 
            }, 0)
        });
        item.addEventListener('dragend', () =>{
            setTimeout(() => {
                item.style.display = 'block'; 
                draggeaItem = null;
            }, 0)
            
        });
        ////перемещение в другой столбец
        for (let j=0; j<lists.length; j++){
            const list = lists[j];
            list.addEventListener('dragover', e =>  e.preventDefault());
            list.addEventListener('dragenter',  function (e){
                e.preventDefault();
                this.style.backgroundColor = 'rgba(0,0,0,0.1)';
            });
            
            list.addEventListener('dragleave',  function (e){
                this.style.backgroundColor = 'rgba(0,0,0,0)';
            });
            list.addEventListener('drop',  function (e){
                if(itemListToDO === draggeaItem.parentNode){
                    this.style.backgroundColor = 'rgba(0,0,0,0)';
                    draggeaItem.style.backgroundColor = '#1C5A7C';
                    draggeaItem.style.border = '#1C5A7C';
                    this.append(draggeaItem);
                }else if(itemListProgress === draggeaItem.parentNode){
                    this.style.backgroundColor = 'rgba(0,0,0,0)';
                    draggeaItem.style.backgroundColor = '#106354';
                    draggeaItem.style.border = '#106354';
                    this.append(draggeaItem);
                }else if(itemListDone === draggeaItem.parentNode){
                    this.style.backgroundColor = 'rgba(0,0,0,0)';
                    draggeaItem.style.backgroundColor = '#71441B';
                    draggeaItem.style.border = '#71441B';
                    this.append(draggeaItem);
                }
                counterAll ()
            })

        }
    }
}

