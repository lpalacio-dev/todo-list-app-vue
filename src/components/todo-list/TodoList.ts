import { defineComponent, computed, ref, onBeforeMount, watch } from 'vue'
import { useTodoStore } from '@/composables/useTodoStore'
import TodoTask from '@/components/todo-task/TodoTask.vue'

export default defineComponent({
    name: 'TodoList',
    components: { TodoTask },
    setup(){

        const { arrTodos, isTodoList } = useTodoStore()
        
        return {
            arrTodos,
            isTodoList
        }
    }
})