var t = document.getElementsByClassName('it')[0];
var qm = document.getElementsByClassName('qm')[0];
var style = window.getComputedStyle(t);

qm.addEventListener('click',()=>{
    if(style.height == '0px'){
        t.style.height = `${t.scrollHeight}px`;
        t.style.transition = 'height 0.25s ease-in';
    } else {
        t.style.height = '0px';
    }
})
