export default function Modal(){
  //ativa a classe active em modal
  function open(){
    document.querySelector('.modal-wrapper').classList.add("active");
  };
  //desativa a classe active em modal
  function close(){

  };

  return{
    open,
    close
  };
};