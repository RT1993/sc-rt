var header = document.getElementById('header');
  var threshold = header.offsetTop;
  document.onscroll = function(){
    if (document.body.scrollTop > threshold){
      header.classList.add('fixed-top');
    }else{
      header.classList.remove('fixed-top');
    }
  }

var hamburger = document.getElementById('navIcon');
var menu = document.getElementById('menu');
// debugger;

hamburger.addEventListener("click", function(){
  if(menu.classList.contains('shown')) {
    menu.classList.remove('shown')
  } else {
    menu.classList.add('shown')
  }
});