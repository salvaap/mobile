import Vuex from "vuex";

export default new Vuex.Store({
    state: {
        user: null,
        categories: [],
        selected_category: null,
        cart: {
            count: 0,
            items: [],
        }
    },
    mutations: {
        SET_CATEGORY(state, value) {
            state.selected_category = value;
        },
        SET_CATEGORIES(state, value) {
            state.categories = value;
        },
        SET_USER(state, value) {
            state.user = value;
        },
        ADD_CART_ITEM(state, value) {
            state.cart.items.push(value);
        }
    },
    actions: {
        populateCategories({state, commit}, value) {
            console.log(state);
            if(value.length > 0) {
                commit('SET_CATEGORIES', value);
            }
        },
        selectCategory({ state, commit, getters }, value) {
            console.log(state);
            let category = getters.getCategoryById(value);
            if(category) {
                commit('SET_CATEGORY', category);
            }
        },
        populateUser({state, commit}, value) {
            console.log(state);
            if(value) {
                commit('SET_USER', value);
            }
        }
    },
    getters: {
        catLength: state => {
            return state.categories.length;
        },
        getCategoryById: state => id => {
            return state.categories.find(category => category.id === id);
        },
    },
});