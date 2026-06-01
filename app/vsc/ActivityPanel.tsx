const ActivityPanel = () => {
  return (
    <nav className="w-80 bg-card">
      {/* title */}
      <div>Explorer</div>

      {/* open editors list */}
      <div>
        <span>Open Editors</span>
        
        <ul>
          <li>home.tsx</li>
          <li>resume.md</li>
        </ul>
      </div>

      {/* file / folder structure */}
      <div>
        <span>Workspace</span>
        
        <pre className="whitespace-pre-wrap">
  - app
    - routes
      - home.tsx
    - styles
      - contact.css
  - package.json
  - RESUME.md
        </pre>
      </div>
    </nav>
  )
}

export default ActivityPanel;