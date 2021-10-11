import axios from 'axios';
import * as types from './types'

export const store = {
    state: {
        apps: [],
        currentApp: Object,
    },
    actions: {
        APPS_GET_ALL: async (context) => {
            let { data } = await axios.get('/api/apps');
            context.commit('apps.get.all', data.apps);
        },
        APPS_GET_BY_ID: async (context, payload) => {
            let { data } = await axios.get(`/api/app/${payload}`);
            context.commit('apps.get.byId', data.app);
        }
    },
    mutations: {
        [types.APPS_GET_ALL](state, payload) {
            state.apps = payload
        },
        [types.APPS_GET_BY_ID](state, payload) {
            state.currentApp = payload
        },
    },
    getters: {
        appsAll: state => state.apps,
        appsCurrent: state => state.currentApp
    }
}