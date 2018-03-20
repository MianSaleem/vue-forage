const localForage = require('localforage');
var objectPath = require("object-path");

const vf = {
    install (Vue, options) {
        window.$vf = Vue.prototype.$vf = new Vue({
            name: 'vf',
            methods: {
                getItem (key) {
                    return new Promise((resolve, reject) => {
                        localForage.getItem(key)
                        .then(value => { resolve(value); })
                        .catch(err => { reject(err); });
                    });
                },
                setItem (key, value) {
                    return new Promise((resolve, reject) => {
                        localForage.setItem(key, value)
                        .then(value => { resolve(value); })
                        .catch(err => { reject(err); });
                    });
                },
                removeItem (key) {
                    return new Promise((resolve, reject) => {
                        localForage.removeItem(key)
                        .then(() => { resolve(); })
                        .catch(err => { reject(err); });
                    });
                },
                clear () {
                    return new Promise((resolve, reject) => {
                        localForage.clear()
                        .then(() => { resolve(); })
                        .catch(err => { reject(err); });
                    });
                },
                length () {
                    return new Promise((resolve, reject) => {
                        localForage.length()
                        .then(numberOfKeys => { resolve(numberOfKeys); })
                        .catch(err => { reject(err); });
                    });
                },
                key (keyIndex) {
                    return new Promise((resolve, reject) => {
                        localForage.key(keyIndex)
                        .then(keyName => { resolve(keyName); })
                        .catch(err => { reject(err); });
                    });
                },
                keys () {
                    return new Promise((resolve, reject) => {
                        localForage.keys()
                        .then(keys => { resolve(keys); })
                        .catch(err => { reject(err); });
                    });
                },
                iterate () {
                    return new Promise((resolve, reject) => {
                        localForage.iterate((value, key, iterationNumber) => {
                            resolve([value, key, iterationNumber]);
                        })
                        .then(result => { resolve(result); })
                        .catch(err => { reject(err); });
                    });
                },
                setDriver (drivreName) {
                    return new Promise((resolve, reject) => {
                        resolve(localForage.setDriver(drivreName));
                    });
                },
                config (options) {
                    return new Promise((resolve, reject) => {
                        resolve(localForage.config(options));
                    });
                },
                createInstance (options) {
                    return new Promise((resolve, reject) => {
                        resolve(localForage.createInstance(options));
                    });
                },
                jsonItem (prop, value) {
                    return new Promise((resolve, reject) => {
                        prop = prop.split(".");
                        let object = prop.shift();
                        localForage.getItem(object)
                        .then(data => {
                            objectPath.set(data, prop, value);
                            localForage.setItem(object, data)
                            .then(() => { resolve(); })
                            .catch(err => { reject(err); });
                        });
                    });
                },
                json (prop, value) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => { resolve(this.jsonItem(prop, value)); }, 0);
                    });
                },
            }
        })
    }
}

export default vf;
