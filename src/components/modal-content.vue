<template>
  <div>
    <div v-if="whiteListLoading"></div>
    <div v-else-if="inWhiteList">
      <div class="notice"></div>
    </div>
    <div v-else class="modal-content">content</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { getWhiteList, getTableData } from "../mock/modal";

const props = defineProps<{
  awemeInfo: any;
  shopInfo: any;
}>();
const inWhiteList = ref(false);
const whiteListLoading = ref(true);
const dataList = ref<any>([]);
const tableLoading = ref(false);

watch(props.awemeInfo,
  async (awemeInfo) => {
    inWhiteList.value = false;
    const awemeId = awemeInfo?.id;

    whiteListLoading.value = true;
    const isIn = await getWhiteList(awemeId);
    inWhiteList.value = isIn;
    whiteListLoading.value = false;

    if (awemeId) {
      if (inWhiteList.value && props.awemeInfo.id) {
        tableLoading.value = true;
        const resp = await getTableData()
        tableLoading.value = false;
        dataList.value = (resp?.list || []);
      }
    }
  })
</script>
