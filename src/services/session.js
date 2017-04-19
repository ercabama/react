import Http from './http';

export default class SessionService {

    static async getCurrent() {
        const data = await Http.post('/public-api/session');
        if (data.response) {
            return data.response;
        }
        return data;
    }

    static async logout() {
        return Http.post('public-api/signOut');
    }

    static async chgPass({nPass, oPass, user}) {
        const result = await Http.post('/public-api/updatePassword', {nPass, oPass, user});
        return result;
    }

}
