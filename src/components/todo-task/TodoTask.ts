import { defineComponent, ref, watchEffect } from 'vue'
import { useTodoStore } from '@/composables/useTodoStore'

export default defineComponent({
    name: 'TodoTask',
    props: ['todoTask'],
    setup(props){

        const { deleteTodo, updateTodo } = useTodoStore()
        const task = props.todoTask
        
        const input = ref(null)

        watchEffect(() => {
            if (input.value) {
              input.value.focus()
            } else {
              // not mounted yet, or the element was unmounted (e.g. by v-if)
            }
          })
        
        const deleteTodoFun =  (id:string) => {
            deleteTodo(id)
        }

        const doneTodoFun = async(todo) => {
            await updateTodo(todo, true)
            // console.log(todo)
        }

         // Crea una referencia reactiva para almacenar el texto editado
        const editedText = ref(task.texto);

        // Función para cambiar el estado de edición
        const startEditing = (task) => {
        task.editing = !task.editing;
        }

        // Función para finalizar la edición y actualizar el texto original
        const finishEditing = async (task) => {
            task.editing = false;
            if( editedText.value.length > 0 ) {
                task.texto = editedText.value;
            } 
            await updateTodo(task)
        };

        return {
            input,
            editedText,
            startEditing,
            finishEditing,

            doneTodoFun,
            task,
            deleteTodoFun
        }
    }
})