'use strict';
{
//    属性の操作

document.querySelector('button').addEventListener('click',() =>{

const item0 = document.querySelectorAll('li')[0];　//コピーしたい要素を取得
const copy = item0.cloneNode(true); //コピーする
const ul = document.querySelector('ul');
const item2 = document.querySelectorAll('li')[2];
ul.insertBefore(copy,item2); //コピーをitem2の前に挿入してね

});



}
