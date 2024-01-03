import { ADDONS, PLANS } from './data'

export type AddonsNames = (typeof ADDONS)[number]['name']
export type Plan = (typeof PLANS)[number]['name']

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
}
