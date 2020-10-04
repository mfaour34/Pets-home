const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            console.log('Success signing up');
            return {
                ...state,
                authError: null,

            }
        case 'SIGNUP_ERROR':
            console.log('Error Signing up')
            return {
                ...state,
                authError: action.err.message,

            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signed out');
            return {
                ...state,
                authError: null,

            }
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError: null,

            }
        case 'LOGIN_ERROR':
            console.log('Login error');
            return {
                ...state,
                authError: 'Login Failed'
            }
        default:
            return state;
    }
}
export default authReducer