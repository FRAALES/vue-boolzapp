const {createApp} = Vue;

createApp ({
    data(){
        return{
            value: 'ciao',
        }
    }
}).mount('.app');