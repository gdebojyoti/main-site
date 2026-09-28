import type { ReactNode } from "react";

export type TerminalCommand = {
  /** the command to run; case-insensitive */
  command: string;
  /** shown only the first time the command is run */
  result?: ReactNode;
  /** wipes the visible history; no output is shown */
  clearsTerminal?: boolean;
};

export const defaultOutput = (command: string) => `'${command}' is not recognized or disabled`;

export const commands: TerminalCommand[] = [
  {
    command: "cls",
    clearsTerminal: true
  },
  {
    command: "clear",
    clearsTerminal: true
  },
  {
    command: "whoami",
    result: <span><span className="line-through">I am spider-man</span> {defaultOutput("whoami")}</span>
  }
];

export const easterEggOutput = [
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you"
]

export const maxInvalidCommandCount = 5;

/*
 * rules
 * 1. Default output is "${command} is not recognized or disabled"
 * 2. Output for "whoami" is "~I am spider-man~", concatenated by `defaultOutput`, on the same line;
 *    for subsequent "whoami" commands, show only `defaultOutput`
 * 3. Output for "cls" or "clear" is to clear the terminal, and no output is shown;
 *    clearing wipes the screen only - the invalid count and the easter egg progress survive it
 * 4. Pressing enter with an empty input should simply add a new line to the terminal, and no output is shown
 * 5. Maintain a count of invalid commands - every command that falls back to `defaultOutput` counts,
 *    including repeat "whoami" commands. From the `maxInvalidCommandCount`-th invalid command onwards,
 *    output one `easterEggOutput` value per invalid command, in order, instead of `defaultOutput`.
 *    Once the array is exhausted, keep showing `defaultOutput`; easter egg will never be shown again
 */
