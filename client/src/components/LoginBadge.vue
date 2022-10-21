<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
    import userList from '../stores/userlist'

</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Login</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a v-for="user in userList.users" class="dropdown-item is-light" @click="login(user.firstName, user.lastName, user.password,user.isAdmin, user.userID)">{{ user.firstName }}</a>
                </div>
            </div>
        </div>
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
