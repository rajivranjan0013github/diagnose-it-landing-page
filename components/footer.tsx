import Image from "next/image"
import Link from "next/link"
import { AppStoreButtons } from "./app-store-buttons"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Brand and description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-card shadow-md flex items-center justify-center border border-border">
                <Image
                  src="/diagnose-it-logo.png"
                  alt="Diagnose It logo"
                  width={40}
                  height={40}
                  className="rounded-lg object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary">Diagnose It</span>
            </div>
            <p className="text-foreground font-semibold mb-6 max-w-md">
              Diagnose It is a gamified learning platform where you improve your diagnostic and decision-making skills
              by solving authentic patient scenarios.
            </p>
            <AppStoreButtons />
          </div>

          {/* Right side - Links */}
          <div className="lg:text-right">
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 lg:justify-end"
              >
                FAQs
                <ExternalLinkIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://thethousandways.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 lg:justify-end"
              >
                Contact Us
                <ExternalLinkIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 lg:justify-end"
              >
                Terms & Conditions
                <ExternalLinkIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 lg:justify-end"
              >
                Privacy Policy
                <ExternalLinkIcon className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">© 2025 Diagnose It. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
