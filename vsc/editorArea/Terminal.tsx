import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import {
  commands,
  defaultOutput,
  easterEggOutput,
  maxInvalidCommandCount,
} from "../data/terminalCommands";

const PROMPT = "D:\\work\\tcs\\3dp\\reai\\za>";

// const BOOT_TEXT = `> dev
// > react-router dev

//   \u2794  Local:   http://localhost:5173/
//   \u2794  Network: use --host to expose
//   \u2794  press h + enter to show help
// `;

type HistoryEntry = {
  command: ReactNode;
  output: ReactNode;
};

const findCommand = (input: string) =>
  commands.find((entry) => entry.command === input.toLowerCase());

const Terminal = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState<string[]>([]);
  const invalidCountRef = useRef(0);
  const easterEggIndexRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  // output shown once the invalid command count crosses the threshold; falls back to
  // `defaultOutput` before that, and again once the easter egg is exhausted
  const invalidOutput = (command: string) => {
    invalidCountRef.current += 1;

    // console.log("inside invalidOutput")

    if (
      invalidCountRef.current > maxInvalidCommandCount &&
      easterEggIndexRef.current < easterEggOutput.length
    ) {
      // console.log("numbers", { commandCount: invalidCountRef.current, eggIndex: easterEggIndexRef.current });
      const line = easterEggOutput[easterEggIndexRef.current];
      easterEggIndexRef.current += 1;
      return line;
    }

    return defaultOutput(command);
  };

  const runCommand = (raw: string) => {
    const command = raw.trim();

    // empty input only adds a new line
    if (!command) {
      setHistory((h) => [...h, { command: raw, output: null }]);
      return;
    }

    const match = findCommand(command);

    if (match?.clearsTerminal) {
      setHistory([]);
      return;
    }

    // console.log("compute..", match?.result);

    // a command with a result reveals it once, struck through, alongside the default output
    if (match?.result && !revealed.includes(match.command)) {
      setRevealed((r) => [...r, match.command]);
      setHistory((h) => [
        ...h,
        {
          command: <pre>{raw}</pre>,
          output: match.result,
        },
      ]);
    } else {
      const output = invalidOutput(command);
      setHistory((h) => [...h, { command: <pre>{raw}</pre>, output }]);
    }
  };

  // check for Enter key press
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    // ignore if the key pressed is not Enter
    if (event.key !== "Enter") {
      return;
    }

    // console.log("enter pressed")
    
    runCommand(input);
    setInput("");
  };

  return (
    <div
      ref={scrollRef}
      onClick={() => inputRef.current?.focus()}
      className="min-h-0 flex-1 cursor-text overflow-y-auto px-3 py-2 font-mono text-xs leading-relaxed text-editor-foreground"
    >
      {/* <pre className="whitespace-pre-wrap">{BOOT_TEXT}</pre> */}

      {history.map((entry, index) => (
        <div key={index}>
          <div className="flex items-center gap-1">
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
