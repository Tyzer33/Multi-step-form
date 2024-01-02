export type FormContextType = {
  currentStep: number
  setNextStep: () => void
  setPrevStep: () => void
  isCompleted: boolean
  confirm: () => void
}
