<template>
    <div>
    <h1 class="title">Contact us</h1>
        <div class="subtitles">
            <h2>You want to leave us a message or a review ?</h2>
            <h2>You can contact us via this form! You just need to fill it in.</h2>
            <h2>Thank you!</h2>
        </div>

        <form class="form_contact"> 
            <div class="names">
                <div class="name">
                    <label for="name"></label>
                    <input type="text" id="name" name="Name" placeholder="Name" required>
                </div>

                <div class="surname">
                    <label for="surname"></label>
                    <input type="text" id="surname" name="Surname" placeholder="Surname" required>
                </div>
                <div class="email">
                    <label for="email"></label>
                    <input type="email" id="email" name="Email" placeholder="Your e-mail" required>
                </div>
            </div>  
                
                <div class="subject">
                    <label for="subject"></label>
                    <input type="text" id="subject" name="sname" placeholder="Subject of the e-mail">
                </div>
                <div class="message">
                    <textarea name="message" id="message_content" cols="30" rows="10" placeholder="Type your message here..." maxlength="300"></textarea>
                </div>      
        </form>
        <div class="button_line">
            <button type="button" id="done_button" class="d_button" onclick="submit_form();"></button>
        </div>
    </div>
</template>

<script>
module.exports = {
  props: {
    },
  data () {
    return {
      }
  },
  mounted (){
    let bg = document.getElementById('index_body')
    bg.style.backgroundColor = '#EC7357'
    bg.style.backgroundImage = 'none' 
  },
  methods: {

  } 
}
</script>

<style scoped src="./../public/css/contact.css">

</style>