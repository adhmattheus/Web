import Modal from './modal.js';

const modal = Modal();
//pegar os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

  checkButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener("click", event => {
      //abrir modal
      modal.open();
    }); 
  });

//pegar quando o "marcar como lido" for clicado