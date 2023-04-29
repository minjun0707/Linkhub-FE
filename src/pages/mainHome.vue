<template>
    <main>

<section class="py-5 text-center container">
  <div class="row py-lg-2">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h3> 등록하고싶은 글에 URL을 입력해주세요</h3>
      <input type="email mt-10" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      <button type="button mt-0" class="btn btn-success">등록</button>

    </div>
  </div>
</section>

<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-1 -2 row-cols-md-3 g-3">
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
   