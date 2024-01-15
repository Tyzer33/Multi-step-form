import GlobalStyles from './styles/GlobalStyles'
import FormSteps from './components/FormSteps/FormSteps'
import MainContent from './components/MainContent'
import { useFormContext, useMediaQuery } from './utils/customHooks'
import { mediaQueries } from './styles/variables'
import NavigationButtons from './components/NavigationButtons'

function App() {
  const { isCompleted } = useFormContext().formData
  const isTabletPortraitUp = useMediaQuery(mediaQueries.tabletPortraitUp)

  return isTabletPortraitUp ? (
    <>
      <GlobalStyles />
      <MainContent />
    </>
  ) : (
    <>
      <GlobalStyles />
      <FormSteps type="header" />
      <MainContent />
      {!isCompleted && <NavigationButtons type="footer" />}
    </>
  )
}

export default App
