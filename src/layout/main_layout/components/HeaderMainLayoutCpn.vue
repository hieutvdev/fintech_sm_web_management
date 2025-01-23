<script setup>
import { header_admin } from '@/configs/admin/header_admin.config.js'
import { Cart, MenuOutline, MoonOutline, Notifications, Search, Sunny } from '@vicons/ionicons5'
import { icon_size } from '@/constants/sizes/index.js'
import { ref } from 'vue'

const props = defineProps({
  inverted: {
    type: Boolean,
    required: true,
  },
})
const isDarkMode = ref(false)
</script>

<template>
  <n-layout-header
    class="h-[50px] flex items-center justify-between px-4"
    :inverted="props.inverted"
    bordered
  >
    <div class="flex gap-1 items-center">
      <div class="flex gap-2">
        <n-icon
          :size="icon_size"
          class="w-8 h-8 p-2 cursor-pointer hover:bg-gray-300 rounded-[50%] transition-all transition-duration-700"
          :component="MenuOutline"
        />
        <n-icon
          :size="icon_size"
          class="w-8 h-8 p-2 cursor-pointer hover:bg-gray-300 rounded-[50%] transition-all transition-duration-700"
          :component="Search"
        />
      </div>
      <div v-for="(item, index) in header_admin" :key="index" class="flex gap-1">
        <span
          class="px-3 py-2 hover:bg-gray-200 text-xs font-poppins font-medium cursor-pointer rounded-sm transition-all transition-duration-3"
          >{{ item.label }}</span
        >
      </div>
    </div>
    <div class="flex items-center gap-2">
      <n-icon
        @click="isDarkMode = !isDarkMode"
        class="w-8 h-8 p-2 cursor-pointer hover:bg-gray-200 rounded-[50%] transition-all transition-duration-700"
        :component="isDarkMode ? Sunny : MoonOutline"
      />
      <n-icon
        class="w-8 h-8 p-2 cursor-pointer hover:bg-gray-200 rounded-[50%] transition-all transition-duration-700"
        :component="Cart"
        :size="icon_size"
        color="gray"
      />
      <n-icon
        class="w-8 h-8 p-2 cursor-pointer hover:bg-gray-200 rounded-[50%] transition-all transition-duration-700"
        :component="Notifications"
        :size="icon_size"
        color="gray"
      />
      <n-avatar size="small" round />
    </div>
  </n-layout-header>
</template>

<style scoped></style>
