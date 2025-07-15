export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0B] overflow-hidden">
      <iframe
        src="/portfolio.pdf"
        width="100%"
        height="800px"
        style={{ border: "none" }}
      ></iframe>
    </main>
  );
}
