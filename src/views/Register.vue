<template>
  <div class="register-wrapper container mt-5">
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
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          v-model="user.confirmPassword"
        />
      </div>
      <small class="text-danger mb-3" v-if="error"
        >Password doesn't match</small
      >
      <div class="d-flex align-items-center mt-3">
        <button type="button" class="btn btn-primary mr-4" @click="register">
          Submit
        </button>
        <router-link to="/login" class="ml-auto">Login</router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Register",
  mapGetters: {},
  data() {
    return {
      error: false,
      user: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    register() {
      console.log(this.user);
      this.error = false;
      if (this.user.password != this.user.confirmPassword) this.error = true;
      this.$store
        .dispatch("register", this.user)
        .then((result) => {
          if (result.status) {
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="">
</style>