## Requirements

- [x] VS Code look-alike
- [x] Themes & theme switcher
- [x] Middle click closes files
- [x] Option to pin open files; pinned files will re-open on page refresh (use local storage; do consider cookies though - [ ] will help with SSR)
- [x] "Home" will remain pinned by default; unpin will be disabled
- [x] Right click context menu on file titles -> close, pin
- [ ] Tooltip at bottom right will have a link to "contact" file (check screenshot)
- [x] Terminal
  - [x] most commands will return a "currently disabled" error
  - [x] some commands will have pre-defined results
    - [x] whoami => ~i am spiderman~ (strikethrough) currently disabled
      - [x] this will be shown only once
  - [x] maintain a counter; when it exceeds 10 (for example), do rickroll (line by line). this will happen only once
  - [x] on page refresh, all counters get reset (i.e., no data persistence)
  - [x] Ctrl + ~ should toggle the terminal
- [x] "Files"
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
- [x] Folder structure
  - app
    - routes
      - home.tsx
    - styles
      - contact.css
  - package.json
  - RESUME.md
- [x] Explorer tree should support expand / collapse behaviour


## Bugs

1. Pin / close button needs to have styles (similar to VS Code)

----

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
