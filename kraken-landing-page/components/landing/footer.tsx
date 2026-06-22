'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 bg-card/50">
      {/* <Container
        component="footer"
        className="py-8 border-t border-border bg-background text-center max-w-7xl mx-auto"
      > */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs font-mono text-muted-foreground">
          © 2025 KRAKEN. PRICE TRACKING MADE SIMPLE.
        </div>
        <div className="flex gap-6 text-xs font-mono text-muted-foreground">
          <Link href="#" className="hover:text-primary transition-colors">
            DOCS
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            SUPPORT
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            STATUS
          </Link>
        </div>
      </div>
      {/* </Container> */}
    </footer >
  )
}
