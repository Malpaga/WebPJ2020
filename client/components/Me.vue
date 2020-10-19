<template>
    <div>
        <h2 v-if="islogged">You are logged in as {{user.email}}</h2>
        <h2 v-else>You are currently not logged in</h2>
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
                id: '',
                email: ''
            },
            islogged: false
        }
    },
    async mounted () {
        const res = await axios.get('/api/me')
        if (res.status === 200) {
            this.user = res.data
            this.islogged = true
        }
    },
    methods: {
    }
}
</script>