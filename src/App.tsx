import GlobalStyles from './styles/GlobalStyles'
import FormSteps from './components/FormSteps'
import MainContent from './components/MainContent'
import { useFormContext, useMediaQuery } from './utils/customHooks'
import { mediaQueries } from './styles/variables'
import NavigationButtons from './components/NavigationButtons'

function App() {
  const { isCompleted } = useFormContext().formData
  const isTabletPortraitUp = useMediaQuery(mediaQueries.tabletPortraitUp)

  return (
    <>
      <GlobalStyles />
      {!isTabletPortraitUp && <FormSteps type="header" />}
      <MainContent />
      {!isTabletPortraitUp && !isCompleted && <NavigationButtons type="footer" />}
    </>
  )
}

export default App
