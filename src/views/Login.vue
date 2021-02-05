<template>
  <div class="login-wrapper container mt-5">
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="user.email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="user.password"
        />
      </div>
      <small class="text-danger">{{ msg }}</small>
      <div class="d-flex align-items-center mt-3">
        <button type="button" class="btn btn-primary mr-4" @click="login">
          Log in
        </button>
        <router-link to="/register" class="ml-auto">Register</router-link>
        <!-- <router-link to="/forgot-pwd" class="ml-4">Forgot Password</router-link> -->
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "",
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.user);
      this.$store
        .dispatch("login", this.user)
        .then((result) => {
          if (result.status) {
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log(JSON.stringify(err));
          this.msg = err.message;
        });
    },
  },
};
</script>
<style lang="">
</style>