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
  selectedAddons: {
    'Online service': boolean
    'Larger storage': boolean
    'Customizable profile': boolean
  }
  toggleAddon: (key: 'Online service' | 'Larger storage' | 'Customizable profile') => void
}
