<template>
  <div class="login-cl">
    <van-button type="success" @click="clickLogin">Login</van-button>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { getLogin } from "@/api/LoginApi";
import { setToken } from "@/utils/auth";

const store = useStore();
const router = useRouter();
const clickLogin = async () => {
  const { value } = await getLogin();
  setToken(value.token);
  console.log("store: ", store);
  store.commit("Login/TOKEN_MU", value.token);
  router.push({ name: "ListPage" });
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
