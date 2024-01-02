import { createContext } from 'react'
import { FormContextType } from '../../utils/types'

const FormContext = createContext<FormContextType | null>(null)

export default FormContext
