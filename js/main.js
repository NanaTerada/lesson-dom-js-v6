'use strict';
{
//    属性の操作

document.querySelector('button').addEventListener('click',() =>{

    const targetNode = document.getElementById('target');
    targetNode.textContent = 'Changed!';
    targetNode.title = 'this is title!';
    targetNode.style.backgroundColor = "red";
});



}
