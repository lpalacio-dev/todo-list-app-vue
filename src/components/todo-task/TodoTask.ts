import { defineComponent, computed, ref, onBeforeMount } from 'vue'
import { useTodoStore } from '@/composables/useTodoStore'

export default defineComponent({
    name: 'TodoTask',
    props: ['todoTask'],
    setup(props){

        // const isChecked = ref(false)
        const { deleteTodo, doneTodo } = useTodoStore()
        const task = props.todoTask

        const deleteTodoFun =  (id:string) => {
            deleteTodo(id)
        }

        const funcion = async(todo) => {
            await doneTodo(todo)
            console.log(todo)
        }

        return {
            // isChecked,
            funcion,
            task,
            deleteTodoFun
        }
    }
})