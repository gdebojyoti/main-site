"use client"; // Error boundaries must be Client Components

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>Error</h1>
      <p>{isDev ? error.message : "An unexpected error occurred."}</p>
      {isDev && error.stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{error.stack}</code>
        </pre>
      )}
      <button onClick={() => retry()}>Try again</button>
    </main>
  );
}
