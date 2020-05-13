'use strict';
{
// ＤＯＭから要素を削除しよう！

document.querySelector('button').addEventListener('click',() =>{
    const item1 = document.querySelectorAll('li')[1];
    // item1.remove();//　一部のブラウザで使えない場合あり、その場合は↓
    // 親Node.removeChild(削除するNode)
    document.querySelector('ul').removeChild(item1);


});



}
