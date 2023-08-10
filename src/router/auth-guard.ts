import { auth} from '@/utils/firebaseConfig'

const isAuthenticatedGuard = ( to:any , from:any, next:any ) => {

    // const user = auth.currentUser;
    const user = localStorage.getItem('userUid')

    // console.log('EN EL GUARD', user)

    if(user) {
        // console.log("GUARD - Usuario autenticado:",user);
        next()
    } else {
        // console.log("GUARD - Usuario NO autenticado:", user);
        next({name: 'login'})
    }

    // let isAuth = false

    // auth.onAuthStateChanged(user => {
    //     if (user) {
    //       console.log("GUARD - Usuario autenticado:", user);
    //       isAuth = true
    //     } else {
    //       console.log("GUARD - Usuario NO autenticado:", user);
    //     }
    // });

    // if(isAuth) {
    //     console.log('EN EL IF')
    //     next()
    // } else {
    //     console.log('EN EL ELSE')
    //     next({name: 'login'})
    // }

}

export default isAuthenticatedGuard