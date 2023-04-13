import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserTokenStore = defineStore('userToken', () => {
  const token = ref('')
  function updateToken(payload) {
    token.value = payload
  }
  return { count, updateToken }
})
