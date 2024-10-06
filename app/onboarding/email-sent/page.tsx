import EmailSentForm from '@/components/onboarding/EmailSentForm'
import OnboardingPage from '@/components/onboarding/OnboardingPage'
import React from 'react'

const EmailSentContent = () => {
  return (
    <div>
      <OnboardingPage imageSrc="/emailsent.png" Component={EmailSentForm} />
    </div>
  )
}

export default EmailSentContent
