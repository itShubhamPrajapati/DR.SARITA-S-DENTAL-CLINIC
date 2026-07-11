"use client"

import React, { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center antialiased">
      <div className="max-w-md w-full space-y-6 bg-surface-container p-8 sm:p-12 rounded-md shadow-ambient">
        
        {/* Error Graphic */}
        <div className="flex justify-center">
          <div className="p-5 bg-tertiary/10 text-tertiary rounded-full">
            <AlertCircle className="h-10 w-10 stroke-[1.5]" />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-serif font-semibold text-foreground tracking-tight">
            An Unexpected Turn
          </h2>
          <p className="text-sm font-sans text-foreground/75 leading-relaxed">
            We encountered an unexpected diagnostic error. Let us try to reload or restore the session window.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => reset()}
            className="bg-primary hover:bg-primary/95 text-white font-sans text-xs uppercase tracking-widest font-semibold py-5.5 rounded-md w-full transition-all"
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="border-foreground/30 hover:bg-background text-foreground font-sans text-xs uppercase tracking-widest font-semibold py-5.5 rounded-md w-full transition-all"
          >
            Reload Page
          </Button>
        </div>

      </div>
    </div>
  )
}
