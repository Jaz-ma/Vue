const app = Vue.createApp({
    data(){
        return{
            firstName:'Yacine',
            lastName:'Benaouda',
            email:"yacine@gmail.com",
            gender:'male',
            portrait:'https://randomuser.me/portraits/men/10.jpg'


        }
    },
    methods:{

    async getUser(){
        const res = await fetch('https://randomuser.me/api')
        const {results} = await res.json()

            this.firstName ='Sarah',
            this.lastName ='Ghadi',
            this.email="sarah@gmail.com",
            this.gender='female',
            this.portrait='https://randomuser.me/portraits/women/10.jpg'


        console.log(results);
    }

    }
});

app.mount(('#app'));