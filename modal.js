

let modalSub = document.querySelector('#id01');
let modalLog = document.querySelector('#id02');

// When the user clicks anywhere outside of the modal, close it

document.onclick = (e) => {
  if (e.target == modalSub) {
    modalSub.style.display = "none";
  }
  if (e.target == modalLog) {
    modalLog.style.display = "none";
  }  
};















