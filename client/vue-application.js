const Home = window.httpVueLoader('./components/Home.vue')
const Sequencer = window.httpVueLoader('./components/Sequencer.vue')
const Artists = window.httpVueLoader('./components/Artists.vue')
const Artist = window.httpVueLoader('./components/Artist.vue')
const Reviews = window.httpVueLoader('./components/Reviews.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')
const About = window.httpVueLoader('./components/About.vue')
const Register = window.httpVueLoader('./components/Register.vue')


const routes = [
  { path: '/', component: Home },
  { path: '/sequencer', component: Sequencer },
  { path: '/artists', component: Artists},
  { path: '/artist/:artistId', component: Artist},
  { path: '/reviews', component: Reviews},
  { path: '/login', component: Login},
  { path: '/about', component: About},
  { path: '/reviews', component: Reviews},
  { path: '/contact', component: Contact},
  { path: '/register', component: Register},
  { path: '/login', component: Login}
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
  
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    islog: false,
    user:{
      id: -1,
      username: '',
    },
    reviews: [],
    artists: [],
    harttitle: "Pearl Jam",
    hartcontent: "A group",
    hartimage: "https://upload.wikimedia.org/wikipedia/commons/5/5b/EddieVedder.jpg",
    hartcaption: "Eddie Vedder"
  },
  async created(){
    const us = await axios.get('/api/me')
    this.user = us.data
  },
  async mounted () {
    
    const res = await axios.get('/api/reviews')
    this.reviews = res.data
    const art = await axios.get('/api/artists')
    this.artists = art.data
    if(this.user.id != -1){
      this.islog = true
    }else{
      this.islog = false
    }

    for (let index = 0; index < this.reviews.length; index++) {
      var d = new Date(this.reviews[index].date)
      this.reviews[index].date = d.toLocaleDateString({
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    }
  },
  methods: {
    async registerUser(newUser){
      
      try{
        const res = await axios.post('/api/register/', newUser)
        if (res.status === 200) {
          alert(res.data.message)
        }
      }
      catch (err){alert("Username or mail already used.")}
      
    },
    async getUser(){
      const us = await axios.get('/api/me')
      this.user = us.data
    },
    async logIn(user){
      
      try{
        const res = await axios.post('/api/login/', user)
        if (res.status === 200) {
          alert("Logged in !")
          this.user = res.data
          this.islog = true
          router.push({path: '/'})
        }
      }
      catch (err){
        if(user.id == -1){
          alert("Incorrect username or password.")
        }else{
          alert("Already logged in.")
        }
        
      }
      
    },
    async addReview(newReview){
      if(this.user.id != -1)
      {
        newReview.posterId = this.user.id
        newReview.posterName = this.user.username
      }
      await axios.post('/api/reviews', newReview)
      var d = new Date(newReview.date)
      newReview.date = d.toLocaleDateString({
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      const res = await axios.get('/api/reviews')
      this.reviews = res.data
      
      alert("Your review has been posted !")
    },
    async deleteReview(review){
      if(confirm("Are you sure you want to delete this review ?")){
        console.log(review)
        var id = review.id
        const res = await axios.delete('api/reviews/' + id)
        for(let i = 0 ; i < this.reviews.length ; i++){
          console.log(this.reviews[i])
          if(this.reviews[i].id == review.id){
            this.reviews.splice(i, 1)
            break
          }
        }
        alert("Review successfully deleted.")
      }
    },
    async logOut(event){
      await axios.delete('/api/logout')
      alert("Logged out !")
      this.islog = false;
      this.user.id = -1;
      this.user.username = '';
    }
  }
})
