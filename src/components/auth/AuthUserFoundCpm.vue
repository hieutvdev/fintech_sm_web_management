<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="w-full flex items-center justify-between">
    <div v-if="props.user.avatar">
      <n-avatar :src="props.user.avatar" size="large" />
    </div>
    <span class="font-poppins font-medium text-lg">{{ props.user.name }}</span>
  </div>
</template>

<style scoped></style>
