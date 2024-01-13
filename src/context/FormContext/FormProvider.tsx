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

  const setNextStep = useCallback((e: React.FormEvent) => {
    e.preventDefault()
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

  const setName = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, name: value }))
  }, [])

  const setEmail = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, email: value }))
  }, [])

  const setPhoneNumber = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, phoneNumber: value }))
  }, [])

  const toggleAddon = useCallback((addon: AddonsNames) => {
    setFormData((prev) => {
      if (prev.selectedAddons.includes(addon)) {
        return { ...prev, selectedAddons: prev.selectedAddons.filter((name) => name !== addon) }
      }
      return { ...prev, selectedAddons: [...prev.selectedAddons, addon] }
    })
  }, [])

  const calculTotal = useCallback(() => {
    const { selectedPlan, selectedAddons, isYearly } = formData
    const billingFrequency = isYearly ? 'yearly' : 'monthly'
    const selectedPlanPrice = PLANS[selectedPlan].price[billingFrequency]
    const addonsTotalPrice = selectedAddons.reduce(
      (acc, selectedAddon) => acc + ADDONS[selectedAddon].price[billingFrequency],
      0,
    )

    return selectedPlanPrice + addonsTotalPrice
  }, [formData])

  const value = useMemo(
    () => ({
      setInFormData,
      formData,
      setNextStep,
      setPrevStep,
      setName,
      setEmail,
      setPhoneNumber,
      toggleAddon,
      calculTotal,
    }),
    [
      setInFormData,
      formData,
      setNextStep,
      setPrevStep,
      setName,
      setEmail,
      setPhoneNumber,
      toggleAddon,
      calculTotal,
    ],
  )

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export default FormProvider

type Props = {
  children: ReactNode
}
