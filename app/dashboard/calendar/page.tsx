"use client"
import Calendar from "@/components/dashboard/Calendar";
import { useRouter } from "next/navigation";

const CalenderPage = () => {
    const router = useRouter();

    const handleBack = () => {
      router.back();
    };
  return <Calendar />;
};

export default CalenderPage;
