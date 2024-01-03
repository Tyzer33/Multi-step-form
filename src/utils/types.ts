export type FormContextType = {
  currentStep: number
  setNextStep: () => void
  setPrevStep: () => void
  isCompleted: boolean
  confirm: () => void
  isYearly: boolean
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>
  selectedPlan: string
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>
}
