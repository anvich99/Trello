'use strict'

import svg_del from 'bundle-text:../img/trash.svg';
import svg_edit from 'bundle-text:../img/pencil.svg';
import { counterAll } from './board';

// const date = document.querySelector('.popup-date__input');

//import board from './board.js'

// console.log(board(container))
const trello = function(containerNode) {
    const container = containerNode

    const store = {  
        members: [],
        todos: [
            {
                id: 0, 
                title: '',
                date: '',
                description: "",
                memberID: [],
                flag: '',
            },
        ]
    };
    
    const init = async function(){
        if(!getFromLocalStorage())
        {
            store.members = await getMembers();
            saveToLocalStorage();
        }

        renderTodos();
        removeItem()
        removeAll()

        // dargAndDrop()
    }
    const renderTodos = function(){
        store.todos.forEach(todo => {
            renderTodo(todo);
        })
    };
    const getMembers = async function (){
        let members = [];
    
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                for(let i = 0; i < data.length; i++){
                    const member = {
                        id: data[i].id,
                        user: data[i].name,
                    }
                    members.push(member)
                }
            })
        return members    
    };

    const saveToLocalStorage = function (){
        localStorage.setItem('trello',  JSON.stringify(store))
    }
    const getFromLocalStorage = function(){
        const localData = JSON.parse(localStorage.getItem('trello'));

        if(!localData){
            return false;
        }

        if(localData.members.length){
            store.members = localData.members;
        }

        if(localData.todos.length){
            store.todos = localData.todos;
        }

        return true
    }
    const renderTodo = function(todo) {
        const popup = document.createElement('div')
        popup.classList.add('popup')
        popup.dataset.popup = todo.id
        popup.dataset.column = todo.flag
        container.append(popup)

        const popupInner = document.createElement('div')
        popupInner.classList.add('popup-inner')
        popup.append(popupInner)

        const card = document.createElement('div')
        card.classList.add('card')
        popupInner.append(card)

        const cardHeader = document.createElement('div')
        cardHeader.classList.add('card-header')
        card.append(cardHeader)

        const formCardTitle = document.createElement('form')
        formCardTitle.classList.add('form-card-title')
        cardHeader.append(formCardTitle)

        const cardTitleText = document.createElement('textarea')
        cardTitleText.placeholder = 'Title'
        cardTitleText.classList.add('card-title__text')
        cardTitleText.value = todo.title
        formCardTitle.append(cardTitleText)

        const cardIncollumn = document.createElement('div')
        cardIncollumn.classList.add('card-incollumn')
        cardHeader.append(cardIncollumn)
        cardIncollumn.innerHTML = `в колонке <span>${todo.flag}</span>`

        const cardMain = document.createElement('div')
        cardMain.classList.add('card-main')
        card.append(cardMain)

        const cardLeft = document.createElement('div')
        cardLeft.classList.add('card-left')
        cardMain.append(cardLeft)

        const cardDescription = document.createElement('form')
        cardDescription.classList.add('card-description')
        cardLeft.append(cardDescription)

        const cardDescriptionTitle = document.createElement('div')
        cardDescriptionTitle.classList.add('card-description__title')
        cardDescriptionTitle.textContent = 'Описание'
        //cardDescriptionTitle.value = todo.description
        cardDescription.append(cardDescriptionTitle)

        const cardDescriptionText = document.createElement('textarea')
        cardDescriptionText.placeholder = 'Description'
        cardDescriptionText.value = todo.description
        cardDescriptionText.classList.add('card-description__text')
        cardDescription.append(cardDescriptionText)

        const cardMembers = document.createElement('div')
        cardMembers.classList.add('card-members')
        cardLeft.append(cardMembers)

        const cardMembersTitle = document.createElement('div')
        cardMembersTitle.classList.add('card-members__title')
        cardMembersTitle.textContent = 'Участники'
        cardMembers.append(cardMembersTitle)

        const cardMembersWrap = document.createElement('div')
        cardMembersWrap.classList.add('card-members-wrap')
        cardMembers.append(cardMembersWrap)

        const cardDate = document.createElement('div')
        cardDate.classList.add('card-date')
        cardDate.textContent = todo.date
        cardLeft.append(cardDate)

        const cardRright = document.createElement('div')
        cardRright.classList.add('card-right')
        cardMain.append(cardRright)

        const cardAdd = document.createElement('div')
        cardAdd.classList.add('card-add')
        cardAdd.textContent = 'Добавить на карточку'
        cardRright.append(cardAdd)

        const cardBtnUsers = document.createElement('div')
        cardBtnUsers.classList.add('card-btn')
        cardBtnUsers.classList.add('card-btn--users')
        cardRright.append(cardBtnUsers)

        const cardBtnTitle = document.createElement('div')
        cardBtnTitle.classList.add('popup-btn__title')
        cardBtnTitle.textContent = 'Участники'
        cardBtnUsers.append(cardBtnTitle)

        const cardBtnDate = document.createElement('div')
        cardBtnDate.classList.add('card-btn')
        cardBtnDate.classList.add('card-btn--date')
        cardRright.append(cardBtnDate)

        const cardBtnDateTitle = document.createElement('div')
        cardBtnDateTitle.classList.add('card-btn-date__title')
        cardBtnDateTitle.textContent = 'Дата'
        cardBtnDate.append(cardBtnDateTitle)


        const cardFooter = document.createElement('div')
        cardFooter.classList.add('card-footer')
        card.append(cardFooter)

        const cardCancel = document.createElement('div')
        cardCancel.classList.add('card-cancel')
        cardCancel.textContent = 'Cancel'
        cardFooter.append(cardCancel)

        const cardConfirm = document.createElement('div')
        cardConfirm.classList.add('card-confirm')
        cardConfirm.textContent = 'Confirm'
        cardFooter.append(cardConfirm)

        const popupUsers = document.createElement('div')
        popupUsers.classList.add('popup-users')
        cardBtnUsers.append(popupUsers)

        const popupUsersTitle = document.createElement('div')
        popupUsersTitle.classList.add('popup-users__title')
        popupUsersTitle.textContent = 'Участники'
        popupUsers.append(popupUsersTitle)

        const popupUsersClose = document.createElement('div')
        popupUsersClose.classList.add('popup-users__close')
        popupUsersClose.textContent = 'X'
        popupUsers.append(popupUsersClose)

        const popupUsersWrap = document.createElement('div')
        popupUsersWrap.classList.add('popup-users-wrap')
        popupUsers.append(popupUsersWrap);

        const popupDate = document.createElement('div')
        popupDate.classList.add('popup-date')
        cardBtnDate.append(popupDate)

        const popupDateTitle = document.createElement('div')
        popupDateTitle.classList.add('popup-date__title')
        popupDateTitle.textContent = 'Дата'
        popupDate.append(popupDateTitle)

        const popupDateClose = document.createElement('div')
        popupDateClose.classList.add('popup-date__close')
        popupDateClose.textContent = 'X'
        popupDate.append(popupDateClose)

        if(todo.id === 0)
        {
            addButonnsListener()
        } 
        else 
        {
            renderProgress(todo, popup)
        }
       
        date(popupDate, cardDate)
        renderMembers(todo.memberID, cardMembersWrap, popupUsersWrap)
        addListeners(popup, popupDate, cardBtnDate, cardBtnUsers, popupUsers, popupUsersWrap, cardMembersWrap, cardConfirm, cardCancel, cardTitleText, cardDescriptionText, cardDate, todo);
    }
    const removeItem = function() {
        const list = document.querySelectorAll('.main-list-items')

        list.forEach(task => {
            task.addEventListener('click', e => {
                const taskNode = e.target.closest('.main-list-items-task')

                if(e.target.classList.contains('items-task-buttons-delete') || e.target.closest('.items-task-buttons-delete')){
                    store.todos.forEach((item, i, arr) => {
                        if(item.id == taskNode.dataset.task){
                            arr.splice(i, 1);
                        }
                    })

                    taskNode.remove()
                    saveToLocalStorage();
                    counterAll()
                }
                
            })
        })
    }
    const removeAll = function() {
        const clean = document.querySelector('.header-button__clean')

        clean.addEventListener('click', () => {
            
            store.todos.splice(1);
            const list = document.querySelectorAll('.main-list-items-task')
            list.forEach(item => {
                item.remove()
            })
            
            saveToLocalStorage()
            counterAll()
            
        })

        document.querySelectorAll('.header-button__clean')[1].addEventListener('click', () => {
            
            store.todos.splice(1);
            const list = document.querySelectorAll('.main-list-items-task')
            list.forEach(item => {
                item.remove()
            })
            
            saveToLocalStorage()
            counterAll()
            
        })

    }
    const addButonnsListener = function() {
        const addCard = document.querySelectorAll('.btn-js')
       
        addCard.forEach(item => {
            item.addEventListener('click', (e) => {

                const columnId = e.target.dataset.do;
                const parentColumn = item.closest('.column-js')
                const columnFlag = parentColumn.dataset.flag
                if(columnId) {
                    const popup = document.querySelector('.popup[data-popup="0"]')
                    popup.classList.add('open')
                    popup.classList.remove('close')

                    popup.dataset.column = columnId;

                    document.querySelector('.card-incollumn span').textContent = columnFlag
                }
            })
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
                    item.style.display = 'flex';
                    draggeaItem = null;
                }, 0)
            });

            ////перемещение в другой столбец
            // for (let j=0; j<lists.length; j++){
            //     const list = lists[j];
            lists.forEach(list => {
                list.addEventListener('dragover', e =>  e.preventDefault());
                list.addEventListener('dragenter',  function (e){
                    e.preventDefault();
                    this.style.backgroundColor = 'rgba(0,0,0,0.1)';
                });
                
                list.addEventListener('dragleave',  function (e){
                    this.style.backgroundColor = 'rgba(0,0,0,0)';
                });

                list.addEventListener('drop',  function ()
                {
                    if(document.querySelector('.one') === draggeaItem.parentNode)
                    {
                        this.style.backgroundColor = 'rgba(0,0,0,0)';
                        draggeaItem.children[0].style.background = '#1C5A7C';
                        if (this.classList[1] === 'two') {draggeaItem.children[0].style.background = '#106354'; saveTodoAfterDrag(draggeaItem, 'progress')};
                        if (this.classList[1] === 'three') {draggeaItem.children[0].style.background = '#71441B'; saveTodoAfterDrag(draggeaItem, 'done')};

                        // saveTodoAfterDrag(draggeaItem, 'todo')
                        console.log('raz')

                    }else if(document.querySelector('.two') === draggeaItem.parentNode){
                        this.style.backgroundColor = 'rgba(0,0,0,0)';
                        draggeaItem.children[0].style.background = '#106354'
                        if (this.classList[1] === 'one') {draggeaItem.children[0].style.background = '#1C5A7C'; saveTodoAfterDrag(draggeaItem, 'todo')};
                        if (this.classList[1] === 'three') {draggeaItem.children[0].style.background = '#71441B'; saveTodoAfterDrag(draggeaItem, 'done')};

                        // saveTodoAfterDrag(draggeaItem, 'progress')
                        console.log('dva')

                    }else if(document.querySelector('.three') === draggeaItem.parentNode){
                        this.style.backgroundColor = 'rgba(0,0,0,0)';
                        draggeaItem.children[0].style.background = '#71441B'
                        if (this.classList[1] === 'one') {draggeaItem.children[0].style.background = '#1C5A7C'; saveTodoAfterDrag(draggeaItem, 'todo')};
                        if (this.classList[1] === 'two') {draggeaItem.children[0].style.background = '#106354'; saveTodoAfterDrag(draggeaItem, 'progress')};

                        // saveTodoAfterDrag(draggeaItem, 'done')
                        console.log('tri')
                    }
                    this.append(draggeaItem);
                    counterAll ()

                    saveToLocalStorage()
                })
            })
        }
    }
    const saveTodoAfterDrag = function(item, popupFlag)
    {
        const taskId = +item.dataset.task;
        const findTodo = store.todos.filter(el => el.id === taskId);

        if(!findTodo.length) return;

        const todo = findTodo[0];

        //const column = item.closest('.column-js')
        //const popupFlag = column.dataset.flag
        const popups = document.querySelectorAll('.popup')
        
        popups.forEach(item => {
            if(+item.dataset.popup == taskId){
                item.querySelector('.card-incollumn span').textContent = popupFlag
                todo.flag = popupFlag
            }
        })


        for(i = 0; i < store.todos.length; i++)
        {
            if(store.todos[i]['id'] === taskId)
            {
                store.todos[i]['flag'] = popupFlag
            }
        }
        
        /*
        store.todos.forEach(todo => {
            if(+todo.id === taskId)
            {
                todo.flag = popupFlag
            }
        })*/
        saveToLocalStorage()
    }
    
    function renderProgress(todo, popup){
        if (todo.flag === 'todo'){
            const cardsTodo = document.querySelector('.one');
            const line = document.createElement('div');
            card(todo, cardsTodo, popup, '#1C5A7C')
        } else if(todo.flag == 'progress'){
            const cardsTodo = document.querySelector('.two');
            card(todo, cardsTodo, popup, '#106354')

        } else if (todo.flag == 'done') { 
            const cardsTodo = document.querySelector('.three');
            card(todo, cardsTodo, popup, '#71441B')
        } 
        dargAndDrop()
    }
    const card = function(todo, cardsTodo, popup, color) {
            const itemToDO = document.createElement('li');
            itemToDO.classList.add('main-list-items-task');
            itemToDO.dataset.task = todo.id
            itemToDO.setAttribute ('draggable', 'true');
            cardsTodo.append(itemToDO);
    
            const line = document.createElement('div');
            line.classList.add('main-list-items__line');
            line.style.background = color;
            itemToDO.append(line);

            const cardContent = document.createElement('div');
            cardContent.classList.add('main-list-items-content');
            // cardContent.append(itemToDO);

            const headerItem = document.createElement('div');
            headerItem.classList.add('main-list-items-task-header');
            cardsTodo.append(headerItem);
            // cardsTodo.append(headerItem);
    
            const titleItemToDO = document.createElement('h4');
            titleItemToDO.classList.add('items-task__title');
            titleItemToDO.dataset.title = todo.id
            titleItemToDO.innerText = todo.title;
    
            const btnsItem = document.createElement('div');
            btnsItem.classList.add('items-task-buttons');
    
            const btnEdit = document.createElement('button');
            btnEdit.classList.add('items-task-buttons-edit');
            btnEdit.dataset.edit = todo.id
            btnEdit.innerHTML = svg_edit;

            btnEdit.addEventListener('click', () => {
                console.log(popup)
                popup.classList.add('open')
                popup.classList.remove('close')
            })

            const btnDelete = document.createElement('button');
            btnDelete.classList.add('items-task-buttons-delete');
            btnDelete.innerHTML = svg_del;
        
            btnsItem.append(btnEdit, btnDelete);
            headerItem.append(titleItemToDO, btnsItem);
    
            const descriptionItem = document.createElement('div');
            descriptionItem.classList.add('items-task__description');
            descriptionItem.dataset.description = todo.id
            descriptionItem.innerText = todo.description;
    
            const infoItem = document.createElement('div');
            infoItem.classList.add('items-task-info');
    
            
            const dateItem = document.createElement('div');
            dateItem.classList.add('items-task-info__date');
            dateItem.dataset.date = todo.id
            dateItem.innerText = todo.date;

            //infoItem.append(dateItem)
            const usersItem = document.createElement('div');
            usersItem.classList.add('items-task-info__user');
            infoItem.append(dateItem, usersItem);

            for(let i = 0; i < todo.memberID.length; i++)
            {
                store.members.forEach(item => {
                    if(todo.memberID[i] == item.id){
                        console.log(item.user)
                        usersItem.innerText = item.user
                    }
                })
            }
    
            cardContent.append(headerItem, descriptionItem, infoItem);
            itemToDO.append(cardContent);
            counterAll()
    }
    const date = function(popupDate, cardDate) {
        const popupDateForm = document.createElement('form')
        popupDateForm.classList.add('popup-date-form')
        popupDate.append(popupDateForm)

        const popupDateInput = document.createElement('input')
        popupDateInput.type = 'text'
        popupDateInput.classList.add('popup-date__input')
        popupDateForm.append(popupDateInput)

        flatpickr.localize(flatpickr.l10ns.ru);
        flatpickr(".popup-date__input", {
            inline:true,
            altInput: true,
            dateFormat: "d.m.Y",
            locale: {
                rangeSeparator: " - "
            } 
        });
        addDate(popupDateInput, cardDate)
    }
    const addDate = function(popupDateInput,cardDate ) {
        popupDateInput.addEventListener('change', (e) => {
            cardDate.innerHTML = e.target.value
        });
    }
    const renderMember = function (member, popupUsersWrap) {
        const popupUsersItem = document.createElement('div')
        popupUsersItem.classList.add('popup-users-wrap__item')
        popupUsersItem.innerText = member.user;
        popupUsersItem.dataset.id = member.id
        popupUsersWrap.append(popupUsersItem)
    }
    const renderMembers = function(membersId, cardMembersWrap, popupUsersWrap) {
        //const arrMembers = store.members.slice(0, 3)

        for(let i = 0; i < store.members.length; i++){
            renderMember(store.members[i], popupUsersWrap)
            if(membersId.includes(store.members[i].id)){
                let cardMembersItem = document.createElement('div')
                cardMembersItem.classList.add('card-members__item')
                cardMembersItem.dataset.id = store.members[i].id
                cardMembersItem.innerHTML = `${store.members[i].user} `
                cardMembersWrap.append(cardMembersItem)
            }
        }
    }
    const saveTodo = function(popup, cardConfirm) {
        cardConfirm.addEventListener('click', () => {
            const membersNode = popup.querySelectorAll('.card-members__item');
            const title = popup.querySelector('.card-title__text');
            const description = popup.querySelector('.card-description__text');
            const date = popup.querySelector('.card-date')
            const cardMembersWrap = popup.querySelector('.card-members-wrap')
            const id = +popup.dataset.popup
            const arrTodos = store.todos.filter(item => item.id == id)
            const column = popup.dataset.column;

            if(title.value) {
                if(id === 0)
                {
                    const todo = {
                        id: todoID(),
                        title: title.value,
                        date: date.textContent,
                        description: description.value,
                        memberID: [],
                        flag: column,
                    }

                    const memberIds = [];
                    membersNode.forEach(item => {
                        memberIds.push(+item.dataset.id)
                    })
                    todo.memberID = memberIds;
                    store.todos.push(todo)
                    
                    renderTodo(todo)

                    title.value = ''
                    description.value = ''
                    date.textContent = ''
                    cardMembersWrap.innerHTML = ''

                } else if (arrTodos.length){
                    const titleNode = document.querySelector('.items-task__title[data-title="'+id+'"]');
                    titleNode.textContent = title.value 
                    const descriptionNode = document.querySelector('.items-task__description[data-description="'+id+'"');
                    descriptionNode.textContent = description.value 
                    const dateNode = document.querySelector('.items-task-info__date[data-date="'+id+'"');
                    dateNode.textContent = date.textContent 

                    const todo = {
                        id: id,
                        title: title.value,
                        date: date.textContent,
                        description: description.value,
                        memberID: [],
                        flag: column,
                    }
                    
                    const memberIds = [];
                    membersNode.forEach(item => {
                        memberIds.push(+item.dataset.id)
                    })
                    todo.memberID = memberIds;

                    for(let i = 0; i < store.todos.length; i++){
                        if(store.todos[i].id == todo.id){
                            store.todos[i] = todo
                        }
                    }
                } 
            }
            popup.classList.add('close')
            saveToLocalStorage();
        })
    }
    const cancelTodo = function(popup, cardCancel, cardTitleText, cardDescriptionText, cardDate, cardMembersWrap) {
        cardCancel.addEventListener('click', () => {
            if(popup.dataset.popup == 0){
                cardTitleText.value = ''
                cardDescriptionText.value = ''
                cardDate.textContent = ''
                cardMembersWrap.innerHTML = ''
                popup.classList.remove('open')
            } else {
                popup.classList.remove('open')
            }
        })
    }
    const addListeners = function(popup, popupDate, cardBtnDate, cardBtnUsers, popupUsers, popupUsersWrap, cardMembersWrap, cardConfirm, cardCancel, cardTitleText, cardDescriptionText, cardDate, todo) {

        cardBtnUsers.addEventListener('click', (e) => {
            if(e.target.classList.contains('popup-btn__title')){
                popupUsers.classList.add('open')
            }
            if(e.target.classList.contains('popup-users__close')){
                popupUsers.classList.remove('open')
            }
        })

        cardBtnDate.addEventListener('click', (e) => {
            if(e.target.classList.contains('card-btn-date__title')){
                popupDate.classList.add('open')
            }
            if(e.target.classList.contains('popup-date__close')){
                popupDate.classList.remove('open')
            }
        })
        
        popupUsersWrap.addEventListener('click', (e) => {
            const item = e.target
            const parent = item.closest('.popup')
            let cardMembersItem
            if(item.classList.contains('popup-users-wrap__item'))
            {
                const id = e.target.dataset.id
                const cartMembersItem = parent.querySelector('.card-members__item[data-id="'+id+'"]')

                if(cartMembersItem)
                {
                    cartMembersItem.remove()
                }
                 else 
                {
                    store.members.forEach(user => {
                        if(user.id == id)
                        {
                            cardMembersItem = document.createElement('div')
                            cardMembersItem.classList.add('card-members__item')
                            cardMembersItem.dataset.id = user.id
                            cardMembersItem.innerHTML = ` ${user.user}`
                            cardMembersWrap.append(cardMembersItem)
                        }
                    })
                }

                saveToLocalStorage();
            }
        })
        
        saveTodo(popup, cardConfirm)
        cancelTodo(popup, cardCancel, cardTitleText, cardDescriptionText, cardDate, cardMembersWrap)
    }
    const todoID = function() {
        const newId = Math.max(0, ...store.todos.map((todo) => todo.id)) + 1;
        return newId
    }
 
    init();
}

// trello()

export default trello;
