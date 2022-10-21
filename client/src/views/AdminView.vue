<script setup lang="ts">
import { ref } from 'vue';
import session from '../stores/session';
import userList from '../stores/userlist'

const addUser = ref(false);

</script>

<template>
    <div v-if="session.user">
        <div v-if="session.user.isAdmin">
            <br><br>
            <h1 class="title has-text-centered">Admin</h1>
            <p class="has-text-centered">Administrative functions</p>
            <br>
            <table class="table is-bordered mx-auto">
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Is Admin</th>
            <th>Update Users</th>
            </tr>
            <tr v-for="user in userList.users" :key="user.firstName">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.isAdmin }}</td>
            <td><input type="button" class="button" value="Edit" /><input type="button" class="button" value="Del" /></td>
            </tr>
            </table>
            <div class="has-text-centered">
                <input type="button" class="button" value="Toggle New User" @click="addUser = !addUser" />                
            </div>
            <div v-if="addUser" class="column is-3 mx-auto has-text-centered">
                <input type="text" class="input is-small" placeholder="First Name" />
                <input type="text" class="input is-small" placeholder="Last Name" />
                <input type="text" class="input is-small" placeholder="Password" />
                <label class="checkbox">
                    <input type="checkbox" />
                    Administrator
                </label>
                <br>
                <input type="submit" class="button" />
            </div>
        </div>
        <div v-if="!session.user.isAdmin" class="has-text-centered">
            <br><br>
            <h1 class="title">Non Admin View</h1>
            <p>Non Admin View</p>
            <br>
        </div>
    </div>
    <div v-if="session.user == null" class="has-text-centered">
        <br><br>
        <h1 class="title">Not Logged In View</h1>
        <p>Not Logged In View</p>
        <br>
    </div>
</template>

<style scoped>

</style>
