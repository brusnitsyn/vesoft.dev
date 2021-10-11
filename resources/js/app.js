require('./bootstrap');

import Vue from 'vue';
import App from './core/App';
import router from './bootstrap/router';
import store from './core/store';

import moment from 'moment';
import Editor from 'vue-editor-js/src/index';
// import VueCompositionApi from '@vue/composition-api';

window.Vue = require('vue').default;

// Vue.use(VueCompositionApi);
Vue.use(Editor);

Vue.filter('appDetailFormatDate', function (value) {
    if (value) {
        return moment(String(value)).format('DD.MM.YYYY');
    }
});

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});