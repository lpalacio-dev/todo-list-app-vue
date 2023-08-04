import { computed } from 'vue'
import { useTodoStore as useTodoStorePinia } from '@/stores/todo'

export const useTodoStore = () => {
    const store = useTodoStorePinia()

    return {
        arrTodos: computed( () => store.arrTodos ),
        isTodoList: computed<boolean>( () => store.isTodoList),
        getTodos: () => store.getTodos(),
        createTodo: (texto: string) => store.createTodo(texto),
        updateTodo: (todo :any, changeStatus = false) => store.updateTodo(todo, changeStatus),
        deleteTodo: (id: string) => store.deleteTodo(id)
    }
}