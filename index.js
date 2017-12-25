document.addEventListener('DOMContentLoaded', function() {
  console.log('ready');
  animateScroll();





function animateScroll() {
    var elem = document.querySelector("section");
    var pos = 0;
    var id = setInterval(scroll, 10);
    function scroll() {
        if (pos == 4270) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.top = pos + 'px';
        }
    }
}

})
