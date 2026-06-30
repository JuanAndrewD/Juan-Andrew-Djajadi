import './Background.css';

// Lightweight, dependency-free animated aurora/gradient backdrop.
export default function Background() {
  return (
    <div className="bg-aurora" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-blob bg-blob--1" />
      <div className="bg-blob bg-blob--2" />
      <div className="bg-blob bg-blob--3" />
      <div className="bg-noise" />
    </div>
  );
}
