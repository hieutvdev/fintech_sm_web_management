<template>
  <div class="w-full h-screen flex flex-col gap-5 items-center justify-center">
    <div class="xs:w-full sm:w-full md:w-[700px] flex flex-col gap-4 items-center rounded-md shadow-sm">
      <span class="font-poppins text-lg font-semibold tracking-wide">Email Verification</span>
      <span class="font-poppins text-[12px] font-medium text-gray-400">
        We have sent a code to your email {{ email }}
      </span>
      <div class="flex items-center justify-between gap-4">
        <template v-for="(key, index) in 6" :key="index">
          <input
            type="text"
            v-model="verificationCode[`code${index + 1}`]"
            maxlength="1"
            class="border border-[#eee] rounded w-12 h-12 text-lg font-poppins font-semibold p-2 text-center focus:outline-blue-400"
            @input="handleCode(index)"
          />
        </template>
      </div>
      <span v-if="error" class="text-red-500">{{ error }}</span>
      <n-button size="large" class="w-[370px]" @click="verifyCode">Verify</n-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const email = route.params.email || 'example@example.com'

const verificationCode = ref({
  code1: '',
  code2: '',
  code3: '',
  code4: '',
  code5: '',
  code6: '',
})
const error = ref('')
let codeElements = []

const handleCode = (index) => {
  const currentCode = verificationCode.value[`code${index + 1}`]

  if (!/^\d$/.test(currentCode)) {
    verificationCode.value[`code${index + 1}`] = ''
    
    error.value = 'Please enter only numbers'
    return
  }

  error.value = ''
  if (index < 5) {
    const nextInput = codeElements[index + 1]
    nextInput && nextInput.focus()
  }
}

const verifyCode = () => {
  const code = Object.values(verificationCode.value).join('')

  if (code.length !== 6) {
    error.value = 'Code must be 6 digits'
  } else {
    error.value = ''
    alert(`Code verified: ${code}`)
  }
}

onMounted(() => {
  codeElements = document.querySelectorAll('input[type="text"]')
  codeElements[0]?.focus()
})
</script>

<style lang="scss" scoped>
</style>
