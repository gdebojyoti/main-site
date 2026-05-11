## Requirements

- VS Code look-alike
- Themes
- Middle click closes files
- Option to pin open files; pinned files will re-open on page refresh (use local storage; do consider cookies though - will help with SSR)
- "Home" will remain pinned by default; unpin will be disabled
- Right click context menu on file titles -> close, pin
- Tooltip at bottom right will have a link to "contact" file (check screenshot)
- Terminal
  - most commands will return a "currently disabled" error
  - some commands will have pre-defined results
    - whoami => ~i am spiderman~ (strikethrough) currently disabled
      - this will be shown only once
  - maintain a counter; when it exceeds 10 (for example), show this one word at a time: "YOU NEED TO STOP DOING THIS"
  - on page refresh, all counters get reset (i.e., no data persistence)
  - Ctrl + ~ should toggle the terminal
- "Files"
  - Home (tsx)
    - https://web.archive.org/web/20240319211617/https://debojyotighosh.com/
  - Resume (md)
  - Contact (css)
    - social links (email, li, github)
    - location (city, state, country)
  - Package (json)
    - name, version, description
    - scripts - hobbies (lego, video games)
    - dependencies - stack used to create this repo
- Folder structure
  - app
    - routes
      - home.tsx
    - styles
      - contact.css
  - package.json
  - RESUME.md

----

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
