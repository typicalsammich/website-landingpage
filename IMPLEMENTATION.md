# Launch and verification notes

The landing page, interactive showroom, six-step quote configurator, two packages, optional AI services, FAQs, responsive navigation, and technical SEO are implemented.

Prices: edit lib/pricing.ts. All prices and server-calculated totals use this file. Starter plus chatbot calculates $1,098 setup, $229 monthly, and $1,327 initial payment. Page tiers and custom scope are distinct. Refresh/expansion applies only to separate future/additional work.

Recommendations: any local visibility, business listings, traffic insights, or keyword testing goal recommends Full Visibility. Other goals suggest Starter. Visitors can override either recommendation.

This Vercel edition is standalone Next.js. The companion Sites edition uses Vinext and durable Cloudflare D1 storage. Vercel instead requires a durable business-owned lead gateway; the exact request/acknowledgement contract is in README.md. Both validate contact/configuration and recompute pricing server-side. Neither uses localStorage as a lead database or reports successful delivery without an acknowledgement. No customer email integration is enabled.

Production launch still requires:
- Lead gateway URL and optional bearer credentials; test real persistence, deduplication, notifications, and recovery.
- Production canonical domain via NEXT_PUBLIC_SITE_URL and a rebuild.
- Agreement confirmation for final scope, billing timing, ownership, cancellation/refunds, and service boundaries.
- Business approval that the existing parent Privacy Policy and Terms cover website services and the selected processors.
- AI usage allowance, integration requirements, consent verification, opt-out handling, privacy/telemarketing compliance, and AI-call disclosures before service activation.
- Platform eligibility/provider availability review for listing distribution. No acceptance, timing, ranking, or AI recommendation guarantees.
- Provider-level rate limiting/abuse protection for the gateway before public exposure.

The original business logo and contact/legal links came from the parent website. Portfolio examples are labeled demonstrations, not client projects. No reviews, client results, locations, deadlines, or contractual policies were invented. Photos are local assets sourced from Unsplash.

Verified: TypeScript, production builds, pricing/recommendation/custom-scope calculations, step navigation, package override, live totals, form validation, showroom device switching, mobile menu, AI demonstration, and missing-integration error handling. Responsive layout checks at 320, 375, 390, 430, 768, 1024, 1440, and 1920px found no horizontal overflow, off-screen inputs/buttons, or broken images. Hosted D1 tests verified durable pending quotes and stable references on retries. Real email/CRM delivery remains unverified without credentials. No Lighthouse score is claimed.

The starter Next.js dependency was updated to 16.4.2 after an audit identified issues in the supplied version. Windows sandbox write errors required precreating generated output directories during verification; application builds then completed.

Private Sites publication was blocked by automatic approval review; no detailed reason was supplied. No live deployment is claimed. The complete projects can be run locally and the Vercel edition can be deployed with the Next.js preset after configuring the gateway.
