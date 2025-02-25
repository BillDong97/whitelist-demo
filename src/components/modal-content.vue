<template>
  <div>
    <div class="notice"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { getTableData } from "../mock/modal";

const props = defineProps<{
  awemeInfo: any;
  shopInfo: any;
}>();

const dataList = ref<any>([]);
const tableLoading = ref(false);

watch(props.awemeInfo,
  async (awemeInfo) => {
    const awemeId = awemeInfo?.id;
    if (awemeId) {
      tableLoading.value = true;
      const resp = await getTableData()
      tableLoading.value = false;
      dataList.value = (resp?.list || []);
    }
  })
</script>
