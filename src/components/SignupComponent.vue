<template>
<h1>Signup Form</h1>
<div class="register">
    <input type="text" placeholder="Enter Name" v-model="name">
    <input type="text" placeholder="Enter Email" v-model="email">
    <input type="password" placeholder="Enter Password" v-model="password">
    <button v-on:click="signUp">Signup</button>
    <p>
        <router-link to="/login">Login</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignupComponent',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            // console.log(this.name, this.email);
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                name: this.name,
                password: this.password
            });
            console.warn(result);
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({
                    name: 'HomeComponent'
                })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({
                name: 'HomeComponent'
            });
        }
    }
}
</script>

<style>
    
</style>
