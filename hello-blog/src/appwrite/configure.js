import env from "../env/env.js";
import { Databases, Storage, Query, Client, ID } from "appwrite";

class StoreService {
  client = new Client();
  storage;
  databases;

  constructor() {
    this.client
      .setEndpoint(env.appwrite_database_id)
      .setProject(env.appwrite_project_id);

    this.storage = new Storage(this.client);
    this.databases = new Databases(this.client);
  }

  // Database Section
  createDoc = async ({ docId, title, content, picture, status, userId }) => {
    try {
      return await this.databases.createDocument(
        env.appwrite_database_id,
        env.appwrite_collection_id,
        docId,
        {
          title,
          content,
          picture,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service Error - Create Document", error);
    }
  };

  updateDoc = async (docId, { title, content, picture, status }) => {
    try {
      return await this.databases.updateDocument(
        env.appwrite_database_id,
        env.appwrite_collection_id,
        docId,
        {
          title,
          content,
          picture,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service Error - Update Document", error);
    }
  };

  deleteDoc = async (docId) => {
    try {
      await this.databases.deleteDocument(
        env.appwrite_database_id,
        env.appwrite_collection_id,
        docId
      );

      return true;
    } catch (error) {
      console.log("Appwrite Service Error - Delete Document", error);
      return false;
    }
  };

  findDoc = async (docId) => {
    try {
      return await this.databases.getDocument(
        env.appwrite_database_id,
        env.appwrite_collection_id,
        docId
      );
    } catch (error) {
      console.log("Appwrite Service Error - Find Document", error);
      return false;
    }
  };

  findDocs = async (queries = [Query.equal("status", "active")]) => {
    try {
      return await this.databases.listDocuments(
        env.appwrite_database_id,
        env.appwrite_collection_id,
        queries
      );
    } catch (error) {
      console.log("Appwrite Service Error - Find Documents", error);
      return false;
    }
  };

  // Storage Section
  uploadFile = async (file) => {
    try {
      return await this.storage.createFile(
        env.appwrite_storage_id,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Service Error - Upload File", error);
      return false;
    }
  };

  deleteFile = async (fileId) => {
    try {
      await this.storage.deleteFile(env.appwrite_storage_id, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite Service Error - Delete File", error);
      return false;
    }
  };

  filePreview = (fileId) => {
    try {
      return this.storage.getFilePreview(env.appwrite_storage_id, fileId);
    } catch (error) {
      console.log("Appwrite Service Error - Preview File", error);
    }
  };
}

export const Service = new StoreService();
