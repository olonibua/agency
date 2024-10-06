"use client";
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Check, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

const ResetPasswordForm = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleResetPassword = (e: any) => {
      e.preventDefault();
      // TODO: Implement password reset logic
      console.log("Password reset requested");
    };

    const passwordMeetsCriteria = () => {
      return (
        newPassword.length >= 8 &&
        /\d/.test(newPassword) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
      );
    };
  return (
    <>
      <div className="w-full max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-6">Reset Password</h2>
          <p className="text-gray-600 mb-8">
            Enter new password to reset password
          </p>
          <form onSubmit={handleResetPassword}>
            <div className="mb-6 relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border rounded pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="mb-6">
              <div
                className={`flex items-center ${
                  newPassword.length >= 8 ? "text-green-500" : "text-gray-400"
                }`}
              >
                <Check size={16} className="mr-2" /> Has at least 8 characters
              </div>
              <div
                className={`flex items-center ${
                  /\d/.test(newPassword) ? "text-green-500" : "text-gray-400"
                }`}
              >
                <Check size={16} className="mr-2" /> Contains a digit
              </div>
              <div
                className={`flex items-center ${
                  /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
                    ? "text-green-500"
                    : "text-gray-400"
                }`}
              >
                <Check size={16} className="mr-2" /> Contains a symbol
              </div>
            </div>
            <div className="mb-6 relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border rounded pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <Button
              asChild
              type="submit"
              className="w-full bg-black-500 text-white p-3 rounded"
              disabled={
                !passwordMeetsCriteria() || newPassword !== confirmPassword
              }
            >
              <Link href="/onboarding/reset-success">Reset password</Link>
            </Button>
          </form>
        </div>
    </>
  );
}

export default ResetPasswordForm
