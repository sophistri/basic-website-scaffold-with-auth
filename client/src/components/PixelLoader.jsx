// Segmented "it's loading, hang tight" bar.
export default function PixelLoader({ label = 'Loading...' }) {
  return (
    <div className="pixel-loader" role="status">
      <p>{label}</p>
      <div className="pixel-bar">
        <div className="pixel-bar-fill" />
      </div>
    </div>
  );
}
