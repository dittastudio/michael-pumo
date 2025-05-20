export function useAnalytics() {
  return useScript({
    src: 'https://plausible.io/js/script.file-downloads.outbound-links.js',
    defer: true,
  })
}
