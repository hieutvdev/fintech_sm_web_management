<template>
  <div class="w-full h-screen flex flex-col items-center justify-center px-5 py-5">
    <div
      class="w-full xs:h-screen sm:h-screen md:h-2/3 lg:h-screen my-auto grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:shadow sm:bottom-0 md:border md:border-[#eee] rounded-lg p-5"
    >
      <div class="flex flex-col xs:p-0 sm:px-10 md:px-10 lg:px-20 xl:px-40 gap-4 justify-center">
        <span
          class="flex items-center gap-4 font-poppins xs:text-sm sm:text-sm md:text-lg text-fuchsia-900 font-medium"
        >
          <div
            class="flex px-2 py-1 items-center gap-4 mr-1 hover:underline hover:bg-fuchsia-900 hover:bg-opacity-20 hover:text-red-600 rounded-md transition-all cursor-pointer"
          >
            <n-icon :component="HomeOutline" class="text-fuchsia-900 mb-1" />
            <span>FinConnect</span>
          </div>
          /
          <router-link :to="{ name: 'signup' }">
            <span
              class="hover:underline hover:bg-fuchsia-900 hover:bg-opacity-20 hover:text-red-600 px-2 py-2 rounded-md transition-all cursor-pointer"
              >SignUp</span
            >
          </router-link>
        </span>
        <span class="flex flex-col gap-2">
          <span class="text-fuchsia-900 font-medium font-poppins text-xl">Hello</span>
          <span class="text-fuchsia-900 font-medium font-poppins text-sm"
            >Welcome back ! Sign in to continue</span
          >
        </span>

        <n-form
          ref="formRef"
          inline
          :label-width="80"
          :model="formValue"
          :rules="rules"
          class="flex flex-col gap-3"
        >
          <div :class="{ 'xs:w-full sm:w-full md:w-[80%] flex flex-col gap-1 w-full': true }">
            <label for="email" class="text-sm font-poppins text-fuchsia-900">Email</label>
            <n-input
              placeholder="Enter your email"
              class="py-[4px] rounded-lg hover:outline-fuchsia-900 hover:border-fuchsia-800 w-full"
              :style="{ '--n-border-focus': '1px solid #D946EF' }"
              v-model:value="formValue.email"
            >
              <template #suffix>
                <n-icon :component="MailOutline" />
              </template>
            </n-input>
          </div>

          <div :class="{ 'xs:w-full sm:w-full md:w-[80%] flex flex-col gap-1 w-full': true }">
            <label for="password" class="text-sm font-poppins text-fuchsia-900">Password</label>
            <n-input
              :type="isPasswordVisible ? 'text' : 'password'"
              placeholder="Enter your password"
              class="py-[4px] rounded-lg hover:outline-fuchsia-900 hover:border-fuchsia"
              :style="{ '--n-border-focus': '1px solid #D946EF' }"
              v-model:value="formValue.password"
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
          <div class="w-min flex gap-3 items-center justify-start">
            <n-checkbox class="flex-shrink-0"></n-checkbox>
            <span class="whitespace-nowrap">Remember me</span>
          </div>

          <n-button
            size="large"
            @click="handleSubmit"
            type="primary"
            class="xs:w-full sm:w-full md:w-[80%] flex flex-col gap-1 py-2 mt-2 font-poppins"
          >
            Login
          </n-button>
        </n-form>
        <div
          class="xs:w-full sm:w-full md:w-[80%] flex justify-center items-center text-gray-500 text-sm"
        >
          <hr class="flex-grow border-gray-300" />
          <span class="mx-2">OR</span>
          <hr class="flex-grow border-gray-300" />
        </div>

        <div class="xs:w-full sm:w-full md:w-[80%] grid grid-cols-2 gap-3">
          <n-button class="bg-orange-300 bg-opacity-40">
            <n-icon :component="LogoGoogle" class="text-orange-600" />
            <span class="ml-2 text-orange-600">Google</span>
          </n-button>
          <n-button class="bg-blue-300 bg-opacity-40">
            <n-icon :component="LogoFacebook" class="text-blue-600" />
            <span class="ml-2 text-blue-600">Facebook</span>
          </n-button>
        </div>
      </div>
      <div>
        <img
          class="w-full xs:hidden sm:hidden md:block h-[100%] object-cover rounded-lg animate-fade"
          src="../../assets/auth/loginbanner.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { HomeOutline, MailOutline, Eye, EyeOff, LogoGoogle, LogoFacebook } from '@vicons/ionicons5'
import { ref } from 'vue'
import { useNotification } from 'naive-ui'

const notification = useNotification()

const formRef = ref(null)
const isPasswordVisible = ref(false)

const formValue = ref({
  email: '',
  password: '',
})

const rules = {
  email: [
    { required: true, message: 'Email is required', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email', trigger: 'blur' },
  ],
  password: [{ required: true, message: 'Password is required', trigger: 'blur' }],
}

const handleSubmit = async (e) => {
  e.preventDefault()
  let response = await fetch('https://localhost:7002/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: formValue.value.email,
      password: formValue.value.password,
      code: 'string',
    }),
  })
  let data = await response.json()
  console.log('data', data)
  if (data.isSuccess) {
    notification.success({
      title: 'Success',
      content: 'Login successful',
      duration: 2000,
    })
    localStorage.setItem('token', data.data.token)
    localStorage.setItem('user', JSON.stringify(data.data.user))
  } else {
    notification.error({
      title: 'Error',
      content: 'Invalid email or password',
      duration: 2000,
    })
    return false
  }
}
</script>

<style lang="css" scoped></style>
