<template>
<HeaderComponent></HeaderComponent>
<h1>Hello User, Welcome on Add Restaurant Page</h1>
<form action="" class = "add">
    <input type="text" placeholder="Enter Restaurant Name" name = "name" v-model="restaurant.name">
    <input type="text" placeholder="Enter Restaurant Address" name = "address" v-model="restaurant.address">
    <input type="text" placeholder="Enter Restaurant Contact" name = "contact" v-model="restaurant.contact">
    <button type = "button" v-on:click="addRestaurant">Add New Restaurant</button>
</form>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import axios from 'axios'
export default {
    name: 'AddComponent',
    components: {
        HeaderComponent
    },
    data()
    {
        return {
            restaurant:{
                name:'',
                address:'',
                contact:'',
            }
        }
    },
    methods:{
        async addRestaurant()
        {
            let result = await axios.post("http://localhost:3000/restaurant", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if(result.status == 201)
            {
                console.warn("New Restaurant Added");
                this.$router.push({name: 'HomeComponent'});
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({
                name: 'SignupComponent'
            });
        }
    }
}
</script>
