<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
    //import userList from '../stores/userlist'
    import { getUsers, addUser, type User } from "../stores/users";
    import { computed, reactive, ref, watch } from "vue";

    const users = reactive([] as User[]);
    getUsers().then( x=> users.push(...x.users));
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <RouterLink class="button is-light" to="login">
            Log in
        </RouterLink>
    </div>
    <div v-else>
        Welcome {{session.user.firstName}} {{session.user.lastName}}
        (<a @click="logout()">
            Log out
        </a>)
    </div>
</template>

<style scoped>

</style>
