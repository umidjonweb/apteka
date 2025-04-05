import { axiosInstance, type AxiosResponse, type BaseResponse } from "../axios"
import { type MedicalModel } from "./model"

export async function getMedical_API(offset: number, limit: number = 20): Promise<[null, BaseResponse<MedicalModel[]>] | [Error, null]> {
   try {
      const response = <AxiosResponse<BaseResponse<MedicalModel[]>>>await axiosInstance.get(`/medicines/`, {
         params: {
            offset,
            limit
         }
      })
      return [null, response.data]

   } catch (error) {
      return [error as Error, null]
   }
}
export async function getMedicalSingle_API(id: number): Promise<[null, BaseResponse<MedicalModel[]>] | [Error, null]> {
   try {
      const response = <AxiosResponse<BaseResponse<MedicalModel[]>>>await axiosInstance.get(`/medicines/${id}/`)
      return [null, response.data]

   } catch (error) {
      return [error as Error, null]
   }
}