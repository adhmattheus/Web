export default function Modal(){

  const modalWrapper = document.querySelector('.modal-wrapper');
  const cancelButton = document.querySelector('.button.cancel');

  cancelButton.addEventListener("click",close);


  //ativa a classe active em modal
  function open(){
    modalWrapper.classList.add("active");
  };
  //desativa a classe active em modal
  function close(){
    modalWrapper.classList.remove("active")
  };

  return{
    open,
    close
  };
};