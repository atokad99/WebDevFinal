import { reactive } from "vue";
import { stringifyQuery } from "vue-router";

const session = reactive( {
    user: null as User | null,
});

export function login(firstName: string, lastName: string, password: string, isAdmin: boolean, userID: string) {
    session.user = {
        firstName,
        lastName,
        password,
        isAdmin,
        userID,
    };
}


export function logout() {
    session.user = null;
}

export class User {
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
}

export default session;