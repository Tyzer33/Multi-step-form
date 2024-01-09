import { CSSProperties } from 'styled-components/dist/types'
import { ADDONS, PLANS } from './data'

export type AddonsNames = keyof typeof ADDONS
export type Plan = keyof typeof PLANS

export type FormDataKey = keyof FormDataType
export type FormDataValueOf<K extends FormDataKey> = FormDataType[K]

export type FormDataType = {
  currentStep: number
  name: string
  email: string
  phoneNumber: string
  selectedPlan: Plan
  isYearly: boolean
  isCompleted: boolean
  selectedAddons: AddonsNames[]
}

export type FormContextType = {
  setInFormData: <K extends keyof FormDataType>(key: K, value: FormDataValueOf<K>) => void
  formData: FormDataType
  setNextStep: () => void
  setPrevStep: () => void
  setName: (name: string) => void
  setEmail: (email: string) => void
  setPhoneNumber: (phoneNumber: string) => void
  toggleAddon: (addon: AddonsNames) => void
  calculTotal: () => number
}

export type FlexMixin = {
  direction?: CSSProperties['flexDirection']
  justify?: CSSProperties['justifyContent']
  align?: CSSProperties['alignItems']
}

type CssUnit = 'px' | 'rem' | 'em' | 'vh' | 'vw' | 'vmin' | 'vmax' | '%'
export type CssMeasure = `${number}${CssUnit}`
