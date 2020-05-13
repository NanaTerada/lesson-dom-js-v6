'use strict';
{
    document.querySelector('form').addEventListener( 'submit',(e) =>{
        e.preventDefault(); //規定の動作をキャンセル
        console.log('Submit!');
    });
}
