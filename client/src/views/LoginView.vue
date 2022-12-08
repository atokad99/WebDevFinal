<script setup lang="ts">
    import session, { login } from '../stores/session'
    import { getUsers, type User } from "../stores/users";
    import { reactive, ref } from "vue";

    const users = reactive([] as User[]);
    getUsers().then( x=> users.push(...x.users));

    const _id = ref('');
    const password = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const isAdmin = ref(null as unknown as boolean);
    const tag = ref('');

    function setVariables(user: User) {
        _id.value = user._id as string;
        firstName.value = user.firstName;
        lastName.value = user.lastName;
        isAdmin.value = user.isAdmin;
        tag.value = user.tag;
    }

    function submitData() {
        let k: keyof typeof users;
        for (k in users) {
            console.log(tag.value);
            if (users[k].tag as string === tag.value) {
                console.log("made it here");
                if (users[k].password === password.value) {
                    login(users[k]._id,users[k].firstName,users[k].lastName,users[k].password,users[k].isAdmin,users[k].tag)
                }
            }
        }
        console.log(session.user);
    }
</script>

<template>
    <h3 class="title is-3 is-centered has-text-centered" style="padding-top:50px;">Login</h3>
    <div class="columns is-centered" style="padding-top:40px;">
        <div class="column is-centered is-6">
            <div class="field">
                <label class="label">User</label>
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>Select User</span>                            
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a v-for="user in users" class="dropdown-item is-light"  @click="setVariables(user)">{{ user.firstName + " " + user.lastName }}</a>                            
                        </div>
                    </div>
                    <h4 class="title is-4 padleft">{{(firstName + " " + lastName)}}</h4>                         
                </div>                        
            </div>   

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password">
                </div>
            </div>

            <div class="field">
                <label class="label">Tag </label>    
                <h4 class="title is-4">{{tag}}</h4>            
            </div>

            <button class="button is-primary" @click="submitData()">Sign in</button>
        </div>
    </div>
</template>


<style scoped>
.spacing {
    padding-top:20px;
}
.padleft {
    padding-left:20px;
}
</style>