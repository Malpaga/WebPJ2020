<template>
    <div>
        <h2>Inscrivez-vous ! </h2>
        <form @submit.prevent="registerUser" id="register">
            <input type="email" v-model="newUser.email" placeholder="Email" required>
            <input type="text" v-model="newUser.password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
module.exports = {
    props: {
        articles: { type: Array, default: [] },
        panier: { type: Object }
    },
    data (){
        return{
            newUser: {
                email: '',
                password : '',
            }
        }
    },
    async mounted () {
    },
    methods: {
        registerUser(){
            this.$emit('register-user', this.newUser)
        }
    }
}
</script>

<style scoped>

</style>