"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log("Password reset requested for:", email);
    router.push("/onboarding/email-sent");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Forgot Password?</h2>
      <p className="text-gray-600 mb-8">
        Enter email to receive a password reset link
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          asChild
          className="w-full bg-black-500 text-white p-3 rounded"
        >
          <Link href="/onboarding/email-sent">
            Send reset link
          </Link>
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Link
          href="/onboarding/login"
          className="text-gray-600 hover:underline"
        >
          Go back to login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
