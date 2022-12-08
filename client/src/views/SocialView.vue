<script setup lang="ts">
    import '@vuepic/vue-datepicker/dist/main.css';
    import session from '../stores/session';
    import { reactive, ref } from "vue";
    import { getActivities, deleteActivity, type Activity } from "../stores/activities";

    const activities = reactive([] as Activity[]);
    getActivities().then( x=> activities.push(...x.activities));

    function deletePost(_id: string) {
        deleteActivity(_id);
    }
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
        <hr />
        <div class="columns is-centered spacing" v-for="activity in activities.slice().reverse()">
                <div class="content has-text-centered">
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
                <div >
                    <img class="image" v-bind:src="activity.image" />
                </div>
        </div>
    </div>
    <div v-if="session.user == null" class="has-text-centered">
        <br><br>
        <h3 class="title">No activity to show. Please <a href="#">Login</a></h3>        
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
