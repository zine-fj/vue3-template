<template>
  <PubHeader :headerObj="subscriptionDetailHeaderObj" />
  <div class="subscription-detail">
    <div class="detail-info">内容</div>
  </div>
</template>

<script setup>
import { onActivated, ref } from "vue";
import { useRoute } from "vue-router";

import { getDetail } from "@/api/ListApi";
import PubHeader from "@/components/PubHeader.vue";

const route = useRoute();

const subscriptionDetailHeaderObj = ref({
  name: "详情页面",
  leftShow: true,
  contShow: false,
  rightShow: true,
});

onActivated(() => {
  getDetailFn();
});

const getDetailFn = async () => {
  // 详情 后台返回
  const { value } = await getDetail(route.query.id);
  console.log("详情：", value);
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixin.scss";

.subscription-detail {
  @include WHY();
  padding: 8px 24px;

  .detail-info {
    display: flex;
    font-size: $fontSize14;
    color: $colorBlack;
  }
}
</style>
