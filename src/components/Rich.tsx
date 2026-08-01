// Turns **een stuk tekst** into a highlight. Plain string splitting, never innerHTML,
// so project copy can emphasise a phrase without opening a markup hole.
export function Rich({ text, as = "strong" }: { text: string; as?: "strong" | "grad" }) {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          as === "grad" ? (
            <span className="g" key={i}>
              {part}
            </span>
          ) : (
            <strong key={i}>{part}</strong>
          )
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
