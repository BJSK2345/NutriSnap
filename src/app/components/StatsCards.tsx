import { DollarSign, Heart, Store, TrendingDown } from "lucide-react";

const stats = [
  {
    label: "Budget Remaining",
    value: "$117",
    sub: "of $280 monthly",
    icon: DollarSign,
    color: "#84CC16",
    bg: "#f0fdf4",
    trend: "+$12 from last week",
    trendUp: true,
  },
  {
    label: "Nutrition Score",
    value: "87/100",
    sub: "Above average",
    icon: Heart,
    color: "#22c55e",
    bg: "#f0fdf4",
    trend: "+5 pts this week",
    trendUp: true,
  },
  {
    label: "Nearby Stores",
    value: "5",
    sub: "Within 2.0 miles",
    icon: Store,
    color: "#3b82f6",
    bg: "#eff6ff",
    trend: "All accepting EBT",
    trendUp: true,
  },
  {
    label: "Weekly Savings",
    value: "$47",
    sub: "vs. avg. grocery costs",
    icon: TrendingDown,
    color: "#f59e0b",
    bg: "#fffbeb",
    trend: "Best week yet!",
    trendUp: true,
  },
];

export function StatsCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
      }}
    >
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            style={{
              background: "#ffffff",
              borderRadius: 18,
              padding: "20px 22px",
              boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
              <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>{s.label}</span>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: s.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={17} color={s.color} strokeWidth={2} />
              </div>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#111827", lineHeight: 1, marginBottom: 4 }}>
              {s.value}
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 10 }}>{s.sub}</div>
            <div
              style={{
                fontSize: 12,
                color: s.color,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 10 }}>↑</span>
              {s.trend}
            </div>
          </div>
        );
      })}
    </div>
  );
}
