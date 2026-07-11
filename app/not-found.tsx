"use client"

import React from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Smile } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center antialiased">
      <div className="max-w-md w-full space-y-6 bg-surface-container p-8 sm:p-12 rounded-md shadow-ambient">
        
        {/* Missing Tooth Graphic */}
        <div className="flex justify-center">
          <div className="relative p-5 bg-primary/10 text-primary rounded-full animate-bounce">
            <Smile className="h-10 w-10 stroke-[1.5]" />
            {/* Draw a small missing point in terracotta */}
            <span className="absolute top-3.5 right-3.5 h-3 w-3 rounded-full bg-tertiary border-2 border-background"></span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-5xl font-serif font-semibold text-foreground tracking-tight">
            404
          </h1>
          <h2 className="text-xl font-serif font-medium text-foreground/80 tracking-tight">
            Oops! This tooth is missing.
          </h2>
          <p className="text-sm font-sans text-foreground/70 leading-relaxed font-normal">
            The page you are looking for has been extracted, polished, or was never scheduled in our system.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-primary hover:bg-primary/95 text-white font-sans text-xs uppercase tracking-widest font-semibold py-5.5 px-8 rounded-md w-full sm:w-auto transition-all inline-flex items-center justify-center cursor-pointer"
            )}
          >
            Return to Sanctuary
          </Link>
        </div>

      </div>
    </div>
  )
}
