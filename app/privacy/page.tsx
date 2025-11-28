export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-center text-balance">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-sm text-muted-foreground italic text-center mb-8">
          <span className="font-semibold">Effective Date:</span> July 31, 2025 •{" "}
          <span className="font-semibold">Last Updated:</span> July 31, 2025
        </p>

        <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
          At Diagnose It, we are committed to protecting your privacy. This Privacy Policy outlines how we collect,
          use, and protect your personal information when you use our app.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">1. Information We Collect</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="font-semibold">Google Account Information:</span> When you log in via Google Sign-In,
                we collect your email address and basic profile details (such as your name) as permitted.
              </li>
              <li>
                <span className="font-semibold">Usage Data:</span> We may collect anonymized data for analytics and
                performance monitoring.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">2. How We Use Your Information</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>To allow you to log in securely.</li>
              <li>To improve and personalize your app experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">3. Data Storage</h2>
            <p className="text-muted-foreground">
              All data is stored securely on our own servers or databases. We do not sell or share your personal
              information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">4. Your Rights</h2>
            <p className="text-muted-foreground mb-3">
              You may request to access, delete, or export your data by emailing us at{" "}
              <a
                href="mailto:ayushkumarsanu00@gmail.com"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                ayushkumarsanu00@gmail.com
              </a>
              .
            </p>
            <p className="text-muted-foreground">
              If you are unable to access your account, please contact us, and we will verify your identity before
              processing your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">5. Account Deletion</h2>
            <p className="text-muted-foreground mb-3">
              To request account deletion, please email us at{" "}
              <a
                href="mailto:ayushkumarsanu00@gmail.com"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                ayushkumarsanu00@gmail.com
              </a>{" "}
              from your logged-in email address. Include your request for account deletion in the email body.
            </p>
            <p className="text-muted-foreground">
              We will verify your identity using your logged-in email address and process your deletion request within
              30 days. Upon deletion, all your personal data, including account information, will be permanently removed
              from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">6. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground">
              We do not restrict use based on age, but we recommend supervision for children under 13 where required by
              local laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">7. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. Changes will be posted in-app or on our website with a
              revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">8. In-App Purchases</h2>
            <p className="text-muted-foreground mb-3">
              We offer in-app purchases and subscriptions that are processed securely through Google Play Billing /
              Apple App Store Payments and managed using RevenueCat. We do not store or have access to your full payment
              details such as credit or debit card numbers.
            </p>
            <p className="text-muted-foreground">
              RevenueCat may collect information related to purchase history (such as subscription status or transaction
              identifiers) to enable subscription management and access to premium features. For more details on
              RevenueCat&apos;s privacy practices, please review their privacy policy on their website.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">9. Push Notifications</h2>
            <p className="text-muted-foreground mb-3">
              We use Firebase Cloud Messaging (FCM) to send push notifications related to updates, reminders, or other
              app-related information. Firebase may collect device-level identifiers (such as a device token) needed to
              deliver notifications.
            </p>
            <p className="text-muted-foreground">
              You can disable notifications at any time through your device settings. We do not use notifications for
              marketing without your permission, and we do not share notification data with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">10. Third-Party Service Providers</h2>
            <p className="text-muted-foreground mb-3">
              We use the following third-party tools to support core app features:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>RevenueCat – Subscription and purchase management.</li>
              <li>Firebase Cloud Messaging – Push notifications.</li>
              <li>Google Sign-In – Authentication.</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              These tools may collect certain non-personal technical information required for their services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">11. Contact</h2>
            <p className="text-muted-foreground">
              If you have any questions, reach out to us at{" "}
              <a
                href="mailto:ayushkumarsanu00@gmail.com"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                ayushkumarsanu00@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}


