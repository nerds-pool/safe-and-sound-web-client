import { SET_USER, SET_AUTH } from "./action.types";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setAuth = (isAuth) => ({
  type: SET_AUTH,
  payload: isAuth,
});
