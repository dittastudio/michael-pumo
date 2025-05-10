import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const menu = ref(false)
  const theme = ref<App.Theme>('dark')

  const getMenu = computed(() => menu.value)
  const getTheme = computed(() => theme.value)

  function setMenu(value: boolean) {
    menu.value = value
  }

  function setTheme(value: App.Theme) {
    theme.value = value
  }

  return {
    getMenu,
    getTheme,
    setMenu,
    setTheme,
  }
}, {
  persist: {
    pick: ['theme'],
    storage: piniaPluginPersistedstate.cookies(),
  },
})
