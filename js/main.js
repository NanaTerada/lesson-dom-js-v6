'use strict';
{
// ＤＯＭから要素を削除しよう！

document.querySelector('button').addEventListener('click',() =>{
    const colors = document.querySelectorAll('input');
    const selecterColors = []; //複数選択OKなので配列にしておく

    colors.forEach(color=> {
        if( color.checked === true){
            selecterColors.push(color.value);
        }
    });
    const li = document.createElement('li');
    
    li.textContent = selecterColors.join(',');
    document.querySelector('ul').appendChild(li);

});





}
