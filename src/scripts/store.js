import { createApp } from 'vue'
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

// Create a new store instance.
const store = createStore({

  state () {
    return {
      account : {
        id : 0
      }
    }
  },
  mutations: {
    setAccount(state, payload) {
        state.account.id = payload
    }
  },
  plugins: [createPersistedState()]
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)

export default store