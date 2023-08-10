<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="@/assets/logo.svg" alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Crear cuenta</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="" @submit.prevent="onSubmit">
            <div>
                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                <div class="mt-2">
                    <input 
                        id="name" 
                        name="name" 
                        v-model="userForm.name"
                        type="text" 
                        required 
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                </div>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo electrónico</label>
                <div class="mt-2">
                    <input 
                        id="email"
                        name="email"
                        v-model="userForm.email"
                        type="email"
                        autocomplete="email"
                        required
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                    <!-- <div class="text-sm">
                        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div> -->
                    </div>
                    <div class="mt-2">
                        <input
                            id="password"
                            name="password"
                            v-model="userForm.password"
                            type="password"
                            autocomplete="current-password"
                            required
                            class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                    </div>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Registrarse
                </button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta?
            <router-link :to="{ name: 'login' } " class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Iniciar sesión</router-link>
        </p>
        
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, createUserWithEmailAndPassword, updateProfile } from '@/utils/firebaseConfig'

const userForm = ref({
    name: '',
    email: '',
    password: ''
})

const router = useRouter()

const onSubmit = async() => {

    console.log(userForm.value)
    const { email, password, name } = userForm.value
    userForm.value.name = ''
    userForm.value.email = ''
    userForm.value.password = ''

    try {     
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log("Usuario creado:", userCredential);

        localStorage.setItem( 'userUid', userCredential.user.uid )
        
        const idToken = await userCredential.user.getIdToken(); // Obtener el token de acceso
        localStorage.setItem('accessToken', idToken);

        const user = userCredential.user; // Obtén el objeto de usuario

        await updateProfile(user, {
            displayName: name,
        })

        console.log("Nombre de usuario actualizado:");

        router.push({ name: 'home' })

    } catch (error) {
        console.error("Error al crear el usuario:", error);
    }
}



</script>