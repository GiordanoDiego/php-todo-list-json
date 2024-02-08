/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            h1Content: 'Todo-List Json',
            allTask:[]

        };
    },
    methods: {
        handleButtonClick() {
            console.log(this.faiQualcosa(3));
        },
        
    },
    mounted() {
        axios
            .get('http://localhost:8888/Boolean/4-php-todo-list-json/php-todo-list-json/todo-list.json')
            .then((res) => {
                console.log(res.data);
                this.allTask = res.data;
            });
    }
}).mount('#app');