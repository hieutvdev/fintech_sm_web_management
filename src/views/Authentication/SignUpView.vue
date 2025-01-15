<template>
  <div class="w-full h-screen p-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
    <div class="xs:w-full sm:w-full md:w-[50%] mx-auto flex flex-col gap-5 justify-center">
      <span>Sign Up</span>
      <span>Free forever, No credit card needed.</span>
      <n-button size="large">
        <n-icon class="mr-2" :component="LogoGoogle" />
        Sign up with Google
      </n-button>
      <n-button size="large">
        <n-icon class="mr-2" :component="LogoFacebook" />
        Sign up with Facebook
      </n-button>
      <div class="flex justify-center items-center">
        <hr class="flex-grow border-gray-300" />
        <span class="mx-2">OR</span>
        <hr class="flex-grow border-gray-300" />
      </div>

      <n-form class="flex flex-col gap-5">
        <div>
          <label>Your Name</label>
          <n-input size="large" class="mt-1 rounded-md" placeholder="Your name" />
        </div>

        <div>
          <label>Your Email</label>
          <n-input size="large" class="mt-1 rounded-md" placeholder="Your name" />
        </div>

        <div>
          <label for="password">Password</label>
          <n-input
            :type="isPasswordVisible ? 'text' : 'password'"
            placeholder="Enter your password"
            size="large"
            class="mt-1 rounded-md"
          >
            <template #suffix>
              <n-icon
                class="cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 transition-all transition-duration-800 w-8 h-8 rounded-lg flex items-center justify-center"
                @click="isPasswordVisible = !isPasswordVisible"
                :component="isPasswordVisible ? Eye : EyeOff"
              />
            </template>
          </n-input>
        </div>
        <div>
          <n-checkbox class="flex-shrink-0"></n-checkbox>
          <span class="whitespace-nowrap ml-2"
            >I agree to the <a href="#" class="text-fuchsia-900">Terms of Service</a> and
            <a href="#" class="text-fuchsia-900">Privacy Policy</a></span
          >
        </div>
        <n-button
          class="bg-fuchsia-600 h-11 bg-opacity-80 text-md text-white font-poppins rounded-md"
        >
          Continue
        </n-button>
      </n-form>
      <div>
        <span
          >Already have an account?
          <router-link class="text-fuchsia-800" :to="{ name: 'login' }">Login</router-link></span
        >
      </div>
    </div>
    <div class="xs:hidden sm:hidden md:block my-auto mx-auto">
      <img
        src="../../assets/auth/signupbanner.png"
        alt=""
        class="w-[80%] border-white rounded-xl animate-fade"
      />
    </div>
  </div>
</template>

<script setup>
import { LogoFacebook, LogoGoogle, Eye, EyeOff } from '@vicons/ionicons5'
import { ref } from 'vue'

const isPasswordVisible = ref(false)
</script>

<style lang="scss" scoped></style>
