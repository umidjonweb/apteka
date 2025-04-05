import { type MedicalModel } from "./model"

export function getMedical_DEFAULT(): MedicalModel {
   const obj: MedicalModel = {
      id: '',
      name: '',
      price: '',
      image: '',
      description: '',
      content: '',
   }
   return obj
}