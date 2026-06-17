export default defineI18nConfig(() => {
  return {
    legacy: false,
    availableLocales: currentLocales.map(l => l.code),
    fallbackLocale: 'zh-TW',
    fallbackWarn: true,
    missingWarn: true,
  }
})
