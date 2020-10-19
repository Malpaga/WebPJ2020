<template>
  <div>
    <h2>Mon Panier</h2>
    <article v-for="article in panier.articles" :key="article.id">
      <div class="article-img">
        <div :style="{ backgroundImage: 'url(' + articles[article.id-1].image + ')' }">
        </div>
      </div>
      <div class="article-content">
        <div class="article-title">
          <div class="t1">
            <h2>{{ articles[article.id-1].name }} - {{ articles[article.id-1].price }}€ x {{article.quantity}} </h2>
            <h2 v-if="article.quantity != 1"> &nbsp;- {{articles[article.id-1].price*article.quantity}}€</h2>
          </div>
          <div class="panier-but">
            <select v-model="article.quantity" @change="editQuantity(article)">
              <option v-for="n in 10" :key="n">{{n}}</option>
            </select>
            <button @click="removeFromCart(article.id)">Retirer du panier</button>
          </div>
        </div>
        <p>{{ articles[article.id-1].description }}</p>
      </div>
    </article>
    <div>
      <h2>Total : {{getTotal()}}€</h2>
      <div>
        <form @submit.prevent="payCart">
          <input type="text" v-model="names.firstName" placeholder="First Name" required>
          <input type="text" v-model="names.lastName" placeholder="Last Name" required>
          <button type="submit">Proceed to payment</button>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script>
module.exports = {
  props: {
    articles: { type: Array, default: [] },
    panier: { type: Object }
  },
  data () {
    return {
      names: {
        firstName: '',
        lastName: ''
      }
    }
  },
  async mounted () {
  },
  methods: {
    getTotal(){
      var total = 0
        for(let i = 0; i < this.panier.articles.length; i++){
        total += this.articles[this.panier.articles[i].id-1].price*this.panier.articles[i].quantity
      }
      return total
    },
    removeFromCart(articleId){
      this.$emit('remove-from-cart', articleId)
    },
    editQuantity(article){
      this.$emit('edit-quantity', article)
    },
    payCart(){
      this.$emit('pay-cart', this.names)
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
}

.article-img {
  flex: 1;
}

.article-img div {
  width: 100px;
  height: 100px;
  background-size: cover;
}

.article-content {
  flex: 3;
}

.article-title {
  display: flex;
  justify-content: space-between;
}

.t1{
  display: flex;
}

textarea {
  width: 100%;
}
</style>
