import { useCallback, useMemo, useState } from 'react'
import FormContext from './FormContext'

type Props = {
  children: React.ReactNode
}

// TODO: Stocker les valeurs du formulaire dans le contexte
// TODO: Envoyer les données du formulaire au serveur quand le formulaire est complété

function FormProvider({ children }: Props) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  const setNextStep = useCallback(() => {
    setCurrentStep((prevState) => (prevState < 3 ? prevState + 1 : 3))
  }, [])

  const setPrevStep = useCallback(() => {
    setCurrentStep((prevState) => (prevState > 0 ? prevState - 1 : 0))
  }, [])

  const confirm = useCallback(() => {
    setIsCompleted(true)
  }, [])

  const value = useMemo(
    () => ({ currentStep, setNextStep, setPrevStep, isCompleted, confirm }),
    [currentStep, setNextStep, setPrevStep, isCompleted, confirm],
  )

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export default FormProvider
