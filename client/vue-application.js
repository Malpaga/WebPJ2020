const Home = window.httpVueLoader('./components/Home.vue')
const Sequencer = window.httpVueLoader('./components/Sequencer.vue')
const Artists = window.httpVueLoader('./components/Artists.vue')
const Reviews = window.httpVueLoader('./components/Reviews.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Contact = window.httpVueLoader('./components/Me.vue')


const routes = [
  { path: '/', component: Home },
  { path: '/sequencer', component: Sequencer },
  { path: '/artists', component: Artists},
  { path: '/reviews', component: Reviews},
  { path: '/login', component: Login},
  { path: '/contact', component: Contact}
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
  },
  mounted () {
  },
  methods: {
    
  }
})
