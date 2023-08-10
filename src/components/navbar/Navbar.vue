<template>
    
<nav class="bg-white border-gray-200 shadow">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <RouterLink to="/" class="flex items-center">
        <img src="@/assets/logo.svg" class="h-8 mr-3" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap">Todo List</span>
    </RouterLink>
    <div class="w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
        <li>
          <div 
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
          >
            {{ username }}
          </div>
        </li>
        <li>
          <RouterLink 
            to=""
            @click="signOutFun" 
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            Cerrar sesión
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, signOut, onAuthStateChanged } from '@/utils/firebaseConfig'
import { useTodoStore } from '@/composables/useTodoStore'

console.log(auth)

const { clearTodoList } = useTodoStore()

const username = ref('')

onAuthStateChanged(auth, (user) => {
      if (user) {
        // El usuario está autenticado
          // console.log("Usuario autenticado:", user.displayName);
        username.value = user.displayName || '';
          
      } else {
        // El usuario no está autenticado (ha cerrado sesión o no ha iniciado sesión)
          // console.log("Usuario no autenticado");
        username.value = ''
      }
  });

const router = useRouter()
const signOutFun = async() => {
  if(!confirm("¿Estás seguro de cerrar sesión?")) {
    // console.log('No hizo nada')
    return
  }

  try {
    // console.log('Antes de CERRAR SESIÓN', auth.currentUser)
    await signOut(auth);
    clearTodoList();
    localStorage.removeItem('userUid')
    localStorage.removeItem('accessToken')
    
    // console.log('DESPUES de CERRAR SESIÓN', auth.currentUser)
    // console.log("El usuario ha cerrado sesión")
    router.push({name: 'login'})
  } catch (error) {
    console.log(error)
  }
}
</script>