'use strict';
{
// ＤＯＭから要素を削除しよう！

document.querySelector('button').addEventListener('click',() =>{
    const colors = document.querySelectorAll('input');
    let selectedColor;

    colors.forEach( (color) => {
        if( color.checked === true){ //要素がチェックされていたら
            selectedColor = color.value;　//要素の値を代入する
    }
    });

    const li = document.createElement('li');
    li.textContent = selectedColor;
    document.querySelector('ul').appendChild(li);
});



}
