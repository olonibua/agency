import OnboardingPage from '@/components/onboarding/OnboardingPage'
import ResetPasswordForm from '@/components/onboarding/ResetPasswordForm'
import React from 'react'

const ResetPassword = () => {
  return (
    <div>
      <OnboardingPage imageSrc="/resetpassword.png" Component={ResetPasswordForm} />
    </div>
  )
}

export default ResetPassword
