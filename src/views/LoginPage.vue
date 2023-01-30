<template>
  <div class="login-cl">
    <Button type="success" @click="clickLogin">Login</Button>
    <!-- <van-button type="success" @click="clickLogin">Login</van-button> -->
  </div>
</template>

<script setup>
// import { ref } from "vue";
// import { useRouter } from "vue-router";
// import { useStore } from "vuex";
// import { getLogin } from "@/api/loginAPI";
// import { setToken } from "@/utils/auth";
import { Button } from "vant";

// const store = useStore();
// const router = useRouter();
// const loadingIsShow = ref(false);
// const clickLogin = async () => {
//   loadingIsShow.value = true;
//   const { value } = await getLogin();
//   loadingIsShow.value = false;
//   setToken(value.token);
//   store.commit("Login/TOKEN_MU", value.token);
//   router.push({ name: "List" });
// };
</script>

<style lang="scss" scoped>
// @import "@/styles/mixin.scss";
// .login-cl {
//   @include WHY();
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
</style>
