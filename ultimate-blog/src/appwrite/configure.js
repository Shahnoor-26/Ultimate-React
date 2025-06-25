import { Client, ID, Databases, Storage, Query } from "appwrite";
import { configure } from "../config/config";

export class DataService {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(configure.appwriteURL)
      .setProject(configure.appwriteProjectID);

    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // database methods
  createPost = async ({ title, content, picture, status, userId, slug }) => {
    try {
      return await this.database.createDocument(
        configure.appwriteDatabaseID,
        configure.appwriteCollectionID,
        String(slug),
        {
          title,
          content,
          picture,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite service error :: failed to create post!\n", error);
      return null;
    }
  };

  updatePost = async (slug, { title, content, picture, status }) => {
    try {
      return await this.database.updateDocument(
        configure.appwriteDatabaseID,
        configure.appwriteCollectionID,
        slug,
        {
          title,
          content,
          picture,
          status,
        }
      );
    } catch (error) {
      console.log("appwrite service error :: failed to update post!\n", error);
      return null;
    }
  };

  deletePost = async (slug) => {
    try {
      await this.database.deleteDocument(
        configure.appwriteDatabaseID,
        configure.appwriteCollectionID,
        slug
      );

      return true;
    } catch (error) {
      console.log("appwrite service error :: failed to delete post!\n", error);
      return false;
    }
  };

  findPost = async (slug) => {
    try {
      return await this.database.getDocument(
        configure.appwriteDatabaseID,
        configure.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("appwrite service error :: failed to get post!\n", error);
      return null;
    }
  };

  findPosts = async (queries = [Query.equal("status", "active")]) => {
    try {
      return await this.database.listDocuments(
        configure.appwriteDatabaseID,
        configure.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("appwrite service error :: failed to get posts!\n", error);
      return null;
    }
  };

  // bucket methods (storage)
  fileUpload = async (file) => {
    try {
      return await this.bucket.createFile(
        configure.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("appwrite service error :: failed to upload file!\n", error);
      return null;
    }
  };

  fileDelete = async (fileid) => {
    try {
      await this.bucket.deleteFile(configure.appwriteBucketID, fileid);
      return true;
    } catch (error) {
      console.log("appwrite service error :: failed to delete file!\n", error);
      return false;
    }
  };

  filePreview = (fileid) => {
    try {
      return this.bucket.getFilePreview(configure.appwriteBucketID, fileid);
    } catch (error) {
      console.log("appwrite service error :: failed to preview file!\n", error);
      return null;
    }
  };
}

export const service = new DataService();
