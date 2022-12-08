<script setup lang="ts">
    import '@vuepic/vue-datepicker/dist/main.css';
    import session from '../stores/session';
    import { reactive, ref } from "vue";
    import { getUsers, addUser, type User } from "../stores/users";

    const users = reactive([] as User[]);
    getUsers().then( x=> users.push(...x.users));

    const userLog = reactive([
        { name: 'FirstName', var: ""},
        { name: 'LastName', var: ""},
        { name: 'Password', var: ""},
        { name: 'Tag', var: ""},
        { name: 'IsAdmin', var: false},        
    ]);

    const newUser = ref(false);

    function submitData() {
            const newUser: User = {
                _id: (getUsers.length+1).toString(),
                firstName: userLog[0].var as string, 
                lastName: userLog[1].var as string, 
                password: userLog[2].var as string,
                isAdmin: userLog[4].var as boolean,
                tag: userLog[3].var as string
            }
            addUser(newUser);
    }
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
            <tr v-for="user in users">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.isAdmin }}</td>
            <td><input type="button" class="button" value="Edit" /><input type="button" class="button" value="Del" /></td>
            </tr>
            </table>
            <div class="has-text-centered">
                <input type="button" class="button" value="Add New User" @click="(newUser = !newUser)" />                
            </div>
            <div v-if="newUser" class="column is-3 mx-auto has-text-centered">
                <div v-for="selection in userLog">
                    <div v-if="(selection.name !== 'IsAdmin')">
                        <input type="text" class="input is-small" :placeholder="selection.name"  v-model="selection.var" />
                    </div>
                    <div v-else>
                        <label class="checkbox">
                            <input type="checkbox" v-model="(selection.var as boolean)"/>
                            Administrator
                        </label>
                    </div>                    
                </div>          
                <br>
                <input type="submit" class="button" @click="submitData()" /> 
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
