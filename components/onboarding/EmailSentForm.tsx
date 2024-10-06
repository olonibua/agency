import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

const EmailSentForm = () => {
  return (
    <div className="w-full max-w-md">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6">Email successfully sent</h2>
        <p className="text-gray-600 mb-8">
          We've sent you instructions to reset your password. If you don't see
          the email soon, please check your spam folder.{" "}
        </p>
        <div className="mb-6"></div>
        <Button
          type="submit"
          className="w-full bg-black-500 text-white p-3 rounded"
        >
          <Link
            href="/onboarding/login"
          >
            Return to login
          </Link>
        </Button>
        
      </div>
    </div>
  );
}

export default EmailSentForm
