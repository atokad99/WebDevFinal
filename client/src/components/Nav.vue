<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import LoginBadge from './LoginBadge.vue';

</script>

<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">

        <div class="container">      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              <img src="../assets/fitnesslogo.png">
            </router-link>   

            <router-link class="navbar-item" to="/activity">
              Activity
            </router-link>

            <router-link class="navbar-item" to="/social">
              Social
            </router-link>

            <router-link class="navbar-item" to="/admin">
              Admin
            </router-link>
          </div>      
          <div class="navbar-end">
            <div class="navbar-item">
              <login-badge></login-badge>
            </div>
          </div>
        </div>
        </div>
      </nav>

</template>

<style>
    .router-link-active {        
        border-bottom: #792d2d 2px solid;
    }
</style>