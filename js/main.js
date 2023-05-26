const {createApp} = Vue;

createApp ({
    data(){
        return{
            messaggio: '',

            
            // Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
            //1. creo un array di oggetti (che corrisponderanno alle chat) che contengono: 
            // - nome
            // - foto profilo
            chats: [
                {
                    'nome': 'Michela',
                    'fotoProfilo': '.Img/Michela.jpeg',
                },   
                
                {
                    'nome': 'Fabiola',
                    'fotoProfilo': 'Img/WhatsApp-Avatar-Profile-Photo-Hero-1250x680.png',
                },

                {
                    'nome': 'Samuele',
                    'fotoProfilo': 'Ale.jpeg',
                },

                {
                    'nome': 'Alessandra',
                    'fotoProfilo': 'sandra.jpg',
                },

            ],
        }
        
    
    
    }
    












}).mount('.main-container');