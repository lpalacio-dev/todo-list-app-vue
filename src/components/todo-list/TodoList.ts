import { defineComponent, computed, ref, onBeforeMount, watch } from 'vue'
import { useTodoStore } from '@/composables/useTodoStore'
import TodoTask from '@/components/todo-task/TodoTask.vue'

export default defineComponent({
    name: 'TodoList',
    components: { TodoTask },
    setup(){

        // let todos = ref()
        // let isList = ref()

        const { arrTodos, isTodoList, getTodos } = useTodoStore()
        
        onBeforeMount(async () => {              
            await getTodos()
        });

        watch(arrTodos, (nuevoValor) => {
            // console.log('en el watch ARRTODOS', arrTodos)
            // todos.value = nuevoValor
            // console.log('en el watch todos.value', todos.value)

            // console.log(nuevoValor)

            // if(nuevoValor.length > 0) {
            //     isTodoList = true
            // } else {
            //     isTodoList.value = false
            // }
        });

        return {
            arrTodos,
            // todos,
            isTodoList
        }
    }
})