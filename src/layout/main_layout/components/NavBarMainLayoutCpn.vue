<script setup>
import { navbar_admin } from '@/configs/admin/navbar_admin.config.js'
import { defineProps } from 'vue'
import { icon_size, navbar_icon_main_size } from '@/constants/sizes/index.js'
const props = defineProps({
  inverted: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <n-layout-sider
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    :inverted="props.inverted"
    style="height: calc(100vh - 100px)"
    class="text-xs font-poppins"
  >
    <n-menu
      :inverted="props.inverted"
      :collapsed-width="64"
      :collapsed-icon-size="icon_size"
      :icon-size="navbar_icon_main_size"
      :options="navbar_admin"
    >
      
    </n-menu>
  </n-layout-sider>
</template>

<style scoped>

</style>
