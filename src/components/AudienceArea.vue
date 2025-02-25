<template>
  <AudienceArea :city="value" :get-geography-city-options="getGeographyCityOptions"
    :get-develop-city-options="getDevelopCityOptions" :get-county-options="getCountyOptions" :showTip="true">
  </AudienceArea>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAllDistrictOptions, getAllCityOptionsByDevelop } from '../mock/audience'
const value = ref<string[]>([])

const getGeographyCityOptions = async () => {
  try {
    return await getAllDistrictOptions();
  } catch (err) {
    console.error(err);
    return {
      code: 0,
      data: []
    };
  }
};

const getDevelopCityOptions = async () => {
  try {
    return await getAllCityOptionsByDevelop();
  } catch (err) {
    console.error(err);
    return {
      code: 0,
      data: []
    };
  }
};

const getCountyOptions = async () => {
  try {
    return await getAllDistrictOptions();
  } catch (err) {
    console.error(err);
    return {
      code: 0,
      data: []
    };
  }
};
</script>