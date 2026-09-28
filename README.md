## Requirements

- [x] VS Code look-alike
- [x] Themes & theme switcher
- [x] Middle click closes files
- [x] Option to pin open files; pinned files will re-open on page refresh (use local storage; do consider cookies though - [ ] will help with SSR)
- [x] "Home" will remain pinned by default; unpin will be disabled
- [x] Right click context menu on file titles -> close, pin
- [ ] Tooltip at bottom right will have a link to "contact" file
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
