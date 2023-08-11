const isAuthenticatedGuard = ( to:any , from:any, next:any ) => {

    const idToken = localStorage.getItem('idToken')

    if(idToken) {
        next()
    } else {
        next({name: 'login'})
    }

}

export default isAuthenticatedGuard