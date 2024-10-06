import Image from 'next/image';
import React from 'react'
import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Image collage (hidden on mobile) */}
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

      {/* Right side - Content */}
      <div className="w-full h-full md:w-1/2 bg-[#f8f5f1] p-8 md:p-16 flex flex-col justify-between">
        <div className="flex flex-col justify-center flex-grow">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Agency dashboard</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to the
              <br />
              DIA agent dashboard
            </h1>
            <p className="text-gray-600">
              This is the agent dashboard where you will manage collaborations
              between companies and social media talents.
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            href="/onboarding/login"
            className="w-full bg-black-500 text-white pl-3 pr-3 py-2 rounded-lg justify-between text-lg flex items-center"
          >
            Continue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="text-xs text-gray-500 mt-4">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page
