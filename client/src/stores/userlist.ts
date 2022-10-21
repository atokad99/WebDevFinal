import { reactive } from "vue";
import { User } from "./session";

const userList = reactive({
    users: [
        new User("Dakota","Marino","Password", true, "1234"), 
        new User("Melanie","Marino","Password", false, "5678"), 
        new User("Dylan","Altadonna","Password", false, "9102")
    ]
})

export default userList;
