import {ref, provide, inject} from 'vue'



export function provideSharedValue(key, value) {
  const sharedValue = ref(value)
  provide(key, sharedValue)
  return sharedValue;
}

export function useSharedValue(key){
  const sharedValue = inject(key)
  if (!sharedValue){
    throw new Error("The provider not implement")
  }
  return sharedValue
}
