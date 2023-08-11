import { defineStore } from 'pinia'
import { auth } from '@/utils/firebaseConfig'
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    linkWithPopup
} from "firebase/auth";
import { type MyFirebaseUser } from '@/interfaces/auth'
import { useTodoStore } from '@/composables/useTodoStore'

interface Store {
    user?: MyFirebaseUser | null,
    idToken: string
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        idToken: ''      
    }) as Store,
    actions: {
        setUser( user: MyFirebaseUser) {
            this.user = user
        },

        async loginWithEmailPassword(email:string, password:string) {
            try {     
                const { user } =  await signInWithEmailAndPassword(auth, email, password)
                // console.log(user)
                const idToken = await user.getIdToken(); // Obtener el token de acceso
                this.user = user
                this.idToken = idToken
                localStorage.setItem('idToken', idToken);
                await useTodoStore().getTodos();
                return { ok: true }
                
            } catch (error) {
                console.log("Error AL INICIAR SESION:", error);
                const message = 'Error al iniciar sesión, verifique su correo o contraseña'
                return { ok: false, message }
            }
        },

        async createUserEmailAndPassword(name:string, email:string, password:string) {
            try {     
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                    
                await updateProfile(user, {
                    displayName: name,
                })

                const idToken = await user.getIdToken(); // Obtener el token de acceso

                this.user = user
                this.idToken = idToken
                localStorage.setItem('idToken', idToken);

                return { ok: true }
                
            } catch (error) {
                const message = 'Lo sentimos, el correo ya está en uso'
                return { ok: false, message }
            }
        },

        async createUserGoogle() {
            const provider = new GoogleAuthProvider();
            try {
                const { user } =  await signInWithPopup(auth, provider)
                const idToken = await user.getIdToken(); // Obtener el token de acceso
                this.user = user
                this.idToken = idToken;
                localStorage.setItem('idToken', idToken);
                await useTodoStore().getTodos();
                return { ok: true }

            } catch (error) {
                console.log(error);
                return { ok: false }
            }
            
        },

        async createUserGithub() {
            const provider = new GithubAuthProvider();

            try {
                const { user } =  await signInWithPopup(auth, provider)
                const idToken = await user.getIdToken(); // Obtener el token de acceso
                this.user = user
                this.idToken = idToken;
                localStorage.setItem('idToken', idToken);
                await useTodoStore().getTodos();
                return { ok: true }

            } catch (error) {
                console.log(error);
                return { ok: false }
            }
        },

        async logout() {
            try {
                await signOut(auth);
                this.clearState()
            } catch (error) {
                console.log(error)
            }
        },

        clearState() {
            localStorage.removeItem('idToken')
            useTodoStore().clearTodoList();
            this.user = null,
            this.idToken = '' 
        }

    },
})