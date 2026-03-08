
const VodafoneLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <svg width="32" height="32" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" fill="#E60000"/>
      <path d="M50 18 C32 18 18 32 18 50 C18 68 32 82 50 82 C68 82 82 68 82 50 C82 32 68 18 50 18Z M50 72 C37 72 27 62 27 49 C27 44 28.5 39.5 31 36 L64 69 C60.5 71 55.5 72 50 72Z M50 28 C63 28 73 38 73 51 C73 56 71.5 60.5 69 64 L36 31 C39.5 29 44.5 28 50 28Z" fill="white"/>
    </svg>
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontSize: "8px", color: "#E60000", fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 400 }}>Together we can</div>
      <div style={{ fontSize: "16px", fontWeight: "700", color: "#E60000", fontFamily: "'Helvetica Neue', sans-serif" }}>vodafone</div>
    </div>
  </div>
);

export default function VodafoneBanner({ title = "Anuali", titleAlignment = "right", logoCount = 3 }) {
  return (
    <div>
        {/* Title row */}
        <div style={{ textAlign: titleAlignment, marginBottom: "22px", position: "relative", zIndex: 1 }}>
          <span style={{
            fontSize: "38px",
            fontWeight: "900",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            color: "#111",
            letterSpacing: "-1.5px",
          }}>
            {title}
          </span>
          <span style={{ color: "#726DA8", fontSize: "54px", fontWeight: "600", marginLeft: "3px" }}>|</span>
        </div>

        {/* Logos row */}
        <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          {Array.from({ length: logoCount }).map((_, i) => (
            <VodafoneLogo key={i} />
          ))}
        </div>
      </div>
  );
} 
