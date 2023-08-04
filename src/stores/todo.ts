import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import firebaseApi from '@/api/firebaseApi'

interface State {
    arrTodos: TodoTask[],
    isTodoList: boolean
}

interface TodoTask {
    id: string,
    texto: string,
    status: boolean,
}

export const useTodoStore = defineStore('todo', {
    state: ():State => ({
        arrTodos: [],
        isTodoList: false
    }),
    actions: {
        async getTodos () {
            // console.log('ANTES DEL GETTODOS', this.arrTodos)
            const { data } = await firebaseApi.get( '/todos.json')
            // console.log('primera respuesta', data)

            if( !data ) {
                this.arrTodos = []
                this.isTodoList = false
                return 
            }

            const arrayData = Object.entries(data).map(([key, value]) => {
                // console.log(value)
                const { texto, status } = value
                return {
                    id: key,
                    texto,
                    status
                };
            });

            // console.log('El array',arrayData);
            this.arrTodos = arrayData
            this.isTodoList = true
            // console.log('EN EL GETTODOS', this.arrTodos)
            return arrayData
        },

        async createTodo(texto: string) {
            // console.log('ANTES DE CREAR', this.arrTodos)
            const dataToSave = { texto: texto, status: false}
            const { data } = await firebaseApi.post( '/todos.json', dataToSave )
            
            this.arrTodos.push({id: data.name, texto, status: false})
            this.isTodoList = true
            // console.log('EN EL CREATETODO', this.arrTodos)
        },

        async updateTodo(todo: TodoTask, changeStatus: boolean = false) {
            // console.log('ANTES DE DONE', todo.status)
            if(changeStatus) {
                todo.status = !todo.status
            }
            // console.log('EN DONE TODO', todo.status)
            const dataToSave = { texto: todo.texto, status: todo.status}
            await firebaseApi.put(`/todos/${todo.id}.json`, dataToSave)

            const idx = this.arrTodos.map( t => t.id).indexOf( todo.id )
            this.arrTodos[idx] = todo
        },

        async deleteTodo(id: string) {
            // console.warn('El ID', id)
            await firebaseApi.delete(`/todos/${id}.json`)
            // console.log('ANTES DE ELIMINAR', this.arrTodos)
            this.arrTodos = this.arrTodos.filter( todo => todo.id !== id )
            if(this.arrTodos.length === 0) {
                // console.log('NO HAY NADA EN EL ARRAY')
                this.isTodoList = false
            }
            // console.log('EN EL DELETETODOS', this.arrTodos)
            return this.arrTodos
        }
    }
})