const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Homework app',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        addTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
                this.nuevaTarea = ''
                localStorage.setItem('homework-app', JSON.stringify(this.tareas))
        },
        remove(index){
            this.tareas.pop()
            localStorage.setItem('homework-app', JSON.stringify(this.tareas))
        },

        changeStade(index){
            let a = this.tareas[index - 1]
            a.estado = true
            localStorage.setItem('homework-app', JSON.stringify(this.tareas))
        },
        changeStadeAll(){
            let a = this.tareas
            for(let i = 0; i < a.length; i++){
               let b = a[i]
               b.estado = true;
            }
            localStorage.setItem('homework-app', JSON.stringify(this.tareas))
        }
    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('homework-app'));
        if (datosDB === null) {
            this.tareas = [];
        }
        else{
            this.tareas = datosDB;
        }
        console.log('App made with love by Erick')
    }
    
})
