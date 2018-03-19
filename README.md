# vue-forage
A [Vue.js](https://vuejs.org/) wrapper plugin for [localForage](https://github.com/localForage/localForage)


### Installation

Simply install the [npm package `vue-forage`](https://www.npmjs.com/package/vue-forage):

```
npm i vue-forage -S
```
If you prefer yarn
```
yarn add vue-forage
```

### Using vue-forage

In your main JavaScript file (eg. `main.js` or `app.js`):

```javascript
// Import Vue and vue-forage
import Vue from 'vue';
import vf from 'vue-forage';

// Tell Vue.js to use vue-forage
Vue.use(vf);
```

In your app/components:

```javascript
// configure your local storage
// dont forget to import localForage before setting the driver
// import localForage from 'localforage';
this.$vf.config({
    driver: localforage.LOCALSTORAGE,
    name: 'vue-forage-demo'
});

// change driver
this.$vf.setDriver(localforage.LOCALSTORAGE);

// SET ITEM
// this.$vf.setItem('key', 'value');

this.$vf.setItem('app', 'Vue Forage');

// or

this.$vf.setItem('app', { app: 'Vue Forage', version: '1.0.0', author: { name: 'John Doe', email: 'john.doe@mail.com' }});

// GET ITEM
// this.$vf.getItem('key'');

this.$vf.getItem('app');

// REMOVE ITEM
// this.$vf.removeItem('key'');

this.$vf.removeItem('app');

this.$vf.clear(); // delete everything

// Forage will stringify/parse the json object automatically. 
```
---

* Please refer to localForage documentation for more info, you can view the localForage Docs here: https://localforage.github.io/localForage


```javascript
this.$vf.createInstance({
    storeName: 'user'
}).then((store) => {
    store.setItem('key', ['some', 'value']);
    store.length().then((keys) => {
        console.log(keys);
    });
    store.iterate((value, key, num) => {
        return [key, value];
    }).then((result) => {
        console.log(result);
    });
});
```

**API will work same as localForage in your vue app with `this.$vf`, only the json has been added to update json `jsonItem` objects easily.**

You can use . notation for json object, if you need to update the version in above app code then you can simple 
```
this.$vf.json('app.version', '1.0.1');
``` 
and to update author name
```
this.$vf.json('app.author.name', 'Mian Saleem');
```


## Contributing

Any sort of contributions and feedback is much appreciated. Just
leave an issue or pull-request!
