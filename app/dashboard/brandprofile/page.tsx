'use client'
import React from "react";
import BrandProfile from "@/components/dashboard/BrandsComponents/BrandProfile";
import { useRouter } from 'next/navigation';

const BrandProfilePage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  // You might want to fetch the brand data here or pass it through state management
  return (
    <BrandProfile 
      pageTitle="Brand Profile" 
      onBack={handleBack} 
      brand={{}} // Replace with actual brand data
    />
  );
};

export default BrandProfilePage;
