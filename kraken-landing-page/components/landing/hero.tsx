'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Show,
  SignUpButton,
} from '@clerk/nextjs'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-background to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            PRICE TRACKING ONLINE // ALWAYS MONITORING
          </div> */}

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            Track Prices
            <br />
            Like Never
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
              Before
            </span>
          </h1>

          <p className="md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Monitor any product across the web. Get instant alerts when prices
            drop. Make smarter purchasing decisions with Kraken&apos;s universal
            price tracking.
          </p>

          <div className="pt-4">
            <Show when="signed-out">
              <SignUpButton mode="modal">
                <Button size="lg" className="uppercase gap-2">
                  Start Tracking Free
                  <ArrowRight className="size-4" />
                </Button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <Link href="/dashboard">
                <Button size="lg" className="uppercase gap-2">
                  Go To Dashboard
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </Show>
          </div>
        </div>

        {/* Decorative Stats Box */}
        <div className="hidden md:block relative h-[500px] w-full border border-border/30 bg-card/10 backdrop-blur-sm p-8 rounded-lg">
          <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-primary" />

          <div className="h-full w-full flex flex-col justify-between font-mono text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>SYSTEM STATUS: ACTIVE</span>
              <span>UPTIME: 99.99%</span>
            </div>

            <div className="space-y-2">
              <div className="h-1 w-full bg-secondary overflow-hidden rounded">
                <div className="h-full bg-primary w-[85%]" />
              </div>

              <div className="flex justify-between">
                <span>PRICE_UPDATES</span>
                <span>85%</span>
              </div>

              <div className="h-1 w-full bg-secondary overflow-hidden rounded">
                <div className="h-full bg-primary w-[92%]" />
              </div>

              <div className="flex justify-between">
                <span>API_LOAD</span>
                <span>92%</span>
              </div>
            </div>

            <div className="text-right">
              <span className="block text-4xl font-bold text-foreground">
                2.5M
              </span>
              <span>PRODUCTS_TRACKED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}