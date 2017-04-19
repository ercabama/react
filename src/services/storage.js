import {map, castArray} from 'lodash';
import localForage from 'localforage';

export default class StorageService {

    static getSession() {
        return localForage.createInstance({name: 'session'}).getItem('userSession');
    }

    static setSession(user) {
        return localForage.createInstance({name: 'session'}).setItem('userSession', user);
    }

    static clear() {
        return Promise.all([
            StorageService.getSurveys().clear(),
            StorageService.getCalendar().clear()
        ]);
    }

    static fetch(storage) {
        const values = [];
        return storage.iterate(
            value => {
                values.push(value);
            }
        ).then(
            () => values
        );
    }

    static saveOne(storage, value) {
        return storage.setItem(value._id || new Date().getTime(), value);
    }

    static save(storage, values) {
        return Promise.all(map(
            castArray(values),
            value => StorageService.saveOne(storage, value)
        ));
    }
}
