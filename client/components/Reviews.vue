<template>
  <div>
    <h1 class="title">Last reviews</h1>
    <div class="rev_main" id="rev_main_container" >
        <div class="review" v-for="review in reviews" :key="review.id">
            <div class="rellax imgcont">
                <img class="picture" :src="review.image">
            </div>
            <div class="rev_box">
                <div class="rev_name">{{review.artist}} - {{review.album}}</div>
                <div class="t_content">
                    <div class="date">{{review.date}}</div>
                    <div class="text">"{{review.content}}"</div>
                </div>
                <div class="score">
                    <div class="rating">
                        score :
                        <div class="meter green">
                            <span :style="{width: review.rating + '%'}"></span>
                        </div>
                    </div>
                    <p class="outof100">{{review.rating}}/100</p>
                </div>   
            </div>
        </div> 
    </div>
    <div class="rev_form">

        <h4>Want to leave a review?</h4>
        <form class="add_review" @submit.prevent="submitReview">
            <div class="names">

                <div class="a_name">
                    <label for="aname"></label>
                    <input type="text" id="aname" name="aname" v-model="newReview.artist" placeholder="Reviewed artist" required>
                </div>

                <div class="s_name">
                    <label for="sname"></label>
                    <input type="text" id="sname" name="sname" v-model="newReview.album" placeholder="Album or song (optional)">
                </div>

            </div>
            <textarea name="review_content" id="rev_cont" cols="30" rows="10" v-model="newReview.content" placeholder="Leave your review here !" maxlength="300"></textarea>
            
            <div class="image_input">
                <label for="myFile">Enter an image url to decorate your review !<br><br></label>
                <input type="url" id="myFile" name="filename" autocomplete="off" v-model="newReview.image">
            </div>

            <div class="rating_input">
                <label for="score_range">Rate this song/album/artist out of 100 !</label>
                <div class="select_range">
                    <input type="range" id="score_range" v-model="newReview.rating" step="5" min="0" max="100">
                    <input type="number" min="0" max="100" id="textInput" v-model="newReview.rating" value="" style="color: black;margin: 5px;text-align: center; width: 40px; height: 40px; border-radius: 20rem;">
            
                </div>
                </div>
            
            <div class="button_line">
                <button type="submit" id="done_button" class="d_button"></button>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
      reviews: Array
    },
  data () {
    return {
        newReview: {
            artist: '',
            album: '',
            content: '',
            image: '',
            rating: 50,
            date: new Date()
        }
      }
  },
  mounted (){
    let bg = document.getElementById('index_body')
    bg.style.backgroundImage = 'url("/img/reviews.jpg")'
  },
  methods: {
      submitReview(){
          this.$emit('submit-review', this.newReview)
      }
  } 
}
</script>

<style src="/css/reviews.css">

</style>