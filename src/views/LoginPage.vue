<template>
  <div class="login-cl">
    <van-button type="success" @click="clickLogin">Login</van-button>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useRouter } from "vue-router";
// import { useStore } from "vuex";
import { getLogin } from "@/api/LoginAPI";

// const store = useStore();
const router = useRouter();
const clickLogin = async () => {
  const { value } = await getLogin();
  // store.commit("Login/TOKEN_MU", value.token);
  router.push({ name: "List" });
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.login-cl {
  @include WHY();
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
