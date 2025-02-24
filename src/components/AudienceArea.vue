<template>
  <AudienceArea :city="value" :get-geography-city-options="getGeographyCityOptions"
    :get-develop-city-options="getDevelopCityOptions" :get-county-options="getCountyOptions" :showTip="true">
  </AudienceArea>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAllDistrictOptions, getAllCityOptionsByDevelop } from '../mock/audience'

// 由于window.whiteList?.audience_district_upgrade恒为true，我们可以：
// 1. 移除对window.whiteList的引用
// 2. 直接使用getAllDistrictOptions和getAllCityOptionsByDevelop
// 3. 移除不必要的条件判断

const value = ref<string[]>([])

// 获取地理城市选项
const getGeographyCityOptions = async () => {
  try {
    const options = await getAllDistrictOptions();
    return options;
  } catch (err) {
    console.error(err);
    return {
      code: 0,
      data: []
    };
  }
};

// 获取发展城市选项
const getDevelopCityOptions = async () => {
  try {
    const options = await getAllCityOptionsByDevelop();
    return options;
  } catch (err) {
    console.error(err);
    return {
      code: 0,
      data: []
    };
  }
};

// 获取区县选项
const getCountyOptions = async () => {
  try {
    const options = await getAllDistrictOptions();
    return options;
  } catch (err) {
    console.error(err);
    return {
      code: 0,
      data: []
    };
  }
};
</script>