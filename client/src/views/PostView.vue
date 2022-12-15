<script setup lang="ts">
import session from '../stores/session';
import { reactive, ref } from "vue";
import {getPost, setPost} from "../stores/search";
import type { Activity } from '@/stores/activities';

const post = getPost as unknown as Activity;

</script>



<template>
  <div class="columns is-centered spacing">
                <div class="content has-text-centered">
                    <hr />
                    <p class="padright">                        
                        <strong>{{post.user}}</strong> &nbsp;
                        <small>@{{post.tag}}</small> &nbsp; 
                        <small>{{ post.date }}</small>
                        <br> 
                        <span>Wrote:</span>
                        <h4 class="title is-4 fixedwidth">"{{post.title}}"</h4>
                        <h5 class="title is-5">Stats:</h5>
                        <div class="has-text-left padleft">
                            time: {{post.time}} hours
                            <br />
                            distance: {{post.distance}} miles
                            <br />
                            sets: {{post.sets}} sets
                            <br />
                            reps: {{post.reps}}
                            <br />
                            total reps: {{(post.sets * post.reps)}}
                            <br />
                            weight: {{post.weight}} lbs
                        </div>                         
                    </p>
                    <hr />
                    <a><img class="img_small" src="https://cdn-icons-png.flaticon.com/512/126/126473.png"/></a>
                    <a><img class="img_small" src="https://cdn.iconscout.com/icon/free/png-256/thumbs-down-12-616177.png"/></a>
                    <a><img class="img_small" src="https://banner2.cleanpng.com/20180401/evq/kisspng-computer-icons-share-icon-sharing-symbol-share-5ac0b95e8abc13.8486960415225798065683.jpg"/></a>
                    <a v-if="(session.user?.tag === post.tag)"><img class="img_small" src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"/></a>
                </div>
                <div >
                    <img class="image" v-bind:src="post.image" />
                </div>
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