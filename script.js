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

