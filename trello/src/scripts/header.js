"use strict";

// import { container } from "./script.js";

function toggleColumn(columnSelector) {
  const allColumns = [
    document.querySelector(".main-trello-column-todo"),
    document.querySelector(".main-trello-column-in-progress"),
    document.querySelector(".main-trello-column-done"),
  ];
  const el = document.querySelector(columnSelector);
  if (el.classList.contains("active")) {
    el.classList.remove("active");
    allColumns.forEach((col) => {
      col.classList.remove("hidden");
    });
  } else {
    allColumns.forEach((col) => {
      col.classList.remove("active");
      col.classList.remove("hidden");
      if (col !== el) {
        col.classList.add("hidden");
      }
    });
    el.classList.add("active");
  }
}

function header(container) {
  const trello = document.createElement("header");
  trello.setAttribute('id', 'header');
  // trello.classList.add("trello");
  container.append(trello);
  const header = document.createElement("div");
  header.classList.add("header");
  trello.append(header);

  const headerName = document.createElement("div");
  headerName.textContent = "Trello";
  headerName.setAttribute('id', 'logo')
  headerName.classList.add("header__name");

  const headerButton = document.createElement("div");
  headerButton.setAttribute('id', 'menu');
  headerButton.classList.add("header-button");

  const headerTodo = document.createElement("div");
  headerTodo.textContent = "TODO";
  headerTodo.classList.add("header-button__todo");
  // headerTodo.classList.add("todo");
  headerTodo.addEventListener("click", () => {
    toggleColumn(".main-trello-column-todo");
  });

  const headerProgress = document.createElement("div");
  headerProgress.textContent = "IN PROGRESS";
  headerProgress.classList.add("header-button__progress");
  // headerProgress.classList.add("progress");
  headerProgress.addEventListener("click", () => {
    toggleColumn(".main-trello-column-in-progress");
  });
  // document.querySelector('')

  const headerDone = document.createElement("div");
  headerDone.textContent = "DONE";
  headerDone.classList.add("header-button__done");
  // headerDone.classList.add("done");
  headerDone.addEventListener("click", () => {
    toggleColumn(".main-trello-column-done");
  });

  const headerClean = document.createElement("div");
  headerClean.textContent = "CLEAN";
  headerClean.classList.add("header-button__clean");

  
  // headerClean.addEventListener("click", () => {
  //   document.querySelectorAll(".main-list-items-task").forEach((item) => {
  //     item.remove();
  //     localStorage.setItem("tasks", JSON.stringify([]));
  //     localStorage.setItem("id", "0");
  //   });
  // });

  headerButton.append(headerTodo, headerProgress, headerDone, headerClean);

  //burger-menu
  const body = document.body;
  
  const containerBurger = document.createElement('div');
  containerBurger.classList.add('header-burger');
  
  const mainBurger = document.createElement('div');
  mainBurger.setAttribute('id', 'burger');
  mainBurger.classList.add('header-burger-field');
  containerBurger.append(mainBurger)
  for(let i = 0; i<3; i++){
    const burderLine = document.createElement('span');
    burderLine.classList.add('burger__line');
    mainBurger.append(burderLine);
  }
  const humb = document.createElement('div');
  humb.setAttribute('id', 'humb');
  humb.classList.add('humb');

//////////////////////////////////////////////

  const headerTime = document.createElement("div");
  headerTime.classList.add("header__time");

  const formatTime = (number) => (number < 10 ? `0${number}` : `${number}`);
  const setCuttentTime = () => {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const mins = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
    headerTime.textContent = `${hours}:${mins}:${seconds}`;
  };
  setCuttentTime();

  setInterval(setCuttentTime, 1000);

  header.append(headerName);
  header.append(headerButton);
  header.append(containerBurger); 
  header.append(humb)
  header.append(headerTime);

  //////////////////////////////

  const menuClone = document.querySelector("#menu").cloneNode(1)

  const one = document.querySelectorAll('.header-button__progress')[1]  // one.classList.add('one');
  console.log(one)
  mainBurger.addEventListener("click", burgerHandler);
  function burgerHandler(e){
    e.preventDefault();
    humb.classList.toggle("open");
    mainBurger.classList.toggle("active");
    headerName.classList.toggle("dn");
    header.classList.toggle("flex");
    body.classList.toggle("noscroll");
    renderHumb();
    menuClone.addEventListener("click", removeHumb)

    const one = document.querySelectorAll('.header-button__progress')[1]
    one.classList.add('one')
    console.log(one)

    
    
  }
  function renderHumb(){
    humb.append(menuClone)
  }
  renderHumb()
    document.querySelectorAll('.header-button__todo')[1].addEventListener("click", () => {
      toggleColumn(".main-trello-column-todo");
    }); 
    document.querySelectorAll('.header-button__progress')[1].addEventListener("click", () => {
      toggleColumn(".main-trello-column-in-progress");
    });
    document.querySelectorAll('.header-button__done')[1].addEventListener("click", () => {
      toggleColumn(".main-trello-column-done");
    });
  function removeHumb(){
      humb.classList.remove("open");
      body.classList.remove("noscroll");
      headerName.classList.remove("dn");
      mainBurger.classList.remove("active");
      header.classList.remove("flex");
  }
}

export default header;


// кнопка которую просили сделать, всплывающее окно, почистить доску
// const warningButton = document.createElement("button");
// warningButton.classList.add("warningButton");
// warningButton.textContent = "Warning";
// trello.appendChild(warningButton);
// warningButton.addEventListener("click", () => {
//   if (!document.querySelector(".modalContainer")) {
//     const modalContainer = document.createElement("div");
//     modalContainer.classList.add("modalContainer");
//     const modalBackdrop = document.createElement("div");
//     modalBackdrop.classList.add("modalBackdrop");
//     modalContainer.appendChild(modalBackdrop);
//     const modalContent = document.createElement("div");
//     modalContent.textContent = "Warning!";
//     modalContent.classList.add("modalContent");
//     modalContainer.appendChild(modalContent);
//     document.body.appendChild(modalContainer);
//     const modalButton = document.createElement("div");
//     modalButton.classList.add("modalButton");
//     const cancelButton = document.createElement("button");
//     cancelButton.classList.add("cancelButton");
//     cancelButton.textContent = "Cancel";
//     cancelButton.addEventListener("click", () => {
//       modalContainer.remove();
//     });
//     const confirmButton = document.createElement("button");
//     confirmButton.classList.add("confirmButton");
//     confirmButton.textContent = "Confirm";
//     confirmButton.addEventListener("click", () => {
//       modalContainer.remove();
//     });
//     modalContent.appendChild(modalButton);
//     modalButton.appendChild(cancelButton);
//     modalButton.appendChild(confirmButton);
//   }
// });
