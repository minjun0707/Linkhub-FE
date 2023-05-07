<template>
  
      
  <div class="b-example-divider"></div>


  <div class="container">
    <header
      class="navbar d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <img src = "@/assets/plane.png" width="50" height="50"/>
        <span class="fs-2" style="margin-left : 20px">Linkhub</span>
      </a>


      <div class="col-md-3 text-end">
        <!-- <h2>Count: {{ count }}</h2>
    <h2>Double Count: {{ doublCount }}</h2>
        <button @click="click">Click</button>
    <button @click="actionCall">ActionCall</button> -->
        <!-- <button type="button" class="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#login" v-if="!$store.state.account.id">로그인</button> -->
        <!-- <button type="button" class="btn btn-outline-primary me-2" @click="logout()" v-else>로그아웃</button> -->

        <button type="button" class="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#login" v-if="$store.state.account.id == 0">로그인</button>
        <button type="button" class="btn btn-outline-primary me-2" v-if="$store.state.account.id == 1" @click="logout()">로그아웃</button>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signUp" v-if="$store.state.account.id == 0">회원가입</button>


        <!-- <button type="button" class="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#login" v-show="!loginState.isLoggedIn">로그인</button>
        <button type="button" class="btn btn-outline-primary me-2" v-show="loginState.isLoggedIn" @click="logout()">로그아웃</button>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signUp" v-show = "!loginState.isLoggedIn">회원가입</button> -->
      </div>
    </header>
  </div>

  <!-- Login Modal -->
  <div class="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">로그인</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">


          <!-- Login 창 -->
          <div class="form-signin">
            <form>

              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="id" v-model="state.form.email">
                <label for="floatingInput">이메일</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                v-model="state.form.password">
                <label for="floatingPassword">비밀번호</label>
              </div>

              <div class="checkbox mb-3">
              </div>
              <button type="button" class="w-100 btn btn-lg btn-primary" @click="login()">로그인</button>
            </form>
          </div>



        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
        </div>
      </div>
    </div>
  </div>


  <!-- SignUp Modal -->

  <div class="modal fade" id="signUp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">회원가입</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- SignUp Body -->


        <div class="modal-body">
          <div class="form-floating mb-5">
            <input type="email" class="form-control" id="floatingInput" placeholder="name" v-model="signUpState.form.name">
            <label for="floatingInput">이름</label>
          </div>

          <div class="form-floating mb-5">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="signUpState.form.email">
            <label for="floatingInput">이메일</label>
          </div>

          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="signUpState.form.password">
            <label for="floatingPassword">비밀번호</label>
          </div>

          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="signUpState.form.passwordCheck">
            <label for="floatingPassword">비밀번호 확인</label>
          </div>
        </div>



        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
          <button type="button" class="btn btn-primary" @click="signUp()">회원가입</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

import axios from "axios";
import { reactive } from "vue";
import store from "@/scripts/store";

axios.defaults.withCredentials = true;
export default {
  name: 'homeHeader',

  // computed: {
  //   count() {
  //     // computed store 변수값을 추적 가능
  //     return this.$store.state.count;
  //   },
  //   doublCount() {
  //     // getters 호출
  //     return this.$store.state.doubleCount;
  //   },
  // },
  // methods: {
  //   click() {
  //     // commit을 사용해서 store의 mutations 호출
  //     this.$store.commit("increment");
  //   },
  //   actionCall() {
  //     // dispatch를 사용해서 store의 actions 호출
  //     this.$store.dispatch("incrementAction");
  //   },
  // },

  setup() {

    const loginState = reactive({
      isLoggedIn: false,
    })

    const state = reactive({
      form: {
        email: "",
        password: ""
      }
    })
    
    const signUpState = reactive({
      form: {
        email: "",
        name: "",
        password: "",
        passwordCheck: ""
      }
    })

    console.log(state.email);

    //로그인 or 로그아웃 api 요청
    const login = () => {
      console.log(state.form.email); 
      console.log(state.form.password);



      axios.post("http://localhost:8080/api/login", state.form, { 'Content-Type': 'application/json', withCredentials: true }).then((res) => {
        window.location.reload(true);
        store.commit("setAccount",1);
        window.alert(res.data.message);
        loginState.isLoggedIn = true;
        
        //모달창 닫기
      })
        .catch((error) => {
          console.log(error)
          if (error.response.status == "400") {
            window.alert(error.response.data.message);
            state.form.password = "";
          }
        })
    }

    const logout = () => {

      
      axios.get("http://localhost:8080/api/logout", state.form, { 'Content-Type': 'application/json', withCredentials: true }).then((res) => {
        window.location.reload(true);
        store.commit('setAccount',0);
        window.alert(res.data.message);
        loginState.isLoggedIn = false;
      })
        .catch((error) => {
          console.log(error)
          if (error.response.status == "400") {
            window.alert(error.response.data.message);
            state.form.password = "";
            loginState.isLoggedIn = false;
          }
        })
    }

    const signUp = () => {

axios.post("http://localhost:8080/api/sign-up",
  {
    email: signUpState.form.email,
    name: signUpState.form.name,
    password: signUpState.form.password,
    passwordCheck: signUpState.form.passwordCheck
  },
  { 'Content-Type': 'application/json', withCredentials: true }

)
  .then((res) => {
    window.location.reload(true);
    store.commit("setAccount",1);
    window.alert(res.data.message);
    loginState.isLoggedIn = true;
  })
  .catch((error) => {
    console.log(error)
    if (error.response.status == "400") {
      window.alert(error.response.data.message);
    }
  })

}




    return { signUp,signUpState,state, login, logout, loginState }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}</style>
