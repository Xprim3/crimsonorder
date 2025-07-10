import { createI18n } from 'vue-i18n'

function loadLocaleMessages() {
  const locales = import.meta.glob('../locales/*.json', { eager: true })
  const messages: { [key: string]: any } = {}
  for (const path in locales) {
    const matched = path.match(/([A-Za-z0-9-_]+)\.json$/i)
    if (matched) {
      messages[matched[1]] = (locales[path] as any).default
    }
  }
  return messages
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
})
