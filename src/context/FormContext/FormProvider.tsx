import { ReactNode, useCallback, useMemo, useState } from 'react'
import FormContext from './FormContext'
import { AddonsNames, FormDataKey, FormDataType } from '../../utils/types'
import { ADDONS, PLANS } from '../../utils/data'

function FormProvider({ children }: Props) {
  const [formData, setFormData] = useState<FormDataType>({
    currentStep: 0,
    name: '',
    email: '',
    phoneNumber: '',
    selectedPlan: 'Arcade',
    isYearly: false,
    selectedAddons: [],
    isCompleted: false,
  })

  const { selectedPlan, selectedAddons, isYearly } = formData

  /* Send data to server

  useEffect(() => {
    if (!formData.isCompleted) return
    fetch()
  }, [formData.isCompleted])

  ------------ */

  const setInFormData = useCallback(
    <K extends FormDataKey>(key: K, value: FormDataType[K]) => {
      setFormData((prev) => ({ ...prev, [key]: value }))
    },
    [setFormData],
  )

  function clampStep(step: number): 0 | 1 | 2 | 3 {
    if (step < 0) return 0
    if (step > 3) return 3
    return step as 0 | 1 | 2 | 3
  }

  const setNextStep = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setFormData((prev) => ({
      ...prev,
      currentStep: clampStep(prev.currentStep + 1),
    }))
  }, [])

  const setPrevStep = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      currentStep: clampStep(prev.currentStep - 1),
    }))
  }, [])

  const toggleAddon = useCallback((addon: AddonsNames) => {
    setFormData((prev) => {
      if (prev.selectedAddons.includes(addon)) {
        return { ...prev, selectedAddons: prev.selectedAddons.filter((name) => name !== addon) }
      }
      return { ...prev, selectedAddons: [...prev.selectedAddons, addon] }
    })
  }, [])

  const totalPrice = useMemo(() => {
    const billingFrequency = isYearly ? 'yearly' : 'monthly'
    const selectedPlanPrice = PLANS[selectedPlan].price[billingFrequency]
    const addonsTotalPrice = selectedAddons.reduce(
      (acc, selectedAddon) => acc + ADDONS[selectedAddon].price[billingFrequency],
      0,
    )

    return selectedPlanPrice + addonsTotalPrice
  }, [selectedPlan, selectedAddons, isYearly])

  const value = useMemo(
    () => ({
      setInFormData,
      formData,
      setNextStep,
      setPrevStep,
      toggleAddon,
      totalPrice,
    }),
    [setInFormData, formData, setNextStep, setPrevStep, toggleAddon, totalPrice],
  )

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export default FormProvider

type Props = {
  children: ReactNode
}
