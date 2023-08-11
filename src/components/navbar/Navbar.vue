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
import { auth, onAuthStateChanged } from '@/utils/firebaseConfig'
import { useAuthStore } from '@/stores/auth'
import { useTodoStore } from '@/stores/todo'

const username = ref('')
const authStore = useAuthStore()
const todoStore = useTodoStore()
const router = useRouter()

onAuthStateChanged(auth, async (user) => {
      if (user) {
        todoStore.setUserId(user.uid)
        authStore.setUser(user);
        username.value = user.displayName || ''
        todoStore.getTodos()
      } else {
        // authStore.logout()
      }
});

const signOutFun = () => {
  if(!confirm("¿Estás seguro de cerrar sesión?")) {
    return
  }
  authStore.logout()
  router.push({name: 'login'})
}
</script>