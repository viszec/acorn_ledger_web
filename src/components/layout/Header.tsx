"use client";

import Link from "next/link";
import Navigation from "../common/Navigation";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ROUTES } from "@/constants/navigation";
import Image from "next/image";

export default function Header() {
  // Check if auth URLs are defined
  const signInUrl = ROUTES.auth?.signIn || "#";
  const signUpUrl = ROUTES.auth?.signUp || "#";

  return (
    <>
      {/* Placeholder div to prevent content jump */}
      <div className="lg:h-[96px] h-[64px] w-full" />

      <header className="fixed top-0 left-0 right-0 lg:h-[96px] h-[64px] bg-white backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link href={ROUTES.home} className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Acorn Ledger"
              width={42}
              height={42}
              className="w-10 h-10"
            />
            <span className="text-2xl lg:text-3xl sm:text-sm style-script-regular text-purple-600 pt-1 text-gradient">
              Acorn Ledger
            </span>
          </Link>

          <div className="pt-4">
            <Navigation />
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={signInUrl}
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <User className="w-4 h-4 lg:w-6 lg:h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="border-0 bg-transparent p-0 shadow-none">
                  <p className="text-sm font-medium text-purple-600">Sign In</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Link href={signUpUrl}>
              <Button
                variant="ghost"
                className="text-xs lg:text-sm font-medium rounded-full bg-purple-600 text-white px-2 h-8 lg:h-10 lg:px-4 border border-purple-600 hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
