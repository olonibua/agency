"use client";
import FindTalents from "@/components/dashboard/FindTalents";
import { useRouter } from "next/navigation";
import React from "react";

const FindTalentsPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return <FindTalents onBack={handleBack} pageTitle="Find Talents" />;
};

export default FindTalentsPage;
