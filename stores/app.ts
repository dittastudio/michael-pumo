import { defineStore } from 'pinia'

export const useAppStore = defineStore(
  'app',
  () => {
    const theme = ref<App.Theme>('dark')
    const typeface = ref<App.Typeface>('saans')

    const getTheme = computed(() => theme.value)
    const getTypeface = computed(() => typeface.value)

    function setTheme(value: App.Theme) {
      theme.value = value
    }

    function setTypeface(value: App.Typeface) {
      typeface.value = value
    }

    return {
      theme,
      typeface,
      getTheme,
      getTypeface,
      setTheme,
      setTypeface,
    }
  },
  {
    persist: {
      pick: ['theme', 'typeface'],
      storage: piniaPluginPersistedstate.cookies(),
    },
  },
)
