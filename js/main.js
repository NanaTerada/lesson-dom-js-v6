'use strict';
{
//    属性の操作

document.querySelector('button').addEventListener('click',() =>{

    const item2 = document.createElement('li');　//liの要素をつくる
    item2.textContent = 'item 2'; //中身のテキスト

    // DOMツリーに追加

    // const ulNode = document.querySelector('ul'); //親要素であるｕｌを取得
    const ul = document.querySelector('ul');
    ul.appendChild(item2);



    

  


});



}
