'use strict';
{
// ＤＯＭから要素を削除しよう！

document.querySelector('button').addEventListener('click',() =>{
    const li = document.createElement('li');
    const text = document.querySelector('input');
    li.textContent = text.value; //valueで入力された値を取得できる
    document.querySelector('ul').appendChild(li);

    text.value = ''; //addするたびに入力欄が空になり
    text.focus(); //フォーカスされている状態　
   
});



}
