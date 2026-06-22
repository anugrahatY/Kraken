'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  SignInButton,
  UserButton,
  Show,
} from '@clerk/nextjs'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between h-16 px-4">
        <div className="text-xl font-bold font-mono tracking-tighter">
          Kraken<span className="text-primary">_</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <Link
            href="#features"
            className="hover:text-primary transition-colors"
          >
            Features
          </Link>

          <Link
            href="#pricing"
            className="hover:text-primary transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="#contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button
                variant="outline"
                className="font-mono text-xs border-primary/50 hover:bg-primary/10 hover:text-primary hover:border-primary"
              >
                Login
              </Button>
            </SignInButton>
          </Show>

          <Show when="signed-in">
            <UserButton
              showName
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-9 w-9",
                },
              }}
            />
          </Show>
        </div>
      </div>
    </header>
  )
}