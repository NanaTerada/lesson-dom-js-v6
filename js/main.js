'use strict';
{
//    属性の操作

document.querySelector('button').addEventListener('click',() =>{

    const targetNode = document.getElementById('target');

//targetNode.className = 'my-color my-border'; 　//最初からついていたクラスも書かないきえてしまう
    // targetNode.classList.add('my-color');
    // if (targetNode.classList.contains('my-color')=== true ) {
    //     targetNode.classList.remove('my-color');

    // } else {
    //     targetNode.classList.add('my-color');
    // }

    targetNode.classList.toggle('my-color');



    // targetNode.textContent = 'Changed!';
    // targetNode.title = 'this is title!';
    // targetNode.style.backgroundColor = "red";


});



}
