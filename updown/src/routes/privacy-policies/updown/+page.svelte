<script>
  const appName = "Updown";
  const companyName = "Updown Interactive";
  const contactEmail = "support@updown-interactive.in";
  const lastUpdated = "January 2025";
</script>

<svelte:head>
  <title>Privacy Policy – {appName}</title>
  <meta name="description" content="Privacy Policy for Updown app" />
</svelte:head>

<main class="container">
  <h1>Privacy Policy - {appName}</h1>
  <p class="updated">Last updated: {lastUpdated}</p>

  <section>
    <p>
      {appName} is built with respect for privacy and clarity.
      This Privacy Policy explains how {companyName} collects, uses,
      and protects information when you use the {appName} application.
    </p>
  </section>
<section>
  <p>
    {appName} is an <strong>internal-use application</strong> developed for
    organizations to manage employee identity and administrative operations.
    The app is not intended for public use, consumer distribution, or general
    audience access.
  </p>
</section>
  <section>
    <h2>Information We Collect</h2>
    <p>
      We collect only the information necessary to provide core functionality
      of the app.
    </p>
    <ul>
      <li>Employee profile information (name, role, department)</li>
      <li>Employment-related details provided by administrators</li>
      <li>System access details (such as admin access status)</li>
      <li>QR code identifiers used for employee verification</li>
    </ul>
  </section>

  <section>
    <h2>How Information Is Used</h2>
    <p>
      Information collected by {appName} is used strictly for:
    </p>
    <ul>
      <li>Displaying employee identity and profile information</li>
      <li>Managing employee access and roles</li>
      <li>Enabling QR-based employee verification</li>
      <li>Administrative and organizational operations</li>
    </ul>
  </section>

  <section>
    <h2>Data Sharing</h2>
    <p>
      {appName} does not sell, trade, or rent personal information.
      Data is shared only within the organization using the app and
      only with authorized users.
    </p>
  </section>

  <section>
    <h2>Data Security</h2>
    <p>
      We take reasonable measures to protect your information using
      secure communication, access control, and modern development
      practices. However, no digital system can guarantee absolute security.
    </p>
  </section>

  <section>
    <h2>Internet & Network Access</h2>
    <p>
      {appName} may use internet connectivity to sync data, display
      profile images, and verify employee information. No unnecessary
      network requests are performed.
    </p>
  </section>

  <section>
    <h2>Children’s Privacy</h2>
    <p>
      {appName} is intended for organizational and professional use.
      It is not designed for children under the age of 13.
    </p>
  </section>

  <section>
    <h2>Your Rights</h2>
    <p>
      You may contact your organization’s administrator to update,
      correct, or remove your information where applicable.
    </p>
  </section>

  <section>
    <h2>Changes to This Policy</h2>
    <p>
      This Privacy Policy may be updated from time to time.
      Any changes will be reflected on this page with an updated date.
    </p>
  </section>

  <section>
    <h2>Contact Us</h2>
    <p>
      If you have any questions about this Privacy Policy, please contact us at:
    </p>
    <p class="contact">
      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
    </p>
  </section>
</main>

<style>
  .container {
    max-width: 720px;
    margin: 0 auto;
    padding: 48px 16px 80px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont;
    line-height: 1.6;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.25rem;
  }

  h2 {
    font-size: 1.25rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #e7e7e7b4;
  }

  ul {
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: 0.25rem;
  }

  .updated {
    font-size: 0.875rem;
    color: #777;
    margin-bottom: 2rem;
  }

  .contact a {
    color: inherit;
    font-weight: 600;
    text-decoration: none;
  }
</style>
