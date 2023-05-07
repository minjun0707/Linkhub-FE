<template>

  <homeHeader/>
  
  <mainHome/>

  <homeFooter/>

</template>

<script>

import homeHeader from "@/components/homeHeader"
import homeFooter from '@/components/homeFooter'
import mainHome from "./pages/mainHome.vue";

export default {
  name: 'App',
  components: {
    homeHeader,
    homeFooter,
    mainHome
}
}
</script>

<style>
.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>
