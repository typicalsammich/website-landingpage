# Vercel edition

Standalone Next.js edition of Virtual Agent AI Websites. Run npm install, npm run build, and deploy using the Next.js Vercel preset. Set NEXT_PUBLIC_SITE_URL to the final canonical origin and rebuild.

Set LEAD_WEBHOOK_URL and optional LEAD_WEBHOOK_TOKEN as server secrets. This must be a durable lead gateway owned by your business: persist the full JSON record, deduplicate Idempotency-Key, deliver a business notification, and return {"stored":true,"delivered":true,"reference":"<same reference>"} only after confirming those operations. The endpoint refuses success without this acknowledgement. Browser storage is not used as a database. Configure gateway rate limits and authenticated access. No gateway or credentials were supplied; submission displays a clear error until configured.

Prices and package recommendation rules: lib/pricing.ts. Totals are recalculated server-side. See the Sites edition README for service scope and launch decisions. Actual live email/CRM delivery cannot be verified without the chosen integration.
