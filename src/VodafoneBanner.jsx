import { ReactComponent as VodafoneLogoSVG } from './VF_Logo.svg';

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
            <VodafoneLogoSVG key={i} width="120" height="40" />
          ))}
        </div>
      </div>
  );
}