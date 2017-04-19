import Http from './http';

export default class SignInService {
    static async login({username, password}) {
        const state = await Http.post('/public-api/signIn', {username, password});
        return state;
    }
}
