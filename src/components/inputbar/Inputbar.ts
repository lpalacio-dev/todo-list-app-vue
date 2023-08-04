import { defineComponent, computed, ref } from 'vue'
import { useTodoStore } from '@/composables/useTodoStore'

export default defineComponent({
    name: 'Inputbar',
    setup(){
        const inputTerm = ref()
        const { createTodo, getTodos } = useTodoStore()

        return {
            inputTerm,
            onSubmit: async () => {
                await createTodo(inputTerm.value)
                inputTerm.value = ''
                // await getTodos()
            }
        }
    }
})