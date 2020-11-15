<template>
    <div class="cont">
        <h2>Sign in ! </h2>
        <form @submit.prevent="registerUser" id="register">
            <input type="text" v-model="newUser.username" placeholder="Username" required>
            <input type="email" v-model="newUser.email" placeholder="Email" required>
            <input id="pw" type="password" @keyup="keyup" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" @click="focus" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" v-model="newUser.password" placeholder="Password" required>
            
            <button class="d_button" type="submit"></button>
        </form>
        <div id="message">
            <h2>Password must contain the following:</h2>
            <p id="letter" class="invalid">A lowercase letter</p>
            <p id="capital" class="invalid">A capital (uppercase) letter</p>
            <p id="number" class="invalid">A number</p>
            <p id="length" class="invalid">Minimum 8 characters</p>
        </div>
        <h2>Already a member ?<br></h2>
        <router-link to='/login'><button class="link"></button></router-link>
    </div>
</template>

<script>
module.exports = {
    props: {
    },
    data (){
        return{
            newUser: {
                username: '',
                email: '',
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
        registerUser(){
            this.$emit('register-user', this.newUser)
        },
        focus(){
            document.getElementById("message").style.display = "block"
        },
        keyup(event){
            var input = event.target
            var lowercase = /[a-z]/g
            var uppercase = /[A-Z]/g
            var numbers = /[0-9]/g
            var letter = document.getElementById("letter")
            var capital = document.getElementById("capital")
            var number = document.getElementById("number")
            var length = document.getElementById("length")

            if(input.value.match(lowercase)){
                letter.classList.remove("invalid")
                letter.classList.add("valid")
            }else{
                letter.classList.remove("valid")
                letter.classList.add("invalid")
            }

            if(input.value.match(uppercase)){
                capital.classList.remove("invalid")
                capital.classList.add("valid")
            }else{
                capital.classList.remove("valid")
                capital.classList.add("invalid")
            }

            if(input.value.match(numbers)){
                number.classList.remove("invalid")
                number.classList.add("valid")
            }else{
                number.classList.remove("valid")
                number.classList.add("invalid")
            }

            if(input.value.length > 7){
                length.classList.remove("invalid")
                length.classList.add("valid")
            }else{
                length.classList.remove("valid")
                length.classList.add("invalid")
            }
        }
    }
}
</script>

<style scoped>

#message h2{
    color: #EC7357;
}

#message {
  display:none;
  background: #ffffff;
  color: #000;
  position: relative;
  padding: 20px;
  border-radius: 3px;
}

#message p {
  padding: 10px 35px;
  font-size: 18px;
}

.valid {
  color: green;
}

.valid:before {
  position: relative;
  left: -35px;
  content: "✔️";
}

.invalid {
  color: red;
}

.invalid:before {
  position: relative;
  left: -35px;
  content: "❌";
}

.cont{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 100px;
    margin-left: 20%;
    margin-right: 20%;
    width: 300px;
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
    content: "REGISTER";
}

.link{
    transform-origin: 50% 50%;
    color: white;
    width: 300px;
    height: 40px;
    background: transparent;
    border: 3px solid white;
    border-radius: 40px;
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

.link:hover{
    color: #EC7357;
    background: white;
}

.link:after{
    content: "LOG IN HERE";
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