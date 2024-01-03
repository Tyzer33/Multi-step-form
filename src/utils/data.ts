import arcadeLogo from '../assets/icon-arcade.svg'
import advancedLogo from '../assets/icon-advanced.svg'
import proLogo from '../assets/icon-pro.svg'

export const formDescription = [
  {
    heading: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
  },
  {
    heading: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
  },
  {
    heading: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
  },
  {
    heading: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
  },
]

export const plan = [
  { name: 'Arcade', price: 9, logo: arcadeLogo },
  { name: 'Advanced', price: 12, logo: advancedLogo },
  { name: 'Pro', price: 15, logo: proLogo },
]
