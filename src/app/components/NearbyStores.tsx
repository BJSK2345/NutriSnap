import { MapPin, ArrowRight, ShoppingBasket } from "lucide-react";
import { STORES } from "./data";

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 85 ? "#84CC16" : score >= 70 ? "#f59e0b" : "#ef4444";
  const bg = score >= 85 ? "#f0fdf4" : score >= 70 ? "#fffbeb" : "#fef2f2";
  return (
    <span
      style={{
        fontSize: 12,
        fontWeight: 700,
        color,
        background: bg,
        padding: "3px 9px",
        borderRadius: 20,
        display: "inline-block",
      }}
    >
      {score}% healthy
    </span>
  );
}

export function NearbyStores({ onViewStore }: { onViewStore?: (store: any) => void }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 2 }}>Nearby Stores</h3>
          <p style={{ fontSize: 13, color: "#6b7280" }}>Mellow, CA · Sorted by distance</p>
        </div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: 13,
            color: "#4d7c0f",
            fontWeight: 600,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          See all <ArrowRight size={14} />
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {STORES.map((store) => (
          <div
            key={store.id}
            style={{
              background: "#ffffff",
              borderRadius: 18,
              padding: 20,
              boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 8px rgba(0,0,0,0.06)";
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>{store.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 3 }}>
                  <MapPin size={11} color="#9ca3af" />
                  <span style={{ fontSize: 12, color: "#9ca3af" }}>{store.address}</span>
                </div>
              </div>
              <span
                style={{
                  fontSize: 12,
                  color: "#6b7280",
                  background: "#f4f6f4",
                  padding: "3px 9px",
                  borderRadius: 20,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {store.distance}
              </span>
            </div>

            <ScoreBadge score={store.healthScore} />

            {/* Food list */}
            <div>
              <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, marginBottom: 6 }}>
                AFFORDABLE ITEMS
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {store.affordable.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: 11,
                      color: "#374151",
                      background: "#f4f6f4",
                      padding: "4px 9px",
                      borderRadius: 8,
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <ShoppingBasket size={14} color="#9ca3af" />
                <span style={{ fontSize: 13, color: "#6b7280" }}>
                  Est. basket:{" "}
                  <strong style={{ color: "#111827" }}>{store.basketCost}</strong>
                </span>
              </div>
              <button
                onClick={() => onViewStore && onViewStore(store)}
                style={{
                  padding: "7px 14px",
                  borderRadius: 10,
                  border: "none",
                  background: "#84CC16",
                  color: "#ffffff",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#65a30d";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#84CC16";
                }}
              >
                View Store
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
