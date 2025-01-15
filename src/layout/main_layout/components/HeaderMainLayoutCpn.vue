<script setup>

import { header_admin } from '@/configs/admin/header_admin.config.js'
import { Notifications } from '@vicons/ionicons5'

const props = defineProps(
  {
    inverted: {
      type: Boolean,
      required: true
    },

  }
)
</script>

<template>
  <n-layout-header
    class="h-[50px] flex items-center justify-between px-8"
    :inverted="props.inverted"
    bordered
  >


    <div class="flex items-center gap-2">
      <n-icon :component="Notifications" size="20" color="gray" />
      <n-avatar round/>
    </div>
  </n-layout-header>
</template>

<style scoped>



</style>
