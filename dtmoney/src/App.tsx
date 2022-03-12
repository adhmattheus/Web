import Modal from 'react-modal';
import { Dashbord } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {

  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(false);

  function handleOpenNewTranslationModal() {
    setIsNewTranslationModalOpen(true);
  };

  function handleCloseNewTranslationModal() {
    setIsNewTranslationModalOpen(false);
  };

  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenNewTranslationModal} />
      <Dashbord />

      <Modal
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModal}>
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}