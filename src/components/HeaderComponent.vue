<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout Restaurant</a>
</div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name: 'LoginComponent'});
        }
    }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 14px;
    padding-right: 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.nav a:hover{
    background-color: #ddd;
    color: #222;
}
</style>
