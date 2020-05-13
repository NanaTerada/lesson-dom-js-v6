'use strict';
{
// ＤＯＭから要素を削除しよう！

document.querySelector('button').addEventListener('click',() =>{
    const li = document.createElement('li'); //liをつくる
    const color = document.querySelector('select');　//色を取得するためにselect要素を取得
    li.textContent = `${color.value} - ${color.selectedIndex}`;　//liの中身に→色の値と、色が何番目か
    document.querySelector('ul').appendChild(li);　//ulのまつびについか
   
});



}
