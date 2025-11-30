export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-center text-balance">
          Terms and <span className="text-primary">Conditions</span>
        </h1>
        <p className="text-sm text-muted-foreground italic text-center mb-8">
          Effective Date: July 31, 2025
        </p>

        <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
          Welcome to Diagnose It: Guess Disease (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our app and services, you agree to be bound by these Terms and Conditions.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Eligibility</h2>
            <p className="text-muted-foreground">
              Our services are intended for individuals who can use the app responsibly. You must be able to enter into legally binding agreements to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Accounts</h2>
            <p className="text-muted-foreground mb-2">
              To access medical cases and scoring, users must create an account by logging in via Google Sign-In. You are responsible for maintaining the confidentiality of your login credentials.
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
            <h2 className="text-xl md:text-2xl font-bold mb-3">Subscription and Payments</h2>
            <p className="text-muted-foreground">
              Our services may require a paid subscription, managed through Apple and Google in-app billing. Refunds can be processed via the respective app stores under their refund policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Prohibited Activities</h2>
            <p className="text-muted-foreground">
              You agree not to misuse the platform, including but not limited to unauthorized access, interference, or reverse engineering of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Content and Intellectual Property</h2>
            <p className="text-muted-foreground mb-2">
              All clinical cases, medical scenarios, content, branding, and intellectual property on this app belong to us. Unauthorized use, reproduction, or distribution is prohibited.
            </p>
            <p className="text-muted-foreground">
              We may store and analyze your usage data, progress, and performance to improve our services and provide you with a better learning experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Medical Disclaimer</h2>
            <p className="text-muted-foreground mb-2">
              This app is an educational simulation tool for learning purposes only. The clinical cases and scenarios are for educational and training purposes and do not constitute medical advice, diagnosis, or treatment.
            </p>
            <p className="text-muted-foreground mb-2">
              The app is provided on an &quot;as is&quot; basis with no warranties or guarantees regarding the accuracy of medical information or case scenarios.
            </p>
            <p className="text-muted-foreground">
              We are not responsible for any medical decisions or actions taken based on the content provided in this educational simulation. Always consult qualified healthcare professionals for actual medical diagnosis and treatment.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              We shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to suspend or terminate access if you violate these terms or misuse the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to update these Terms at any time. Continued use of the service constitutes your agreement to the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Contact Us</h2>
            <p className="text-muted-foreground">
              For any questions about these Terms, contact us at{" "}
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


