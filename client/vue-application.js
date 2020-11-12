const Home = window.httpVueLoader('./components/Home.vue')
const Sequencer = window.httpVueLoader('./components/Sequencer.vue')
const Artists = window.httpVueLoader('./components/Artists.vue')
const Artist = window.httpVueLoader('./components/Artist.vue')
const Reviews = window.httpVueLoader('./components/Reviews.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')
const About = window.httpVueLoader('./components/About.vue')


const routes = [
  { path: '/', component: Home },
  { path: '/sequencer', component: Sequencer },
  { path: '/artists', component: Artists},
  { path: '/artist/:artistId', component: Artist},
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
    hartcontent: "A group",
    hartimage: "https://upload.wikimedia.org/wikipedia/commons/5/5b/EddieVedder.jpg",
    hartcaption: "Eddie Vedder"
  },
  async mounted () {
    const res = await axios.get('/api/reviews')
    this.reviews = res.data
    const art = await axios.get('/api/artists')
    this.artists = art.data

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
      this.reviews.push(newReview)
    }
  }
})
