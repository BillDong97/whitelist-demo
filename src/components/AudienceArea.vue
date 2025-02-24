<template>
  <AudienceArea :city="value" :get-geography-city-options="getGeographyCityOptions"
    :get-develop-city-options="getDevelopCityOptions" :get-county-options="getCountyOptions" :showTip="inGeoWhiteList">
  </AudienceArea>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { provinceCityOptions, developCityOptions, countyOptions, getAllDistrictOptions, getAllCityOptionsByDevelop } from '../mock/audience'
const value = ref<string[]>([])
const inGeoWhiteList = window.whiteList?.audience_district_upgrade;
const getGeographyCityOptions = async () => {
  if (inGeoWhiteList) {
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
  }
  return {
    code: 0,
    data: provinceCityOptions
  };
};
const getDevelopCityOptions = async () => {
  if (inGeoWhiteList) {
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
  }
  return {
    code: 0,
    data: developCityOptions
  };
};
const getCountyOptions = async () => {
  if (inGeoWhiteList) {
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
  }
  return {
    code: 0,
    data: countyOptions
  };
};

</script>