import { useCallback, useMemo, useState } from 'react'
import FormContext from './FormContext'
import { AddonsNames, FormDataType, Plan } from '../../utils/types'
import { ADDONS, PLANS } from '../../utils/data'

type Props = {
  children: React.ReactNode
}

// TODO: Stocker les valeurs du formulaire dans le contexte
// TODO: Envoyer les données du formulaire au serveur quand le formulaire est complété

function FormProvider({ children }: Props) {
  const [formData, setFormData] = useState<FormDataType>({
    currentStep: 0, // TODO: Remettre à 0
    name: '',
    email: '',
    phoneNumber: '',
    selectedPlan: 'Arcade',
    isYearly: false,
    selectedAddons: [],
    isCompleted: false,
  })

  const setCurrentStep = useCallback((step: number) => {
    setFormData((prev) => ({ ...prev, currentStep: step }))
  }, [])

  const setNextStep = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      currentStep: prev.currentStep < 3 ? prev.currentStep + 1 : 3,
    }))
  }, [])

  const setPrevStep = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      currentStep: prev.currentStep > 0 ? prev.currentStep - 1 : 0,
    }))
  }, [])

  const setSelectedPlan = useCallback((selectedPlan: Plan) => {
    setFormData((prev) => ({ ...prev, selectedPlan }))
  }, [])

  const setIsYearly = useCallback((isYearly: boolean) => {
    setFormData((prev) => ({ ...prev, isYearly }))
  }, [])

  const toggleAddon = useCallback((addon: AddonsNames) => {
    setFormData((prev) => {
      if (prev.selectedAddons.includes(addon)) {
        return { ...prev, selectedAddons: prev.selectedAddons.filter((name) => name !== addon) }
      }
      return { ...prev, selectedAddons: [...prev.selectedAddons, addon] }
    })
  }, [])

  const confirm = useCallback(() => {
    setFormData((prev) => ({ ...prev, isCompleted: true }))
  }, [])

  const calculTotal = useCallback(() => {
    const { selectedPlan, selectedAddons, isYearly } = formData
    const selectedPlanPrice = PLANS[selectedPlan].price
    const addonsTotalPrice = selectedAddons.reduce(
      (acc, selectedAddon) => acc + ADDONS[selectedAddon].price,
      0,
    )

    const monthlyTotal = selectedPlanPrice + addonsTotalPrice
    return isYearly ? monthlyTotal * 10 : monthlyTotal
  }, [formData])

  const value = useMemo(
    () => ({
      formData,
      setCurrentStep,
      setNextStep,
      setPrevStep,
      setSelectedPlan,
      setIsYearly,
      confirm,
      toggleAddon,
      calculTotal,
    }),
    [
      formData,
      setCurrentStep,
      setSelectedPlan,
      setIsYearly,
      setNextStep,
      setPrevStep,
      confirm,
      toggleAddon,
      calculTotal,
    ],
  )

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export default FormProvider
