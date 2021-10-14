import axios from "axios";
import { IPost } from "../models/IPost";

const axiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/brwebagency/Posts-Comments/posts"
});

export default class PostsServices {
  static async getAllPosts() {
    return await axiosInstance.get("/")
      .then(data => data)
      .catch(e => console.log(e));
  };

  static async getPost (postId: number) {
    return await axiosInstance.get(`/${postId}`)
      .then(data => data)
      .catch(e => console.log(e));
  };

  static async createPost(post: IPost) {
    return await axiosInstance.post("/", post)
      .then(data => data)
      .catch(e => console.log(e));
  };

  static async editPost(post: IPost) {
    return await axiosInstance.put(`/${post.id}`, post)
      .then(data => data)
      .catch(e => console.log(e));
  };

  static async deletePost (postId: number) {
    return await axiosInstance.delete(`/${postId}`)
      .then(data => data)
      .catch(e => console.log(e));
  };
}
