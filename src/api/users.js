export default function(instance) {
    return {
        signUp(payload) {
            return instance.post('users/signup', payload)
        },
        logIn(payload) {
            return instance.post('users/login', payload)
        }
    }
}