'use strict';
{
    document.querySelector('button').addEventListener( 'dblclick' , () => {
        console.log('Double Click!');
    });

    // document.addEventListener('mousemove', (e) => {
    //     console.log(e.clientX,e.clientY); //XY座標を取得
    // })
    // キーボードに関するイベント keydown と.key　を使う
    document.addEventListener('keydown', (e) => {
        console.log(e.key); 
    })


}
