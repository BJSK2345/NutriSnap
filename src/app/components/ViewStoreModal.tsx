import { X, MapPin, Phone, Clock, DollarSign, Navigation, CheckCircle2, AlertCircle } from "lucide-react";

interface StoreItem {
  name: string;
  price: string;
}

interface Store {
  id: string;
  name: string;
  address: string;
  distance: string;
  healthScore: number;
  basketCost: string;
  affordable: string[];
  items?: StoreItem[];
  lat: number;
  lng: number;
  hours?: string;
  phone?: string;
  ebtAccepted?: boolean;
}

interface ViewStoreModalProps {
  store: Store | null;
  onClose: () => void;
}

export function ViewStoreModal({ store, onClose }: ViewStoreModalProps) {
  if (!store) return null;

  const scoreColor = store.healthScore >= 85 ? "#84CC16" : store.healthScore >= 70 ? "#f59e0b" : "#ef4444";
  const scoreBg = store.healthScore >= 85 ? "#f0fdf4" : store.healthScore >= 70 ? "#fffbeb" : "#fef2f2";

  // Generate mock items if they are missing (e.g. for newly added stores)
  const displayItems = store.items || store.affordable.map((item) => ({
    name: item,
    price: "$1.49 / unit"
  }));

  // Define some mock directions based on the store name
  const directions = `Head north on Main St, turn right at ${store.address.split(",")[0]}. The store will be on your right in ${store.distance}.`;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(17, 24, 39, 0.45)",
        backdropFilter: "blur(6px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 22,
          padding: 32,
          width: "100%",
          maxWidth: 500,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          maxHeight: "90vh",
          overflowY: "auto",
          border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "#111827", marginBottom: 4, letterSpacing: "-0.5px" }}>
              {store.name}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#6b7280", fontSize: 13 }}>
              <MapPin size={13} color="#9ca3af" />
              <span>{store.address}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "none",
              background: "#f4f6f4",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={16} color="#6b7280" />
          </button>
        </div>

        {/* Badges & Metrics Row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
          {/* Health Score */}
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: scoreColor,
              background: scoreBg,
              padding: "4px 12px",
              borderRadius: 20,
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            🥗 {store.healthScore}% Healthy Options
          </span>

          {/* Distance */}
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#374151",
              background: "#f3f4f6",
              padding: "4px 12px",
              borderRadius: 20,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            📍 {store.distance} away
          </span>

          {/* EBT / SNAP status */}
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: store.ebtAccepted ? "#047857" : "#4b5563",
              background: store.ebtAccepted ? "#d1fae5" : "#e5e7eb",
              padding: "4px 12px",
              borderRadius: 20,
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {store.ebtAccepted ? (
              <>
                <CheckCircle2 size={12} color="#047857" />
                SNAP / EBT Accepted
              </>
            ) : (
              <>
                <AlertCircle size={12} color="#4b5563" />
                Cash / Card Only
              </>
            )}
          </span>
        </div>

        {/* Store Info Details */}
        <div
          style={{
            background: "#f9fafb",
            borderRadius: 14,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginBottom: 24,
            border: "1px solid #f1f5f1",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#374151" }}>
            <Clock size={15} color="#9ca3af" />
            <span>
              <strong>Hours:</strong> {store.hours || "8:00 AM - 9:00 PM"}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#374151" }}>
            <Phone size={15} color="#9ca3af" />
            <span>
              <strong>Phone:</strong> {store.phone || "(555) 123-4567"}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#374151" }}>
            <DollarSign size={15} color="#9ca3af" />
            <span>
              <strong>Avg Basket Cost:</strong> {store.basketCost}
            </span>
          </div>
        </div>

        {/* Price list of affordable items */}
        <div style={{ marginBottom: 24 }}>
          <h3
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#374151",
              marginBottom: 10,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Affordable Healthy Offerings
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {displayItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 14px",
                  background: "#ffffff",
                  border: "1.5px solid #f1f5f1",
                  borderRadius: 12,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{item.name}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#84CC16" }}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation / Directions */}
        <div style={{ marginBottom: 8 }}>
          <h3
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#374151",
              marginBottom: 10,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            How to Get There
          </h3>
          <div
            style={{
              padding: 14,
              background: "#eff6ff",
              border: "1px solid #dbeafe",
              borderRadius: 12,
              display: "flex",
              gap: 10,
            }}
          >
            <Navigation size={16} color="#2563eb" style={{ marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: "#1e3a8a", lineHeight: 1.5, margin: 0 }}>{directions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
