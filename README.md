
# Palanche Industries - Unified Web Application

## Project Overview

This project is structured as a unified Vite+React application with logical separation for different frontend concerns and backend preparation.

## Folder Structure

```
/
├── src/                    # Main frontend application
│   ├── components/         # Shared UI components
│   ├── pages/             # Main application pages
│   ├── admin/             # Admin-related code (logically separated)
│   └── ...
├── backend/               # Backend code (to be populated by senior developer)
├── public/                # Static assets
└── ...
```

## Architecture Philosophy

**Unified Project**: Single Vite build system with logical folder separation
**Admin Separation**: `/src/admin` contains admin-specific components and logic
**Backend Ready**: Empty `/backend` folder prepared for future API development
**Environment Ready**: Configured for multi-environment deployment

## Key Features

- **Framework**: Vite + React (JSX)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router for SPA navigation
- **State Management**: React Query for server state
- **Build Tool**: Vite with multi-entry point support

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

```env
VITE_API_BASE=http://localhost:3000/api  # Backend API endpoint
```

## Deployment Strategy

1. **Frontend**: Built and deployed as static files
2. **Admin**: Included in same build, route-based separation
3. **Backend**: Future Express/Node.js API (to be integrated)

## Senior Developer Notes

- Backend folder is prepared for your implementation
- API base URL configured via environment variables
- Vite config supports multi-entry points if needed
- All TypeScript converted to JavaScript as requested

## Project Info

**URL**: https://lovable.dev/projects/57b0077e-5f84-42cb-ad28-7c5aa8987ac8

## How to Edit

- **Use Lovable**: Visit the project URL above
- **Local Development**: Clone repo and run `npm run dev`
- **GitHub Integration**: Available through project settings

## Technologies Used

- Vite
- React (JSX)
- shadcn-ui
- Tailwind CSS
- React Router
- React Query
