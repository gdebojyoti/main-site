const EditorPanel = () => {
  return (
    <div className="grow">
      {/* editor panel header */}
      <div>
        <ul className="flex">
          <li>home.tsx</li>
          <li>resume.md</li>
        </ul>
      </div>

      {/* editor file container */}
      <div>
        {/* breadcrumb */}
        <div>
          main-site &gt; app &gt; routes &gt; home.tsx
        </div>

        {/* editor file contents */}
        <div>
          Hi there, I am Debojyoti Ghosh. More details are available <a href="https://web.archive.org/web/20240319211617/https://debojyotighosh.com/" target="_blank">here</a>.
        </div>
      </div>
    </div>
  )
}

export default EditorPanel;