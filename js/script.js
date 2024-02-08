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
            h1Content: 'To do List Json',
            alltodo:[]

        };
    },
    methods: {
        handleButtonClick() {
            console.log(this.faiQualcosa(3));
        },
        
    },
    mounted() {
        axios
            .get('http://localhost:8888/Boolean/4-php-todo-list-json/php-todo-list-json/readjson.php')
            .then((res) => {
                this.alltodo = res.data;
                console.log(this.alltodo);

            });
    }
}).mount('#app');