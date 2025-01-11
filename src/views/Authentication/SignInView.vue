<template>
  <div class="w-full h-screen flex flex-col items-center justify-center px-5 py-5">
    <div class="w-full xs:h-screen sm:h-screen md:h-2/3 lg:h-screen my-auto grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:shadow sm:bottom-0 md:border md:border-[#eee] rounded-lg p-5">
      <div class="flex flex-col xs:p-0 sm:px-10 md:px-10 lg:px-20 xl:px-40 gap-2 justify-center">
        <span class="flex items-center gap-4 font-poppins xs:text-sm sm:text-sm md:text-lg mb-5 text-fuchsia-900 font-medium">
          <div class="flex px-2 py-1 items-center gap-4 mr-1 hover:underline hover:bg-fuchsia-900 hover:bg-opacity-20 hover:text-red-600 rounded-md transition-all  cursor-pointer">
            <n-icon  :component="HomeOutline"  class="text-fuchsia-900 mb-1" />
            <span>FinConnect</span>
          </div>/
          <router-link :to="{ name: 'signup' }"> 
            <span class="hover:underline hover:bg-fuchsia-900 hover:bg-opacity-20 hover:text-red-600 px-2 py-2 rounded-md transition-all  cursor-pointer">SignUp</span>
          </router-link>
        </span>
      </div>
      <div>
        <img class="w-full xs:hidden sm:hidden md:block h-[100%] object-cover rounded-lg animate-fade" src="../../assets/auth/loginbanner.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { HomeOutline } from '@vicons/ionicons5';
</script>

<style lang="scss" scoped></style>
