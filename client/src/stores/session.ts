import { computed, reactive } from "vue";
import { stringifyQuery } from "vue-router";
import myFetch from "@/services/myFetch";
import type {User} from "./users";

const session = reactive( {
    user: null as User | null,
    loading: 0,
    error: null as string | null,
    messages: [] as Message[],
});
export default session;

export function setError(error: string | null) {
    session.error = error;
    if(error){
        session.messages.push({ type: 'danger', text: error});
    }
}

export const isLoading = computed(() => !! session.loading);

export async function api<T>(url: string, data: any = null, method?: string ){
    session.loading++;
    setError(null);
    console.log(url);
    console.log(data);
    try {
        return await myFetch<T>(url, data, method);
    } catch (error:any) {
        console.log("error here?");
        setError(error.message ?? error as string);
        throw error;
    }finally{
        session.loading--;
    }
    return {} as T;
}

export function login(_id: string, firstName: string, lastName: string, password: string, isAdmin: boolean, tag: string) {
    session.user = {
        _id,
        firstName,
        lastName,
        password,
        isAdmin,
        tag,
    };
}

export function logout() {
    session.user = null;
}

/*export class User {
    public firstName: string;
    public lastName: string;
    public password: string;
    public isAdmin: boolean;
    public userID: string;

    constructor(firstName: string, lastName: string, password: string, isAdmin: boolean, userID: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.isAdmin = isAdmin;
        this.userID = userID;
    }
}*/

export interface Message {
    text: string;
    type: 'danger' | 'warning' | 'success' | 'info';
}

