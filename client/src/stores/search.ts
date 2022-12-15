import { api } from "./session";
import { reactive, ref } from "vue";
import type {Activity} from "./activities"

var Post = null as unknown as Activity;

export function setPost(post: Activity) {
    Post = post;
}

export function getPost(post: Activity) {
    return Post;
}



export default Post;