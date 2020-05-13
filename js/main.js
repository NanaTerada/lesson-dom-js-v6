'use strict';
{
//    属性の操作

document.querySelector('button').addEventListener('click',() =>{

    const targetNode = document.getElementById('target');

// targetNode.textContent = 'Dotinstall';
targetNode.textContent = targetNode.dataset.tanslation;

});



}
