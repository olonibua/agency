import OnboardingPage from '@/components/onboarding/OnboardingPage'
import ResetSuccessForm from '@/components/onboarding/ResetSuccessForm'
import React from 'react'

const ResetSuccess = () => {
  return (
    <div>
      <OnboardingPage imageSrc="/resetpassword.png" Component={ResetSuccessForm} />
    </div>
  )
}

export default ResetSuccess
