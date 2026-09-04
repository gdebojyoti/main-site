import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

const PROMPT = "PS D:\\Work\\main-site>";

const BOOT_TEXT = `> dev
> react-router dev

  \u2794  Local:   http://localhost:5173/
  \u2794  Network: use --host to expose
  \u2794  press h + enter to show help
`;

type HistoryEntry = {
  command: string;
  output: ReactNode;
};

const Terminal = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [whoamiRevealed, setWhoamiRevealed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  const runCommand = (raw: string) => {
    const command = raw.trim();
    if (!command) {
      setHistory((h) => [...h, { command: raw, output: null }]);
      return;
    }

    if (command.toLowerCase() === "whoami" && !whoamiRevealed) {
      setWhoamiRevealed(true);
      setHistory((h) => [
        ...h,
        {
          command,
          output: (
            <span>
              <span className="line-through">i am spiderman</span> currently disabled
            </span>
          ),
        },
      ]);
      return;
    }

    setHistory((h) => [...h, { command, output: `'${command}' is currently disabled` }]);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    runCommand(input);
    setInput("");
  };

  return (
    <div
      ref={scrollRef}
      onClick={() => inputRef.current?.focus()}
      className="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-xs leading-relaxed text-editor-foreground"
    >
      <pre className="whitespace-pre-wrap">{BOOT_TEXT}</pre>

      {history.map((entry, index) => (
        <div key={index}>
          <div>
            <span className="text-muted-foreground">{PROMPT} </span>
            {entry.command}
          </div>
          {entry.output && <div>{entry.output}</div>}
        </div>
      ))}

      <div className="flex items-center gap-1">
        <span className="shrink-0 text-muted-foreground">{PROMPT}</span>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent font-mono text-xs text-editor-foreground outline-none"
        />
      </div>
    </div>
  );
};

export default Terminal;
