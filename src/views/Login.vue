<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="@/assets/logo.svg" alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar sesión
        </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="" @submit.prevent="onSubmit">
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

            <div v-if="errorForm" class="text-center italic text-red-500 sm:text-sm">
                {{ errorForm }}
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Acceder
                </button>
            </div>
        </form>
        <hr class="mt-5 mb-5">
        <!-- <div class="px-6 sm:px-0 max-w-sm">
            <button type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
        </div> -->
        <div class="flex justify-center">
            <button 
                @click="loginWithGoogle"
                class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                <span>Continue with Google</span>
            </button>
        </div>

        <p class="mt-10 text-center text-sm text-gray-500">
            ¿No tienes una cuenta?
            <router-link :to="{ name: 'register' } " class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Crear cuenta</router-link>
        </p>
        
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@/utils/firebaseConfig'

const userForm = ref({
    email: '',
    password: ''
})

const errorForm = ref('')

const router = useRouter()

const onSubmit = async() => {

    // console.log(userForm.value)
    const { email, password } = userForm.value
    userForm.value.email = ''
    userForm.value.password = ''
    errorForm.value = ''

    try {     
        const { user }  = await signInWithEmailAndPassword(auth, email, password)
        // console.log("INICIO DE SESION:", user);

        localStorage.setItem( 'userUid', user.uid )
        
        const idToken = await user.getIdToken(); // Obtener el token de acceso
        localStorage.setItem('accessToken', idToken);
        
        router.push({ name: 'home' })
    } catch (error) {
        errorForm.value = 'Error al iniciar sesión, verifique su correo o contraseña'
        // console.log("Error AL INICIAR SESION:", error);
    }
}

const loginWithGoogle = () => {
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    // .then(async(result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     // const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...

    //     localStorage.setItem( 'userUid', user.uid )
        
    //     const idToken = await user.getIdToken(); // Obtener el token de acceso
    //     localStorage.setItem('accessToken', idToken);
        
    //     router.push({ name: 'home' })

    // }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    // });
}


</script>