export default function useMenu(initial: boolean) {
  const menuOpen = useState<boolean>('menuOpen')

  onMounted(() => {
    menuOpen.value = initial
  })

  const router = useRouter()

  router.afterEach(async (to, from) => {
    if (from.path !== to.path) {
      await wait(250)
    }

    menuOpen.value = false
  })

  return menuOpen
}
