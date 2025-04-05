   import { useStorage } from '@vueuse/core'

   import uz from './uz/index.json'
   import ru from './ru/index.json'
   import eng from './eng/index.json'

   export const _lang = useStorage<('ru' | 'uz' | 'eng')>('locale', () => 'uz')

   export default defineI18nConfig(() => ({
      legacy: false,
      locale: _lang.value,
      messages: {
         uz,
         ru,
         eng
      }
   }))

