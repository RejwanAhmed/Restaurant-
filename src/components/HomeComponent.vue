<template>
<HeaderComponent></HeaderComponent>
<h1>Hello {{ name }}, Welcome on Home Page</h1>
<table border="1">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
        <th>Actiions</th>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td>
            <router-link :to="'/update/'+item.id">Update</router-link>
            <button v-on:click="deleteRestaurant(item.id)">Delete</button>
        </td>
    </tr>
</table>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import axios from 'axios'
export default {
    name: 'HomeComponent',
    components: {
        HeaderComponent
    },
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restaurant/" + id);
            if (result.status == 200) {
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem("user-info");
            if (!user) {
                this.$router.push({
                    name: 'SignupComponent'
                });
            }
            this.name = JSON.parse(user).name;

            // get restaurants
            let result = await axios.get("http://localhost:3000/restaurant");
            this.restaurants = result.data;
        }
    },
    mounted() {
        this.loadData();
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>
