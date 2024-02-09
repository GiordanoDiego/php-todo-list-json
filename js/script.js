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
        /*
                addTodo(){
            axios
                .post('http://localhost/Lezione_08_02_24/php-todo-list-json/BACKEND/addTask.php',
                {
                    task: this.newTask,
                    status: false
                },
                {
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                })
                .then((res) =>{
                    if(res.data.code == 200){
                       this.task.push({task: this.newTask, status: false});
                    }
                    this.newTask = '';
                });
        }
        */
        addTodo(){
            axios
            .post('http://localhost:8888/Boolean/4-php-todo-list-json/php-todo-list-json/createNewTodo.php',
            {
                task : this.newTodo
            },
            {
                headers: { 
                    'Content-Type' :   'multipart/form-data'
                }
            })
            .then((res) => {
                if(res.data.code == 200){
                    this.task.push({task: this.newTask, status: false});
                 }
                 this.newTask = '';
            });


            console.log("ADDED");
            this.alltodo.push({
                task: this.newTodo,
                done: false
            });

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