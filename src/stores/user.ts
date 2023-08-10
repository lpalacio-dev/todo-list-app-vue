import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import firebaseApi from '@/api/firebaseApi'
import { auth, onAuthStateChanged } from '@/utils/firebaseConfig'

export const useUserStore = defineStore('user', {
    // state: () => ({
    //     user: null,      
    // }),
    // actions: {
    //     setUser( user: any) {
    //         this.user = user
    //     }
    // }
})