import { MapPin, Navigation } from "lucide-react";
import { STORES } from "./data";

const PIN_POSITIONS = [
  { top: "30%", left: "35%" },
  { top: "50%", left: "55%" },
  { top: "65%", left: "30%" },
  { top: "25%", left: "65%" },
  { top: "70%", left: "68%" },
];

function getColor(score: number) {
  if (score >= 85) return "#84CC16";
  if (score >= 70) return "#f59e0b";
  return "#ef4444";
}

export function FoodMap() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        padding: 24,
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 2 }}>Food Map</h3>
          <p style={{ fontSize: 13, color: "#6b7280" }}>Mellow, CA · Interactive preview</p>
        </div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "7px 14px",
            borderRadius: 10,
            border: "1.5px solid #e5e7eb",
            background: "transparent",
            color: "#374151",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <Navigation size={13} />
          Open Map
        </button>
      </div>

      {/* Map mockup */}
      <div
        style={{
          position: "relative",
          borderRadius: 16,
          overflow: "hidden",
          height: 220,
          background: "linear-gradient(145deg, #e8f5e9 0%, #c8e6c9 30%, #dcedc8 60%, #e8f5e9 100%)",
        }}
      >
        {/* Grid lines for map feel */}
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.2 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={`${(i + 1) * 12.5}%`} x2="100%" y2={`${(i + 1) * 12.5}%`} stroke="#4caf50" strokeWidth="1" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={`${(i + 1) * 10}%`} y1="0" x2={`${(i + 1) * 10}%`} y2="100%" stroke="#4caf50" strokeWidth="1" />
          ))}
          {/* "Roads" */}
          <line x1="0" y1="45%" x2="100%" y2="45%" stroke="#aed581" strokeWidth="3" />
          <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#aed581" strokeWidth="3" />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#aed581" strokeWidth="2" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#aed581" strokeWidth="2" />
        </svg>

        {/* City label */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 12,
            fontSize: 11,
            fontWeight: 700,
            color: "#2d6a4f",
            background: "rgba(255,255,255,0.8)",
            padding: "3px 8px",
            borderRadius: 6,
            letterSpacing: "0.5px",
          }}
        >
          MELLOW, CA
        </div>

        {/* Store pins */}
        {STORES.map((store, i) => (
          <div
            key={store.id}
            title={`${store.name} · ${store.distance}`}
            style={{
              position: "absolute",
              top: PIN_POSITIONS[i].top,
              left: PIN_POSITIONS[i].left,
              transform: "translate(-50%, -100%)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <div
              style={{
                background: getColor(store.healthScore),
                borderRadius: "50% 50% 50% 0",
                transform: "rotate(-45deg)",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 3px 8px ${getColor(store.healthScore)}55`,
              }}
            >
              <MapPin size={13} color="#ffffff" style={{ transform: "rotate(45deg)" }} />
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#111827",
                background: "rgba(255,255,255,0.9)",
                padding: "2px 6px",
                borderRadius: 5,
                whiteSpace: "nowrap",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              }}
            >
              {store.name}
            </div>
          </div>
        ))}

        {/* You are here marker */}
        <div
          style={{
            position: "absolute",
            top: "47%",
            left: "41%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#3b82f6",
              border: "3px solid #ffffff",
              boxShadow: "0 0 0 4px rgba(59,130,246,0.25)",
            }}
          />
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 16, marginTop: 14, flexWrap: "wrap" }}>
        {[
          { color: "#84CC16", label: "High (85%+)" },
          { color: "#f59e0b", label: "Medium (70-84%)" },
          { color: "#ef4444", label: "Low (<70%)" },
          { color: "#3b82f6", label: "You" },
        ].map((l) => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.color }} />
            <span style={{ fontSize: 12, color: "#6b7280" }}>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
