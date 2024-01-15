import { CSSProperties } from 'styled-components/dist/types'
import { ADDONS, PLANS } from './data'

export type AddonsNames = keyof typeof ADDONS
export type Plan = keyof typeof PLANS

export type FormDataKey = keyof FormDataType

export type FormDataType = {
  currentStep: 0 | 1 | 2 | 3
  name: string
  email: string
  phoneNumber: string
  selectedPlan: Plan
  isYearly: boolean
  isCompleted: boolean
  selectedAddons: AddonsNames[]
}

export type FormContextType = {
  setInFormData: <K extends keyof FormDataType>(key: K, value: FormDataType[K]) => void
  formData: FormDataType
  setNextStep: (e: React.FormEvent) => void
  setPrevStep: () => void
  toggleAddon: (addon: AddonsNames) => void
  totalPrice: number
}

export type FlexMixin = {
  direction?: CSSProperties['flexDirection']
  justify?: CSSProperties['justifyContent']
  align?: CSSProperties['alignItems']
}

type CssUnit = 'px' | 'rem' | 'em' | 'vh' | 'vw' | 'vmin' | 'vmax' | '%'
export type CssMeasure = `${number}${CssUnit}`
