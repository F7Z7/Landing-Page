cursor= document.querySelector(".moveCurs")
document.addEventListener('mousemove', function(e){
    let x=e.clientX;
    let y=e.clientY;
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
});