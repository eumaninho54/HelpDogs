import { dogDataDTO } from "../dtos/dogDataDTO"

export type NativeStackParamList = {
  'onboarding': undefined
  'tab': undefined
  'dogSelected': {
    dogData: dogDataDTO
  }
}