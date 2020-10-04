

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(res => {
                firebase.auth().onAuthStateChanged(function (user) {
                    let id = res.user.uid;
                    firestore.collection('users').doc(id).set({
                        firstName: newUser.firstname,
                        lastName: newUser.lastname,
                        email: newUser.email
                    }).then(() => {
                        dispatch({ type: 'SIGNUP_SUCCESS' });
                    }).catch(err => {
                        dispatch({ type: 'SIGNUP_ERROR', err })
                    })
                })
            }).catch(err => {
                dispatch({ type: 'SIGNUP_ERROR', err })
            })
    }
}


export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            
            dispatch({type:'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
            .then(() => {
                
                dispatch({ type: 'SIGNOUT_SUCCESS' })
            })
            .catch(e => {
                console.error('Sign Out Error', e);
            });
    }
}