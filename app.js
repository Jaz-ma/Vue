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

            this.firstName =results[0].name.first,
            this.lastName =results[0].name.last,
            this.email=results[0].email
            this.gender=results[0].gender
            this.portrait=results[0].picture.large


    }

    }
});

app.mount(('#app'));