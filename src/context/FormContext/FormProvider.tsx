import { useCallback, useEffect, useMemo, useState } from 'react'
import FormContext from './FormContext'
import { AddonsNames, FormDataKey, FormDataType, FormDataValueOf } from '../../utils/types'
import { ADDONS, PLANS } from '../../utils/data'

type Props = {
  children: React.ReactNode
}

// TODO: Faire des vérifications sur les données du formulaire

function FormProvider({ children }: Props) {
  const [formData, setFormData] = useState<FormDataType>({
    currentStep: 0, // TODO: Tout remettre à 0
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

  useEffect(() => {
    if (!formData.isCompleted) return
    console.log(formData)
  }, [formData.isCompleted, formData])

  const setInFormData = useCallback(
    <K extends FormDataKey>(key: K, value: FormDataValueOf<K>) => {
      setFormData((prev) => ({ ...prev, [key]: value }))
    },
    [setFormData],
  )

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

  const setName = useCallback((name: string) => {
    setFormData((prev) => ({ ...prev, name }))
  }, [])

  const setEmail = useCallback((email: string) => {
    setFormData((prev) => ({ ...prev, email }))
  }, [])

  const setPhoneNumber = useCallback((phoneNumber: string) => {
    setFormData((prev) => ({ ...prev, phoneNumber }))
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

// TODO: Supprimer les fonctions inutiles

// const setCurrentStep = useCallback((step: number) => {
//   setFormData((prev) => ({ ...prev, currentStep: step }))
// }, [])

// const setSelectedPlan = useCallback((selectedPlan: Plan) => {
//   setFormData((prev) => ({ ...prev, selectedPlan }))
// }, [])

// const setIsYearly = useCallback((isYearly: boolean) => {
//   setFormData((prev) => ({ ...prev, isYearly }))
// }, [])

// const confirm = useCallback(() => {
//   setFormData((prev) => ({ ...prev, isCompleted: true }))
// }, [])
