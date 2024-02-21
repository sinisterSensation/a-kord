import {makeAutoObservable} from 'mobx';

export default class ServiceStore {
    constructor() {
        this._services = [
            {id: 1, name: 'Подкачка колес', price: 80},
            {id: 2, name: 'Балансировка', price: 100},
            {id: 3, name: 'Монтаж/Демонтаж', price: 100},
        ]
        makeAutoObservable(this)
    }

    setTypes(services) {
        this._services = services
    }

    get services() {
        return this._services
    }
}