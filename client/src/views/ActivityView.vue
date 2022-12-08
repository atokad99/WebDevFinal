<script setup lang="ts">
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import session from '../stores/session';
    import { reactive, ref } from "vue";
    import { getActivities, addActivity, deleteActivity, type Activity } from "../stores/activities";

    const activities = reactive([] as Activity[]);
    getActivities().then( x=> activities.push(...x.activities));

    const workoutLog = reactive([
        { name: 'Type', var: "", unit: ""},
        { name: 'Title', var: "", unit: ""},
        { name: 'Time', var: 0, unit: "Min"},
        { name: 'Distance', var: 0, unit: "Mi"},
        { name: 'Sets', var: 0, unit: "Sets"},
        { name: 'Reps', var: 0, unit: "Reps"},
        { name: 'Weight', var: 0, unit: "lbs" },
        { name: 'Image', var: "", unit: "" },
    ]);

    const date = ref(new Date());
    const addWorkout = ref(false);

    function printDate() {
        const value = date.value.toDateString();
        return value;
    }

    function getUserName() {
        let userName = session.user?.firstName + " " + session.user?.lastName;
        return userName;
    }

    function deletePost(_id: string) {
        deleteActivity(_id);
    }

    function submitData() {
            const newActivity: Activity = {
                _id: (getActivities.length+1).toString(),
                user: getUserName(), 
                tag: "@ddtm13", 
                date: printDate(),
                title: workoutLog[1].var as string,
                time: workoutLog[2].var as number,
                distance: workoutLog[3].var as number,
                sets: workoutLog[4].var as number,
                reps: workoutLog[5].var as number,
                weight: workoutLog[6].var as number,
                image: workoutLog[7].var as string
            }
            addActivity(newActivity);
    }

</script>

<template>
    <div v-if="(session.user !== null)">
        <div class="columns" >
            <div class="column is-centered is-12">
                <br><br>
                <h1 class="title has-text-centered">Activity View</h1>
                <p class="has-text-centered">Here you will find your activity. Keep up the hard work!</p>
                <br>
                <div class="has-text-centered">        
                    <input type="button" class="button" value="Add New Workout" @click="addWorkout = !addWorkout" />
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
                <hr />
            </div>        
        </div>
        <div class="has-text-centered">
            <h3 class="title is-3">Your Posts:</h3>
        </div>
        <div class="columns is-centered" v-for="activity in activities.slice().reverse()">
                <div class="content has-text-centered" v-if="(session.user.tag === activity.tag)">
                    <div class="spacing"></div>
                    <hr />
                    <p class="padright">                        
                        <strong>{{activity.user}}</strong> &nbsp;
                        <small>@{{activity.tag}}</small> &nbsp; 
                        <small>{{ activity.date }}</small>
                        <br> 
                        <span>Wrote:</span>
                        <h4 class="title is-4 fixedwidth">"{{activity.title}}"</h4>
                        <h5 class="title is-5">Stats:</h5>
                        <div class="has-text-left padleft">
                            time: {{activity.time}} hours
                            <br />
                            distance: {{activity.distance}} miles
                            <br />
                            sets: {{activity.sets}} sets
                            <br />
                            reps: {{activity.reps}}
                            <br />
                            total reps: {{(activity.sets * activity.reps)}}
                            <br />
                            weight: {{activity.weight}} lbs
                        </div>                         
                    </p>
                    <hr />
                    <a><img class="img_small" src="https://cdn-icons-png.flaticon.com/512/126/126473.png"/></a>
                    <a><img class="img_small" src="https://cdn.iconscout.com/icon/free/png-256/thumbs-down-12-616177.png"/></a>
                    <a><img class="img_small" src="https://banner2.cleanpng.com/20180401/evq/kisspng-computer-icons-share-icon-sharing-symbol-share-5ac0b95e8abc13.8486960415225798065683.jpg"/></a>
                    <a v-if="(session.user.tag === activity.tag)" @click="deletePost(activity._id)"><img class="img_small" src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"/></a>
                </div>
                <div v-if="(session.user.tag === activity.tag)">
                    <div class="spacing"></div>
                    <img class="image" v-bind:src="activity.image" />
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
.image {
    width: 600px;
    height: 450px;
    padding:2px;
    padding-top:25px;
}
.img_small {
    width:30px;
    height: 30px;
    padding:2px;
}
.spacing {
    padding-top: 50px;
}
.padright {
    padding-right:20px;
}
.padleft {
    padding-left:100px;
}
.fixedwidth {
    width:300px;
}
</style>

