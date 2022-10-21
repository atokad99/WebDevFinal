<script setup lang="ts">
    import { reactive, ref } from 'vue';
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import session from '../stores/session';
    import activityList from '../stores/activitylist';
    import userList from '../stores/userlist';
import { Activity } from '@/stores/activity';


    const workoutLog = reactive([
        { name: 'Type', var: "", unit: ""},
        { name: 'Title', var: "", unit: ""},
        { name: 'Time', var: "0", unit: "Min"},
        { name: 'Distance', var: "0", unit: "Mi"},
        { name: 'Sets', var: "0", unit: "Sets"},
        { name: 'Reps', var: "0", unit: "Reps"},
        { name: 'Weight', var: "0", unit: "lbs" },
        { name: 'Image', var: "", unit: "" },
    ]);

    const date = ref(new Date());
    const addWorkout = ref(false);

    function printDate() {
        const value = date.value.toDateString();
        return value;
    }

    function submitData() {
        if (session.user !== null)
            activityList.activity.push(new Activity(session.user,printDate(),workoutLog[0].var,workoutLog[1].var,
                workoutLog[2].var,workoutLog[3].var,workoutLog[4].var,workoutLog[5].var,workoutLog[6].var,workoutLog[7].var))
    }

</script>

<template>
    <div v-if="session.user">
        <div class="columns" >
            <div class="column is-centered is-12">
                <br><br>
                <h1 class="title has-text-centered">Activity View</h1>
                <p class="has-text-centered">Here you will find your activity. Keep up the hard work!</p>
                <br>
                <div class="has-text-centered">        
                    <input type="button" class="button" value="Toggle New Workout" @click="addWorkout = !addWorkout" />
                </div>
                <div v-if="addWorkout">
                    <table class="table is-bordered mx-auto">
                        <tr>
                            <th>Activity</th>
                            <th>Data Input</th>
                            <th>Entered Data</th>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td><Datepicker v-model="date"></Datepicker></td>
                            <td>{{ printDate() }}</td>
                        </tr>
                        <tr v-for="selection in workoutLog" :key="selection.name">
                            <td>{{ selection.name }}</td>
                            <td><input class="input is-small" placeholder="Enter" v-model="selection.var" /></td>
                            <td >{{ selection.var + " " + selection.unit }}</td>            
                        </tr>
                        <input type="submit" class="button" @click="submitData()" />  
                    </table>
                </div>
            </div>        
        </div>
        <div class="columns is-centered" v-for="elem in activityList.activity">
            <div class="media-content column is-5" v-if="elem.user.userID == session.user.userID">
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

