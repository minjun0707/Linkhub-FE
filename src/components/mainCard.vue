<template>
  <div class="card shadow-sm shadow p-3 mb-5 bg-body rounded" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave"
    @click="selectCard">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img"
      aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c" />
      <image :href="imageSrc" x="0" y="0" width="100%" height="225"  preserveAspectRatio="none" stroke="black" stroke-width="30" />
    </svg>
    
   
  


    <div class="card-body">

      <h5 class="card-text">{{ item.title }}</h5>
      <p class="card-text">{{ item.description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary" @click="goToUrl()">이동</button>
          
          <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
        </div>
        <small class="text-muted">{{ item.name }}</small>
      </div>
    </div>

    <div class="card-footer">
      <small class="text-muted float-end">{{ item.time }}</small>
    </div>
  </div>
</template>


   
<script>
export default {
  name: 'mainCard',
  props : {
    item: Object
  },

  methods: {

    goToUrl() {
      window.open(this.item.url, '_blank');
    }
  },

  computed: {
    imageSrc() {
      return this.item.img;
    },
  }

  
  
}
</script>



<style></style>


   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>


   