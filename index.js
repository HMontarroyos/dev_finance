const Modal = {
    open(){
        //Abrir Modal
        //Adicionar a class active ao modal 
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active');
    },
    close(){
        //Fechar o Modal 
        // Remover a class active ao modal 
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active');
    }
}