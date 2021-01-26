// Get the modal
let modal = document.getElementById('modal');

// Button that opens the modal
let btn = document.getElementById('btn');

// Get the span that closes the modal
let span = document.getElementsByClassName('close')[0];

// Change modal display -> block (visible) or none 'invisible'

// On click event, open the modal;
btn.onclick = function () {
  modal.style.display = 'block';
};

// On click event, close the modal;

// Click the 'X'
span.onclick = function () {
  modal.style.display = 'none';
};

// Clisk outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
