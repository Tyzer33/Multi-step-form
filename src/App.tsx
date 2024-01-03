import GlobalStyles from './styles/GlobalStyles'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import { useFormContext } from './utils/customHooks'

function App() {
  const { isCompleted } = useFormContext().formData

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContent />
      {!isCompleted && <Footer />}
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

/*
  <!-- Sidebar start -->

  Step 1
  Your info

  Step 2
  Select plan

  Step 3
  Add-ons

  Step 4
  Summary

  <!-- Sidebar end -->

  <!-- Step 2 start -->

  Arcade
  $9/mo

  Advanced
  $12/mo

  Pro
  $15/mo

  Monthly
  Yearly

  <!-- Step 2 end -->

  <!-- Step 4 start -->

  <!-- Dynamically add subscription and add-on selections here -->

  Total (per month/year)

  <!-- Step 4 end -->

  <!-- Step 5 start -->

  Thank you!

  Thanks for confirming your subscription! We hope you have fun
  using our platform. If you ever need support, please feel free
  to email us at support@loremgaming.com.

  <!-- Step 5 end -->

  */
