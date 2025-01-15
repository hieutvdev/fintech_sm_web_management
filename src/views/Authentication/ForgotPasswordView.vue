<template>
  <div class="w-full h-screen flex items-center justify-center p-5">
    <div class="xs:w-full sm:w-full md:w-[600px] flex flex-col gap-5">
      <h1 class="xs:text-lg sm:text-lg md:text-lg lg:text-xl font-poppins font-medium">
        ForgotPassword
      </h1>
      <span class="text-sm font-poppins"
        >Enter your email address and we will send you a link to reset your password.</span
      >
      <div>
        <label>Email</label>
        <n-input class="mt-2" size="large">
          <template #prefix>
            <n-icon :component="MailOutline" />
          </template>
        </n-input>
      </div>
      <n-button size="large">
        <div v-if="isLoading">
          <n-icon class="mr-2" :component="SearchOutline" />
          Searh
        </div>
      </n-button>
    </div>
  </div>
</template>

<script setup>
import { MailOutline, SearchOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
const isLoading = ref(false)
</script>

<style lang="scss" scoped></style>
