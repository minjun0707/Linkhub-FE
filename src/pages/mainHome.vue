<template>
  <main>
    <section class="py-5 text-center container">
      <div class="row py-lg-2">
        <div class="col-lg-6 col-md-8 mx-auto">


          <div class="mb-3">
            <h3> 등록하고싶은 글에 URL을 입력해주세요</h3>
          </div>


          <div class="row mt-3">
            <div class="col-md-10">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="col-md-2">
              <button type="button" class="btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#create"
                @click="postTempApi()">등록</button>
              <!-- <button type="button" class="btn btn-success w-100" data-bs-toggle="modal"
                data-bs-target="#error">등록</button> -->

              <!-- Modal -->
              <div class="modal fade" id="create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!-- body -->
                    <div class="modal-body modal-lg">
                      <div class="card mb-3" style="max-width: 800px;">
                        <div class="row g-0">
                          <div class="col-md-5">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                              xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                              preserveAspectRatio="xMidYMid slice" focusable="false">
                              <title>Placeholder</title>
                              <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                dy=".3em">Thumbnail</text>
                            </svg>
                          </div>
                          <div class="col-md-7">
                            <div class="card-body">
                              <h5 class="card-title">제목은 파싱해서</h5>
                              <p class="card-text"></p>
                              <p class="card-text"><small class="text-muted">디스크립션</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>


    </section>



    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row row-cols-1 -2 row-cols-md-3 g-3">
          <!-- items 베열 item -->
          <div class="col" v-for="(item, idx) in state.items" :key="idx">
            <!-- <div class="col" v-for="i in 15" :key="i"> -->

            <card :item="item" />

          </div>

        </div>
      </div>
    </div>




    <!-- 에러모달 -->
    <!-- Modal -->
    <div class="modal fade" id="error" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"> Error </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <!-- body -->
          <div class="modal-body modal-lg">
            <div class="card mb-3" style="max-width: 800px;">
              <div class="row g-0">

                <div class="col-md-7">
                  <div class="card-body">
                    <h5> Error </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>



  </main>
</template>

<script>

import card from '@/components/card'
import axios from 'axios'
import { reactive } from 'vue'
export default {
  name: 'mainHome',
  components: {
    card
  },

  data() {
    return {
      postTemp: []
    }
  },

  methods: {
    postTempApi() {
      
      axios.post("http://localhost:8080/api/board/create/temp", {
        url : "123"
      })
        .then((response) => {
          console.log(response.data.data.message);
          
        })
    }
    
  },

  setup() {
    const state = reactive({
      items: []
    })

    axios.get("http://localhost:8080/api/board/read").then((res) => {
      console.log(res)
      console.log(res.data.data.postList)
      state.items = res.data.data.postList;
    })

    return { state }
  }


}

</script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
   