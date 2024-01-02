import GlobalStyles from './styles/GlobalStyles'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContent />
      <Footer />
    </>
  )

  // return (
  //   <>
  //     <GlobalStyles />
  //     <Main>
  //       <Aside>
  //         <Step>
  //           <button type="button">1</button>
  //           <button type="button">2</button>
  //           <button type="button">3</button>
  //           <button type="button">4</button>
  //         </Step>
  //       </Aside>
  //       <PersonalInfo />
  //       <SelectPlan />
  //       <PickAddOns />
  //       <FinishingUp />
  //       <Confirmation />
  //       <NavigationButton>
  //         <a href="#">Go Back</a>
  //         <button type="button">Next Step</button>
  //       </NavigationButton>
  //     </Main>
  //   </>
  // )
}

export default App
