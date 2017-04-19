/* global btoa fetch */
export default class Http {
    static async get(url) {
        try {
            const response = await fetch(url, {credentials: 'same-origin'});
            return response.json();
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    static async post(url, body) {
        try {
            const response = await fetch(url, {
                method: 'post',
                credentials: 'same-origin',
                body: JSON.stringify(body),
                headers: {
                    'content-type': 'application/json'
                }
            });
            if (response.ok) {
                return response.json();
            }
            return response.status;
        } catch (err) {
            console.error(err);
        }
    }
}
