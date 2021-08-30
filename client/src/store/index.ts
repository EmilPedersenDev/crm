import Vue from "vue";
import Vuex from "vuex";
import api from "../service/api";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
// import UserModel from "../service/models/User";

Vue.use(Vuex);

interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  personalNumber?: number;
  password?: string;
  role?: string;
}

interface Login {
  email: string;
  password: string;
}

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("jwt") || "",
    user: <User>{},
  },
  actions: {
    login: async ({ commit }, payload: Login) => {
      try {
        const { data } = await api.post("/auth/login", payload);

        commit("setUser", data.user);
        commit("setToken", data.token);
      } catch (err) {
        throw err;
      }
    },
    logout: async ({ commit }) => {
      localStorage.removeItem("jwt");
      commit("setToken", "");
      commit("setUser", {});
    },
    getUser: async ({ commit, state }) => {
      try {
        const token: any = jwtDecode(state.token);

        const { data } = await api.get(`/user/${token.id}`, {
          headers: {
            Authentication: state.token,
          },
        });

        if (!data) {
          throw new Error("No user was provided.");
        }

        commit("setUser", data);
      } catch (err) {
        throw err;
      }
    },
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = { ...payload };
    },
    setToken: (state, payload) => {
      if (payload) {
        localStorage.setItem("jwt", payload);
      }
      state.token = payload;
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
    isAuthenticated: (state) => {
      return !!state.token;
    },
  },
  modules: {},
});
