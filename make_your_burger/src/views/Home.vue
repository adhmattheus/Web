<template>

  <Banner/>
  <div class="main-container">
    
    <h1>Monte o seu burguer:</h1>
    <Burgerform/>
    
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Burgerform from '../components/Burgerform.vue'

export default {
  name:"Homem",
  components:{
    Banner,
    Burgerform
  }
  
}
</script>
