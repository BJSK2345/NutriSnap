import {
  LayoutDashboard,
  Store,
  CalendarDays,
  MapPin,
  Wallet,
  Settings,
  Leaf,
  Plus,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Store, label: "Stores", id: "stores" },
  { icon: CalendarDays, label: "Meal Planner", id: "meals" },
  { icon: MapPin, label: "Food Map", id: "map" },
  { icon: Wallet, label: "Budget Tracker", id: "budget" },
  { icon: Settings, label: "Settings", id: "settings" },
];

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onAddStore: () => void;
}

export function Sidebar({ activeTab, onTabChange, onAddStore }: SidebarProps) {
  return (
    <aside
      style={{
        width: 240,
        minWidth: 240,
        background: "#ffffff",
        borderRight: "1px solid rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        padding: "24px 16px",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: 10,
        boxShadow: "2px 0 12px rgba(0,0,0,0.04)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36, paddingLeft: 8 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "#84CC16",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Leaf size={20} color="#ffffff" />
        </div>
        <span style={{ fontWeight: 700, fontSize: 18, color: "#111827", letterSpacing: "-0.3px" }}>
          NutriSnap
        </span>
      </div>

      {/* Nav Items */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
        {navItems.map(({ icon: Icon, label, id }) => {
          const active = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 12px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                background: active ? "#f0fdf4" : "transparent",
                color: active ? "#4d7c0f" : "#6b7280",
                fontWeight: active ? 600 : 400,
                fontSize: 14,
                transition: "all 0.15s ease",
                width: "100%",
                textAlign: "left",
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLButtonElement).style.background = "#f9fafb";
                  (e.currentTarget as HTMLButtonElement).style.color = "#374151";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#6b7280";
                }
              }}
            >
              <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Add Button */}
      <button
        onClick={onAddStore}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
          padding: "12px",
          borderRadius: 14,
          border: "none",
          background: "#84CC16",
          color: "#ffffff",
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(132, 204, 22, 0.35)",
          transition: "all 0.15s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#65a30d";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#84CC16";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
        }}
      >
        <Plus size={18} />
        Add Store
      </button>
    </aside>
  );
}
