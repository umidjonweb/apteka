import axios from 'axios'
import { _lang } from '~/i18n'
export const axiosInstance = axios.create({
   baseURL: `${import.meta.env.VITE_BASE_URL}/`,
   // baseURL: "http://192.168.1.39:8080/",
   timeout: 20000,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
   }
})


export interface AxiosResponse<T> {
   data: T
   headers: {
      file: string
   }
}

export interface BaseError {
   code: 1,
   message: ''
}

export interface BaseResponse<T> {
   results: T
   previous: null,
   next: string,
   count: number,
}

export function getResponse_DEFAULT() {
   return {
      content: [],
      page: {
         size: 10,
         totalPages: 0,
         totalElements: 0,
         number: 0
      }
   }
}

axiosInstance.interceptors.request.use(
   (config: any) => {

      if (config.url === '/auth/v1/login') {
         return config
      }
      if (config.url.includes('NO_TOKEN')) {
         config.headers = {
            // Accept: 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded'
         }
         console.log('config', config.headers);
         // config.headers.authorization = ''

      }

     
      console.log('config.url.', config.url);
      
      // `/api/...` dan boshlab yozilgan URL bo‘lsa, uni `/uz/api/v1/...` yoki `/ru/api/v1/...` ga aylantiramiz
      if (config.url.startsWith('/api')) {
         console.log('1111');
         
        config.url = config.url.replace('/api', `/${_lang.value}/api`)
      }
      console.log('config', config);
      
      return config
   },
   (error) => {
      return Promise.reject(error)
   }
)

axiosInstance.interceptors.response.use(
   (response) => {
      return response
   },
   (error) => {
      if (error.response.status === 401) {
         // _TOKEN.value = ''
         // console.log('axiios');
         // router.push(`/login`)
      }
      // if (error.response.status === 403) {
      //    _TOKEN.value = ''
      //    router.push(`/login`)
      //    ElMessage.error('Login yoki parol xato')
      // }
      else {
         // ElMessage.error({
         //    message: (error.response.data.message),
         //    type: 'error',
         //    duration: 6555
         // })
      }
      return Promise.reject(error)
   }
)
