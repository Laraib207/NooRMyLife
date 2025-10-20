# Backend Integration for Contact Messages (Vercel Compatible)

## Overview
Add backend functionality to handle contact messages with MongoDB Atlas (free tier) storage and admin view, optimized for Vercel deployment.

## Steps
- [ ] Install required dependencies (mongoose, mongodb)
- [ ] Create lib/mongodb.ts for database connection (Vercel compatible)
- [ ] Update app/contact/page.tsx to include functional contact form
- [ ] Create app/api/contact/route.ts for handling form submissions (POST)
- [ ] Create app/api/messages/route.ts for fetching messages (GET)
- [ ] Create app/admin/messages/page.tsx for admin message view
- [ ] Set up MongoDB Atlas (free tier) and provide connection string in .env.local
- [ ] Test form submission and message storage
- [ ] Test admin page for viewing messages
- [ ] Deploy to Vercel with environment variables
