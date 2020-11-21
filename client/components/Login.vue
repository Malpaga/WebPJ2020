<template>
    <div class="cont">
        <div id="glob">
            <h2>Login ! <br></h2>
            
            <form @submit.prevent="logIn" id="login" class="log_form">
                <input type="text" v-model="user.username" placeholder="Username" required>
                <input type="password" v-model="user.password" placeholder="Password" required>
                <div class="button_line">
                    <button class="d_button" type="submit"></button>
                </div>
                
            </form>
            
            <div id="link_but">
                <h2>Not a member yet ?<br></h2>
                <router-link to='/register'><button class="link"></button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: {
        
    },
    data (){
        return{
            user: {
                username: '',
                password : '',
            }
        }
    },
    async mounted () {
        let bg = document.getElementById('index_body')
        bg.style.backgroundColor = '#EC7357'
        bg.style.backgroundImage = 'none'
    },
    methods: {
        logIn(){
            this.$emit('log-in', this.user)
        }
        
    }
}
</script>

<style scoped>
.cont{
    display: flex;
    justify-content: center;
}
.cont #glob{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 80%;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 100px;
    width: 250px;
}

.d_button{
    transform-origin: 50% 50%;
    color: white;
    width: 100%;
    height: 40px;
    background: transparent;
    border: 3px solid white;
    border-radius: 3px;
    letter-spacing: 1px;
    text-shadow: 0;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s ease;
}

.d_button:hover{
    color: #EC7357;
    background: white;
}

.d_button:active{
    letter-spacing: 2px;
}

.d_button:after{
    content: "LOGIN";
}
.link #link_but{
    width: 100%;
}
#link_but h2{
    text-align: center;
}
.link{
    transform-origin: 50% 50%;
    color: white;
    width: 100%;
    height: 40px;
    background: transparent;
    border: 3px solid white;
    border-radius: 20px;
    letter-spacing: 1px;
    text-shadow: 0;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s ease;
}

button{
    margin-top: 10px;
}
.button_line{
    width: 100%;
}
.link:hover{
    color: #EC7357;
    background: white;
}

.link:after{
    content: "SIGN IN HERE";
}

input{
    color: black;
    padding: 8px;
    margin: 10px 10px;
    border-radius: 3px;
    border-style: none;
    box-shadow: 1px 1px 10px black;
    width: 100%;
}

</style>