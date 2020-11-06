const Home = window.httpVueLoader('./components/Home.vue')
const Sequencer = window.httpVueLoader('./components/Sequencer.vue')
const Artists = window.httpVueLoader('./components/Artists.vue')
const Reviews = window.httpVueLoader('./components/Reviews.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')
const About = window.httpVueLoader('./components/About.vue')


const routes = [
  { path: '/', component: Home },
  { path: '/sequencer', component: Sequencer },
  { path: '/artists', component: Artists},
  { path: '/reviews', component: Reviews},
  { path: '/login', component: Login},
  { path: '/about', component: About},
  { path: '/reviews', component: Reviews},
  { path: '/contact', component: Contact}
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    reviews: [],
    artists: [],
    harttitle: "Pearl Jam",
    hartcontent: "",
    hartimage: String,
    hartcaption: String
  },
  async mounted () {
    const res = await axios.get('/api/reviews')
    this.reviews = res.data
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
    async addReview(newReview){
      const res = await axios.post('/api/reviews', newReview)
      console.log(this.reviews)
      this.reviews.push(newReview)
      console.log(this.reviews)
    }
  }
})
