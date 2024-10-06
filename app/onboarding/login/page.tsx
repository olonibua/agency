import SignInForm from '@/components/onboarding/SignInForm';
import Image from 'next/image';
import React from 'react'

const LoginPage = () => {
  return (
    <div className=" flex flex-col md:flex-row h-screen">
      <div className="hidden md:block md:w-1/2 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/welcomeBoard.png"
            alt="Welcome Board"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-8 text-white">
        <div className="text-4xl font-bold mb-2">DIA</div>
        <div className="flex space-x-2">
          <div className="w-6 h-6 bg-white rounded-full"></div>
          <div className="w-6 h-6 bg-white rounded-full"></div>
          <div className="w-6 h-6 bg-white rounded-full"></div>
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="w-full h-full md:w-1/2 bg-[#f8f5f1] p-16 flex flex-col justify-center">
        <SignInForm />
      </div>
    </div>
  );
};

export default LoginPage
