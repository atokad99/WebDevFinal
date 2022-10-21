<script setup lang="ts">
import { reactive, ref } from 'vue';
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import session from '../stores/session';
    import activityList from '../stores/activitylist';
    import userList from '../stores/userlist';
</script>

<template>
    <div v-if="session.user">
        <div class="columns" >
            <div class="column is-centered is-12">
                <br><br>
                <h1 class="title has-text-centered">Social View</h1>
                <p class="has-text-centered">Here you will find your activity and your friend's activity. Try to keep up!</p>
                <br>
            </div>        
        </div>
        <div class="columns is-centered" v-for="elem in activityList.activity">
            <div class="media-content column is-5">
                <div class="content">
                    <p><strong>{{elem.user.firstName + " " + elem.user.lastName}}</strong> &nbsp;
                        <small>@tag</small> &nbsp; 
                        <small>{{ elem.date }}</small>
                        <br> {{elem.title}} 
                        <div class="image">
                            <img v-bind:src="elem.image" />
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div v-if="session.user == null" class="has-text-centered">
        <br><br>
        <h3 class="title">No activity to show. Please <a href="#">Login</a></h3>
        <br>
    </div>
</template>

<style scoped>

</style>
