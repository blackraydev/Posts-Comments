import axios from "axios";
import { IComment } from "../models/IComment";

const axiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/brwebagency/Posts-Comments/comments"
});

export default class CommentsServices {
  static async getAllComments() {
    return await axiosInstance.get("/")
      .then(data => data)
      .catch(e => console.log(e));
  };

  static async createComment(comment: IComment) {
    return await axiosInstance.post("/", comment)
      .then(data => data)
      .catch(e => console.log(e));
  };

  static async editComment(comment: IComment) {
    return await axiosInstance.put(`/${comment.id}`, comment)
      .then(data => data)
      .catch(e => console.log(e));
  };

  static async deleteComment(commentId: number) {
    return await axiosInstance.delete(`/${commentId}`)
      .then(data => data)
      .catch(e => console.log(e));
  };

  static async deleteSeveralComments(postId: number) {
    return await axiosInstance.delete(`/${postId}`)
      .then(data => data)
      .catch(e => console.log(e));
  }
}
