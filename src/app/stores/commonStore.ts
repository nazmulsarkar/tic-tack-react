import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore {
  error: ServerError | null = null;
  token: string | null = window.localStorage.getItem("tictac_jwt");
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem("tictac_jwt", token);
        } else {
          window.localStorage.removeItem("tictac_jwt");
        }
      }
    );
  }

  setServerError = (error: ServerError) => {
    this.error = error;
  };

  setToken = (token: string | null) => {
    this.token = token;
  };

  setAppLoaded = () => {
    this.appLoaded = true;
  };
}
