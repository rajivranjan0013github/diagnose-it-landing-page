export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-center text-balance">
          Terms of <span className="text-primary">Service</span>
        </h1>
        <p className="text-sm text-muted-foreground italic text-center mb-8">
          Effective Date: July 31, 2025
        </p>

        <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
          Welcome to Diagnose It: Guess Disease. By using our app, you agree to these Terms of Service. Please read
          them carefully.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">1. Using the App</h2>
            <p className="text-muted-foreground mb-2">
              You must log in via Google Sign-In to access the full features of the app.
            </p>
            <p className="text-muted-foreground">
              By using the app, you grant us permission to process your input prompts and generate AI-based content.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">2. Content</h2>
            <p className="text-muted-foreground mb-2">
              You are responsible for any prompts you enter. Do not enter offensive, illegal, or harmful content.
            </p>
            <p className="text-muted-foreground">
              All content you generate or share remains yours. However, we may store and analyze it to improve our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">3. Account Access</h2>
            <p className="text-muted-foreground mb-2">
              You are responsible for maintaining the security of your login credentials.
            </p>
            <p className="text-muted-foreground">
              If you lose access to your account and want your data removed, contact us at{" "}
              <a
                href="mailto:admin@thethousandways.com"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                admin@thethousandways.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">4. Limitations</h2>
            <p className="text-muted-foreground mb-2">
              We do not guarantee the accuracy or appropriateness of the AI-generated content.
            </p>
            <p className="text-muted-foreground">The app is provided &quot;as is&quot; without warranties of any kind.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">5. Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to suspend or terminate access if you violate these terms or misuse the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">6. Changes</h2>
            <p className="text-muted-foreground">
              We may update these terms from time to time. Continued use of the app means you accept the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">7. Contact</h2>
            <p className="text-muted-foreground">
              For any questions, please contact us at{" "}
              <a
                href="mailto:admin@thethousandways.com"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                admin@thethousandways.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}


