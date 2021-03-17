<template>
  <div id="login">
    <form>
         <img src="https://bams.in.th/wp-content/uploads/2020/06/login-Bams6.png" />
      <h1>Login </h1>
      <br />
      <div class="container">
        <div class="mb-3">
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <label class="form-label">Email </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
                v-model="email"
                required
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <label class="form-label">Password </label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter password"
                v-model="password"
                required
              />
            </div>
          </div>
        </div>

        <b-button variant="outline-primary" @click="login">Login</b-button>
      </div>
    </form>

    <p>
      You don't have account? You can
      <router-link to="/Signup">Sign Up</router-link><br>
      Exam Email :toon@gmail.com
      Exam Password : 666666
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert("Login Completed");
            this.$router.replace('/about');
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>

<style>
form {
  margin-top: 10%;
}
p {
  padding-top: 10px;
  color: gray;
  font-size: 14px;
}
</style>