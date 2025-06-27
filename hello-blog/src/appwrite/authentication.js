import { Account, Client, ID } from "appwrite";
import env from "../env/env.js";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(env.appwrite_endpoint)
      .setProject(env.appwrite_project_id);

    this.account = new Account(this.client);
  }

  signup = async ({ email, password, name }) => {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (user) await this.login(email, password);
      else return user;
    } catch (error) {
      console.log("Appwrite Service Error - Signup", error);
    }
  };

  login = async ({ email, password }) => {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite Service Error - Login", error);
    }
  };

  logout = async () => {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service Error - Logout", error);
    }
  };

  currentUser = async () => {
    try {
      const userdata = await this.account.get();
      if (userdata) return userdata;
      else return false;
    } catch (error) {
      console.log("Appwrite Service Error - Current User", error);
    }
  };
}

export const Auth = new AuthService();
