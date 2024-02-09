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
            alltodo:[],
            newTodo:  ""

        };
    },
    methods: {
        removeTodo(i){
            axios
            .post('http://localhost:8888/Boolean/4-php-todo-list-json/php-todo-list-json/deleteTodo.php',
            {
                position : i
            },
            {
                headers: { 
                    'Content-Type' :   'multipart/form-data'
                }
            })
            .then((res) => {
                if(res.data.code == 200){
                    this.alltodo.splice(i,1);
                 }
            });


            console.log("Rimosso");
            this.alltodo.splice(i,1);
        },
        addTodo(i){
            axios
            .post('http://localhost:8888/Boolean/4-php-todo-list-json/php-todo-list-json/createNewTodo.php',
            {
                task : this.newTodo,
                id : i
            },
            {
                headers: { 
                    'Content-Type' :   'multipart/form-data'
                }
            })
            .then((res) => {
                if(res.data.code == 200){
                    this.task.push({id: i ,task: this.newTask, status: false});
                 }
                 this.newTask = '';
            });


            console.log("ADDED");
            this.alltodo.push({
                id: i,
                task: this.newTodo,
                done: false
            });
            this.newTask = '';

        }
    },
    mounted() {
        axios
            .get(
                'http://localhost:8888/Boolean/4-php-todo-list-json/php-todo-list-json/readjson.php'
            )
            .then((res) => {
                this.alltodo = res.data;
                console.log(this.alltodo);

            });
    }
}).mount('#app');