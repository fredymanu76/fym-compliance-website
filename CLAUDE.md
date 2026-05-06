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
- API route: /api/book — server-side proxy for booking requests
- Contact form uses Cloudflare Turnstile for bot protection
- Standalone output for Docker deployment

## Design System
- Corporate blue — JP Morgan-style professional theme
- Primary palette: navy #003A70, blue #0078D4, blue-light #4DA3E8, blue-pale #E8F1FB
- Accent: gold #B8952A (subtle premium accent)
- Backgrounds: primary #FFFFFF, secondary #F5F7FA, navy #001D3D
- Text: primary #1B2A4A, secondary #4A5568, muted #6B7280
- White cards with subtle shadows, Inter font, tight letter-spacing
- Framer Motion for scroll-triggered animations
- Unsplash images for hero, solution cards, and section imagery

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
- No Supabase — static site with API routes for contact and booking forms
