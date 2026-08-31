export default function ResourceCard({ badge, badgeColor, gradient, title, desc, date, readTime, icon }) {
  return (
    <div className="resource-card">
      <div className="resource-card-art" style={{ background: gradient }}>
        {badge && <span className="resource-card-badge" style={{ color: badgeColor }}>{badge}</span>}
        <span className="resource-card-icon">{icon}</span>
      </div>
      <div className="resource-card-info">
        <h4>{title}</h4>
        {desc && <p>{desc}</p>}
        <div className="resource-card-meta">
          {date && <span>{date}</span>}
          {date && readTime && <span>·</span>}
          {readTime && <span>{readTime}</span>}
        </div>
      </div>
    </div>
  );
}