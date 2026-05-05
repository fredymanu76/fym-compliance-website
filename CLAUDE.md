@AGENTS.md

# FYM Compliance Limited — Corporate Website

## Project Identity
- **Name**: FYM Compliance Limited Website
- **Repo**: fredymanu76/fym-compliance-website
- **Local**: /Users/fredmanu/Projects/fym-compliance-website
- **Stack**: Next.js 16 + TypeScript + React 19 + Tailwind 4 + shadcn/ui + Framer Motion
- **Deploy**: Coolify on 204.168.250.245 (Dockerfile, multi-stage build)
- **Domain**: fymcompliancelimited.com
- **Package Manager**: pnpm

## Git
- `gh auth switch --user fredymanu76` before GitHub operations
- Remote: fredymanu76/fym-compliance-website

## Architecture
- Route groups: (public) — all pages under public layout with Header + Footer
- API route: /api/contact — server-side proxy to FirmMail API
- Contact form uses Cloudflare Turnstile for bot protection
- Standalone output for Docker deployment

## Design System
- Dark premium institutional — Diamond-Cube facet colors
- Facet palette: red #E53E3E, orange #ED8936, amber #ECC94B, green #48BB78, blue #4299E1
- Background: primary #0A0A0F, elevated #12121E, subtle #1A1A2E
- Glass-morphism panels, Inter font, tight letter-spacing
- Framer Motion for scroll-triggered animations

## Environment Variables
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile site key (default: 0x4AAAAAAC8sXk5lDu6fOjhX)
- `FIRMMAIL_API_URL` — FirmMail contact API endpoint (default: https://mail.reg-nexus.com/api/public/contact-form)
- Turnstile verification is handled server-side by FirmMail — no secret key needed here

## Contact Form
- FirmMail HostingSite record: siteDomain=fymcompliancelimited.com, recipients=[info@fymcompliancelimited.com]
- Turnstile widget must include fymcompliancelimited.com in allowed domains (Cloudflare dashboard)

## Important Notes
- Dream OS is a PRIVATE project — must NOT appear anywhere on this site
- This is the PARENT company website — showcases all public solutions
- No Supabase — static site with one API route for contact form
