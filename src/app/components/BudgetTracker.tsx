import { BUDGET } from "./data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const weeklyData = BUDGET.weeklySpend.map((v, i) => ({
  week: `Wk ${i + 1}`,
  amount: v,
}));

export function BudgetTracker() {
  const pct = Math.round((BUDGET.spent / BUDGET.monthly) * 100);

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
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 2 }}>Budget Tracker</h3>
        <p style={{ fontSize: 13, color: "#6b7280" }}>June 2026 · Mellow, CA</p>
      </div>

      {/* Main stats */}
      <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
        <div style={{ flex: 1, padding: "14px 16px", borderRadius: 12, background: "#f9fafb" }}>
          <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, marginBottom: 4 }}>SPENT</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#111827" }}>${BUDGET.spent}</div>
        </div>
        <div style={{ flex: 1, padding: "14px 16px", borderRadius: 12, background: "#f0fdf4" }}>
          <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, marginBottom: 4 }}>REMAINING</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#4d7c0f" }}>${BUDGET.remaining}</div>
        </div>
        <div style={{ flex: 1, padding: "14px 16px", borderRadius: 12, background: "#fffbeb" }}>
          <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, marginBottom: 4 }}>SAVED</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#d97706" }}>${BUDGET.avgSavings}</div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>Monthly Budget</span>
          <span style={{ fontSize: 13, color: "#6b7280" }}>
            ${BUDGET.spent} / ${BUDGET.monthly}
          </span>
        </div>
        <div style={{ height: 10, borderRadius: 999, background: "#f1f5f1", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              borderRadius: 999,
              background: pct > 80 ? "#ef4444" : "#84CC16",
              transition: "width 0.5s ease",
            }}
          />
        </div>
        <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 5 }}>{pct}% used</div>
      </div>

      {/* Weekly chart */}
      <div>
        <div style={{ fontSize: 13, color: "#374151", fontWeight: 500, marginBottom: 12 }}>
          Weekly Spending
        </div>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart data={weeklyData} barSize={28}>
            <XAxis
              dataKey="week"
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip
              cursor={false}
              contentStyle={{
                borderRadius: 10,
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                fontSize: 13,
              }}
              formatter={(v: number) => [`$${v}`, "Spent"]}
            />
            <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
              {weeklyData.map((entry, i) => (
                <Cell key={`cell-${entry.week}`} fill={i === weeklyData.length - 1 ? "#84CC16" : "#d1fae5"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Savings tip */}
      <div
        style={{
          marginTop: 16,
          padding: "12px 14px",
          borderRadius: 12,
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
        }}
      >
        <span style={{ fontSize: 13, color: "#166534" }}>
          💡 You're saving <strong>${BUDGET.avgSavings}/mo</strong> compared to the average family in your area!
        </span>
      </div>
    </div>
  );
}
