<template>
  <main>
    <section class="py-5 text-center container">
      <div class="row py-lg-2">
        <div class="col-lg-6 col-md-8 mx-auto">


          
          <div class="mb-4">
            <h4>글의 맛집을 찾아 떠나는 여행, 첫걸음은 URL 입력부터</h4>
          </div>


          <div class="row mt-3">
            <div class="col-md-10">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="url을 입력해주세요." v-model="urlState.url">
            </div>
            <div class="col-md-2">

              <button type="button" class="btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#create" @click="postTempCreate">등록</button>

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
                              <rect width="100%" height="100%" fill="#55595c" />
                              <image :href="postTempState.form.img" x="0" y="0" width="100%" height="225"
                                preserveAspectRatio="none" stroke="black" stroke-width="30" />
                           
                            </svg>
                          </div>
                          <div class="col-md-7">
                            <div class="card-body">
                              <input class="card-title" v-model="postTempState.form.title">
                              <p class="card-text"></p>
                              <textarea cols=24 rows=6 v-model="postTempState.form.description">default</textarea>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                      <button ref ="closeBtn" type="button" class="btn btn-primary"  @click="postCreate()">저장</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div v-else class="modal fade" id="create"></div> -->
            </div>
          </div>


        </div>
      </div>


    </section>



    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row row-cols-1 -2 row-cols-md-3 g-3">
          <!-- items 베열 item -->
          <div class="col" v-for="(item, idx) in state.posts" :key="idx">
            <!-- <div class="col" v-for="i in 15" :key="i"> -->

            <mainCard :item="item" />

          </div>

        </div>
      </div>
    </div>








  </main>
</template>

<script>

axios.defaults.withCredentials = true;
import mainCard from '@/components/mainCard'
import axios from 'axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2/dist/sweetalert2.min.js';

export default {
  name: 'mainHome',
  components: {
    mainCard
  },

  setup() {

    const state = reactive({
      posts: []
    })


    const urlState = reactive({
      url: ""
    })

    const imgState = reactive({
      imgSrc: ""
    })


    const postTempState = reactive({
      form: {
        url: "",
        title: "",
        description: "",
        img: ""
      }
    })

  
    axios.get("/api/board/read",{ withCredentials: true }).then((res) => {
      state.posts = res.data.data.postList;
    })

    const postTempCreate = () => {

    
    

    
      axios.post("/api/board/create/temp", {
        url : urlState.url
      },
      { 'Content-Type': 'application/json', withCredentials: true }
      ).then((res) => {
        postTempState.form.url = res.data.data.url;
        postTempState.form.title = res.data.data.title;
        postTempState.form.description = res.data.data.description;
        postTempState.form.img = res.data.data.img;
      })
        .catch((error) => {
          

          Swal.fire({
  title: '게시글 등록 실패',
  text: error.response.data.message,
  icon: 'fail',
  confirmButtonText: '확인'
}).then((result) => {
  if (result.isConfirmed) {
    window.location.reload(true);
  }
})

      
          // if (error.response.status == "400") {
      
          //   window.alert(error.response.data.message);
          //   window.location.reload(true);
          // }

          
        })

    }

    const postCreate = () => {

      axios.post("/api/board/create",
        {
          title: postTempState.form.title,
          description: postTempState.form.description,
          url: postTempState.form.url,
        },
        { 'Content-Type': 'application/json', withCredentials: true }

      )
        .then(() => {

          Swal.fire({
  title: '게시글 등록 성공',
  icon: 'success',
  confirmButtonText: '확인'
}).then((result) => {
  if (result.isConfirmed) {
    window.location.reload(true);
  }
})

         
    
        })
        .catch((error) => {

          Swal.fire({
  title: '게시글 등록 실패',
  text: error.response.data.message,
  icon: 'fail',
  confirmButtonText: '확인'
}).then((result) => {
  if (result.isConfirmed) {
    window.location.reload(true);
  }
})


          console.log(error)
          if (error.response.status == "400") {
            window.alert(error.response.data.message);
            window.location.reload(true);
          }
        })

    }



    return {urlState,imgState, postTempState, state, postTempCreate, postCreate }
  }


}

</script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
   