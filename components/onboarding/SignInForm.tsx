import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye } from "lucide-react";
import Link from "next/link";

const SignInForm = () => {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6">Sign in</h2>
      <p className="text-gray-600 mb-8">
        Enter your credentials to login to the RIAA dashboard
      </p>
      <form>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a
              href="/onboarding/forget-password"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot password
            </a>
          </div>
          <Button asChild className="w-full">
            <Link href="/dashboard">Sign in</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
