import React from "react";
import Image from "next/image";

interface OnboardingPageProps {
  imageSrc: string;
  Component: React.ComponentType;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({
  imageSrc,
  Component,
}) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Image */}
      <div className="hidden md:block md:w-1/2 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt="Onboarding Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Right side - Component */}
      <div className="w-full h-full md:w-1/2 bg-[#f8f5f1] p-16 flex flex-col justify-center">
        <Component />
      </div>
    </div>
  );
};

export default OnboardingPage;
