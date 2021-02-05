<template>
  <div class="home text-center">
    <div class="float-right">
      <a href="#" @click="logout">Log out</a>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    logout() {
      console.log("--");
      this.$store
        .dispatch("logout")
        .then((result) => {
          console.log(result);
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (!token) this.$router.push("/login");
  },
};
</script>
