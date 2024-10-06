import React from "react";
import Image from "next/image";
import ForgotPassword from "@/components/onboarding/ForgotPassword";

// New component for the form content


const ForgotPasswordpage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Image */}
      <div className="hidden md:block md:w-1/2 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/forgetpassword.png"
            alt="Welcome Board"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Right side - Forgot Password Form */}
      <div className="w-full h-full md:w-1/2 bg-[#f8f5f1] p-16 flex flex-col justify-center">
        <ForgotPassword />
      </div>
    </div>
  );
};

export default ForgotPasswordpage;
