export default function ThemeToggle({ isLight, onToggle }) {
  return (
    <button
      className={`theme-switch ${isLight ? 'theme-switch-on' : ''}`}
      onClick={onToggle}
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span className="theme-switch-thumb">{isLight ? '☀' : '☾'}</span>
    </button>
  );
}