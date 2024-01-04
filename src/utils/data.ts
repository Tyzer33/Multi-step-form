import arcadeLogo from '../assets/icon-arcade.svg'
import advancedLogo from '../assets/icon-advanced.svg'
import proLogo from '../assets/icon-pro.svg'

export const FORMSTEPSDESCRIPTION = [
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

// export const PLANS = [
//   { name: 'Arcade', price: 9, logo: arcadeLogo },
//   { name: 'Advanced', price: 12, logo: advancedLogo },
//   { name: 'Pro', price: 15, logo: proLogo },
// ] as const

export const PLANS = {
  Arcade: { name: 'Arcade', price: 9, logo: arcadeLogo },
  Advanced: { name: 'Advanced', price: 12, logo: advancedLogo },
  Pro: { name: 'Pro', price: 15, logo: proLogo },
} as const

export const ADDONS = {
  'Online service': {
    name: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
  },
  'Larger storage': { name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2 },
  'Customizable profile': {
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2,
  },
} as const
