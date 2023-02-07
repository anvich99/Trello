'use strict'
// import { container} from './script.js';
//import renderProgress from './cards.js';
let todos = []; 
let id = 0;
if(localStorage.tasks != null){
    todos = JSON.parse(localStorage.getItem('tasks'))
}else localStorage.setItem('tasks', JSON.stringify(todos))

if(localStorage.id != null){
    id = JSON.parse(localStorage.getItem('id'))
}else localStorage.setItem('id', JSON.stringify(id))

function addWindow(){
    const modalsNode = document.querySelector('.todoModals');

    const form = document.createElement('div');
    // form.classList.add('cont');
    // container.append(form);

    const forma = document.createElement('div');
    forma.classList.add('testBlock');
    form.append(forma);

    const title_div = document.createElement('div');
    title_div.innerText = "Title";
    forma.append(title_div);

    const title = document.createElement('input');
    title.type = 'text';
    title_div.append(title);

    const div_col = document.createElement('div');
    div_col.innerText = "В колонке";
    forma.append(div_col);

    const colom = document.createElement('span');
    colom.innerText = col; 
    div_col.append(colom);

    const descr_div = document.createElement('form');
    descr_div.innerText = 'Description';
    forma.append(descr_div);

    const description = document.createElement('textarea');
    description.rows = '6';
    description.cols = '10';
    descr_div.append(description);

    const select = document.createElement('select');
    select.classList.add('selectUser')
    forma.append(select);

    const option = document.createElement('option');
    option.classList.add('optionUser');
    option.innerText = "Участники";
    // option.setAttribute('value', 'Участники');
    select.append(option);

    const date = document.createElement('input');
    date.type = 'date';
    forma.append(date);

    const btn_add = document.createElement('button');
    btn_add.innerText = "ADD";
    forma.append(btn_add);

    const btn_cancel = document.createElement('button');
    btn_cancel.innerText = "Cancel";
    forma.append(btn_cancel);
    modalsNode.append(form);
}
function renderTest(toFlag, col){
    
    const modalsNode = document.querySelector('.todoModals');

    const form = document.createElement('div');
    // form.classList.add('cont');
    // container.append(form);

    const forma = document.createElement('div');
    forma.classList.add('testBlock');
    form.append(forma);

    const title_div = document.createElement('div');
    title_div.innerText = "Title";
    forma.append(title_div);

    const title = document.createElement('input');
    title.type = 'text';
    title_div.append(title);

    const div_col = document.createElement('div');
    div_col.innerText = "В колонке";
    forma.append(div_col);

    const colom = document.createElement('span');
    colom.innerText = col; 
    div_col.append(colom);

    const descr_div = document.createElement('form');
    descr_div.innerText = 'Description';
    forma.append(descr_div);

    const description = document.createElement('textarea');
    description.rows = '6';
    description.cols = '10';
    descr_div.append(description);

    const select = document.createElement('select');
    select.classList.add('selectUser')
    forma.append(select);

    const option = document.createElement('option');
    option.classList.add('optionUser');
    option.innerText = "Участники";
    // option.setAttribute('value', 'Участники');
    select.append(option);

    const date = document.createElement('input');
    date.type = 'date';
    forma.append(date);

    const btn_add = document.createElement('button');
    btn_add.innerText = "ADD";
    forma.append(btn_add);

    const btn_cancel = document.createElement('button');
    btn_cancel.innerText = "Cancel";
    forma.append(btn_cancel);
    modalsNode.append(form);

    // addListInDiv();

    btn_add.addEventListener('click', ()=>{
        // console.log(todos.length)
        const task ={
            id: id, 
            titleTask: title.value,
            descripTask: description.value,
            user: select.value,
            flag: toFlag,
            data: date.value
        }
        todos.push(task);
        cleanForm()
        renderProgress(task.titleTask, task.descripTask, task.user, task.data, task.flag);
        localStorage.setItem('tasks', JSON.stringify(todos))
        id++;
        localStorage.setItem('id', JSON.stringify(id))
        
        
        // console.log(todos)
    })
    btn_cancel.addEventListener('click', ()=>{
        modalsNode.remove('.todoModals')
    })
    function cleanForm(){
        title.value = '';
        description.value = '';
        select.value= "Участники";
        date.value = ''
    }
    // return modalsNode;
    async function getUser(){
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                // const user =[];
                for(let i = 0; i<users.length; i++){
                    const option = document.createElement('option');
                    option.classList.add('optionUser');
                    option.setAttribute('value', users[i].name)
                    // option.setAttribute('id', users[i].id)
                    option.innerText = users[i].name 
                    select.append(option);
                    // var value = select.value;
                    // console.log(value);

                }
    })
    }
    getUser();
    
}


// export default ;
export default renderTest;