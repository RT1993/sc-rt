var openModal = function() {
  var modal = document.getElementById('Modal1');

  modal.classList.add('shown');  
  document.body.style.backgroundColor = '#ffffff';


};
var hideModal = function() {
  var modal = document.getElementById('Modal1');
  
  modal.classList.remove('shown');
  document.body.style.backgroundColor = '#ffffff';
};

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


 

