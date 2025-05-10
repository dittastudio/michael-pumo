import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const menu = ref(false)
  const theme = ref<App.Theme>('dark')
  const typeface = ref<App.Typeface>('saans')

  const getMenu = computed(() => menu.value)
  const getTheme = computed(() => theme.value)
  const getTypeface = computed(() => typeface.value)

  function setMenu(value: boolean) {
    menu.value = value
  }

  function setTheme(value: App.Theme) {
    theme.value = value
  }

  function setTypeface(value: App.Typeface) {
    typeface.value = value
  }

  return {
    getMenu,
    getTheme,
    getTypeface,
    setMenu,
    setTheme,
    setTypeface,
  }
}, {
  persist: {
    pick: ['theme'],
    storage: piniaPluginPersistedstate.cookies(),
  },
})
