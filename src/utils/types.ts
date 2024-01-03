import { ADDONS, PLANS } from './data'

export type AddonsNames = keyof typeof ADDONS
export type Plan = keyof typeof PLANS

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
  formData: FormDataType
  setCurrentStep: (step: number) => void
  setNextStep: () => void
  setPrevStep: () => void
  setSelectedPlan: (plan: Plan) => void
  setIsYearly: (isYearly: boolean) => void
  toggleAddon: (addon: AddonsNames) => void
  confirm: () => void
  calculTotal: () => number
}
