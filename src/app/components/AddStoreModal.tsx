import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

interface AddStoreModalProps {
  open: boolean;
  onClose: () => void;
}

export function AddStoreModal({ open, onClose }: AddStoreModalProps) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    distance: "",
    healthScore: "",
    basketCost: "",
    items: [{ name: "", price: "" }],
  });
  const [submitted, setSubmitted] = useState(false);

  function addItem() {
    setForm((f) => ({ ...f, items: [...f.items, { name: "", price: "" }] }));
  }

  function removeItem(i: number) {
    setForm((f) => ({ ...f, items: f.items.filter((_, idx) => idx !== i) }));
  }

  function updateItem(i: number, field: "name" | "price", value: string) {
    setForm((f) => {
      const items = [...f.items];
      items[i] = { ...items[i], [field]: value };
      return { ...f, items };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setForm({ name: "", address: "", distance: "", healthScore: "", basketCost: "", items: [{ name: "", price: "" }] });
    }, 1800);
  }

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(4px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 22,
          padding: 32,
          width: "100%",
          maxWidth: 520,
          boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 3 }}>Add New Store</h2>
            <p style={{ fontSize: 13, color: "#6b7280" }}>Add a store and its affordable food items to the NutriSnap directory.</p>
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

        {submitted ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#f0fdf4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
              }}
            >
              ✅
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>Store added!</div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>The store is now live in the NutriSnap directory.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Store name */}
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>
                Store Name *
              </label>
              <input
                required
                placeholder="e.g. Store F"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                style={inputStyle}
              />
            </div>

            {/* Address */}
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>
                Address *
              </label>
              <input
                required
                placeholder="e.g. 902 Walnut Blvd, Mellow"
                value={form.address}
                onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                style={inputStyle}
              />
            </div>

            {/* Distance + Health Score row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>
                  Distance (mi)
                </label>
                <input
                  placeholder="e.g. 1.2 mi"
                  value={form.distance}
                  onChange={(e) => setForm((f) => ({ ...f, distance: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>
                  Health Score (0–100)
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  placeholder="e.g. 82"
                  value={form.healthScore}
                  onChange={(e) => setForm((f) => ({ ...f, healthScore: e.target.value }))}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Basket cost */}
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>
                Estimated Basket Cost ($)
              </label>
              <input
                placeholder="e.g. 26.50"
                value={form.basketCost}
                onChange={(e) => setForm((f) => ({ ...f, basketCost: e.target.value }))}
                style={inputStyle}
              />
            </div>

            {/* Items */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Affordable Items</label>
                <button
                  type="button"
                  onClick={addItem}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#4d7c0f",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <Plus size={13} /> Add item
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {form.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input
                      placeholder="Item name"
                      value={item.name}
                      onChange={(e) => updateItem(i, "name", e.target.value)}
                      style={{ ...inputStyle, flex: 2 }}
                    />
                    <input
                      placeholder="$0.00"
                      value={item.price}
                      onChange={(e) => updateItem(i, "price", e.target.value)}
                      style={{ ...inputStyle, flex: 1 }}
                    />
                    {form.items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem(i)}
                        style={{
                          width: 32,
                          height: 40,
                          border: "none",
                          background: "#fef2f2",
                          borderRadius: 8,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Trash2 size={13} color="#ef4444" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: 12,
                  border: "1.5px solid #e5e7eb",
                  background: "transparent",
                  color: "#374151",
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  flex: 2,
                  padding: "12px",
                  borderRadius: 12,
                  border: "none",
                  background: "#84CC16",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(132, 204, 22, 0.35)",
                }}
              >
                Add Store
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 10,
  border: "1.5px solid #e5e7eb",
  background: "#f9fafb",
  fontSize: 14,
  color: "#111827",
  outline: "none",
  boxSizing: "border-box",
};
