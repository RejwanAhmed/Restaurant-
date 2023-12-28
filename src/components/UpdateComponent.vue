<template>
<HeaderComponent></HeaderComponent>
<h1>Hello User, Welcome on Update Restaurant Page</h1>
<form action="" class = "add">
    <input type="text" placeholder="Enter Restaurant Name" name = "name" v-model="restaurant.name">
    <input type="text" placeholder="Enter Restaurant Address" name = "address" v-model="restaurant.address">
    <input type="text" placeholder="Enter Restaurant Contact" name = "contact" v-model="restaurant.contact">
    <button type = "button" v-on:click="updateRestaurant">Update Restaurant</button>
</form>
</template>
    
<script>
import HeaderComponent from './HeaderComponent.vue'
import axios from 'axios'
export default {
    name: 'UpdateComponent',
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
    methods: {
        async updateRestaurant()
        {
            let result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if(result.status==200)
            {
                this.$router.push({name: 'HomeComponent'});
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({
                name: 'SignupComponent'
            });
        }
        let result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
        // this.restaurant.name = result.data.name;
        // this.restaurant.address = result.data.address;
        // this.restaurant.contact = result.data.contact;
        this.restaurant = result.data;
    }
}
</script>
