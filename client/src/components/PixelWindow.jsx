// Retro OS-style window: lavender title bar, two dots, hard offset shadow.
export default function PixelWindow({ title, children, className = '' }) {
  return (
    <section className={`pixel-window ${className}`}>
      <header className="pixel-titlebar">
        <span className="pixel-title">{title}</span>
        <span className="pixel-dots" aria-hidden="true">
          <i />
          <i />
        </span>
      </header>
      <div className="pixel-body">{children}</div>
    </section>
  );
}
