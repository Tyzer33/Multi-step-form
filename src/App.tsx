import GlobalStyles from './styles/GlobalStyles'
import Footer from './components/Footer'
import FormSteps from './components/FormSteps'
import MainContent from './components/MainContent'
import { useFormContext, useMediaQuery } from './utils/customHooks'
import { mediaQueries } from './styles/variables'

// TODO: Remplacer tout le media query 'temp' par celui choisit
// TODO: ajouter Animation
// TODO: Spliter le code en composants plus petits

function App() {
  const { isCompleted } = useFormContext().formData
  const isTemp = useMediaQuery(mediaQueries.temp) // temp

  return (
    <>
      <GlobalStyles />
      {!isTemp && <FormSteps type="header" />}
      <MainContent />
      {!isTemp && !isCompleted && <Footer />}
    </>
  )
}

export default App
