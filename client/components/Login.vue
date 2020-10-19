<template>
    <div>
        <h2>Connectez-vous ! </h2>
        <form @submit.prevent="logIn" id="login">
            <input type="email" v-model="user.email" placeholder="Email" required>
            <input type="text" v-model="user.password" placeholder="Password" required>
            <button type="submit">Log in</button>
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
            user: {
                email: '',
                password : '',
            }
        }
    },
    async mounted () {
    },
    methods: {
        logIn(){
            this.$emit('log-in', this.user)
        }
    }
}
</script>

<style scoped>

</style>