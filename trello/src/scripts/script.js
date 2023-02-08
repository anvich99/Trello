'use strict'

import trello from './addWindow.js';
import {board} from './board.js'
import header from './header.js'

const content = document.getElementById('trello');  
content.classList.add('trello');
const container = document.createElement('div');
container.classList.add('container');
content.append(container);
let i =0
let img = [new URL('../img/back_2.jpg', import.meta.url), new URL('../img/back_3.jpg', import.meta.url), new URL('../img/back_4.jpg', import.meta.url), new URL('../img/back.avif', import.meta.url)];
function imgChange(img){
    if (i < img.length) {
        const imageUrl = img[i];
        content.style.backgroundImage = `url(${imageUrl})`;
        i++;
    } else {
        i = 0;
    }
}
document.body.addEventListener('click', (e) => { 
    console.log(e.target) 
    if (e.target.classList[0] == 'container' || e.target.classList[0]  == 'trello') { 
        imgChange(img) 
    } 
})
header(container);
board(container);
trello(container)