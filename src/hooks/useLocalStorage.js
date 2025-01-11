import { ref } from 'vue'

export default function useLocalStorage(key, defaultValue = null) {
  const data = ref(getItem())

  function getItem() {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  }

  function setItem(value) {
    localStorage.setItem(key, JSON.stringify(value))
    data.value = value
  }

  function removeItem() {
    localStorage.removeItem(key)
    data.value = null
  }

  return {
    data,
    set: setItem,
    get: getItem,
    remove: removeItem,
  }
}
