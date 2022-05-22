const app = Vue.createApp({
    data(){
        return{
            firstName:'Yacine',
            lastName:'Benaouda',
            email:"yacine@gmail.com",
            gender:'Male',
            portrait:'https://randomuser.me/portraits/men/10.jpg'


        }
    }
});

app.mount(('#app'));