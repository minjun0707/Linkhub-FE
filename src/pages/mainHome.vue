<template>
    <main>

<section class="py-5 text-center container">
  <div class="row py-lg-2">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Album example</h1>
     
    </div>
  </div>
</section>

<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-0 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col" v-for = "i in 4" :key="i">

        <card/>

      </div>
     
    </div>
  </div>
</div>

</main>
</template>

   <script>
   import card from '@/components/card'
   export default {
     name: 'mainHome',
     components: {
      card
  }
     
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   </style>
   