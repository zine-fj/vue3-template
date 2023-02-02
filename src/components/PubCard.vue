<template>
  <li
    class="list-li"
    v-for="item of list"
    :key="item.id"
    @click="clickListLi(item)"
  >
    <div class="title van-ellipsis">{{ item.intro }}</div>
  </li>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
defineProps({
  list: Array,
});
// 点击列表
const clickListLi = param => {
  console.log("点击列表：", param);
  router.push({ name: "DetailPage", query: { id: param.id } });
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.list-li {
  display: inline-block;
  width: 100%;
  min-height: 100px;
  margin: 0 10px 16px 0;
  padding: 0 5px 20px 16px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid $colorBlack;
  .title {
    color: $colorBlack;
    font-size: $fontSize14;
    line-height: 26px;
    margin-bottom: 2px;
    font-weight: 200;
  }
}
</style>
