import { Client, Account, ID } from "appwrite";
import { configure } from "../config/config.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(configure.appwriteURL)
      .setProject(configure.appwriteProjectID);

    this.account = new Account(this.client);
  }

  signup = async ({ email, password, name }) => {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) return this.login({ email, password });
      else return userAccount;
    } catch (error) {
      console.log("appwrite service error :: failed to signup!\n", error);
    }
  };

  login = async ({ email, password }) => {
    try {
      await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("appwrite service error :: failed to login!\n", error);
    }
  };

  currentUser = async () => {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service error :: current user not found!\n", error);
    }

    return null; // fallback
  };

  logout = async () => {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite service error :: failed to logout!\n", error);
    }
  };
}

export const auth = new AuthService();
