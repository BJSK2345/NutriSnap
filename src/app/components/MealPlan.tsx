import { useState } from "react";
import { MEAL_PLAN } from "./data";
import { ChevronRight, Flame, ChevronDown } from "lucide-react";

const CALORIE_PRESETS = [1900, 2000, 2100, 2200, 2500];

function CalBar({ eaten, target }: { eaten: number; target: number }) {
  const pct = Math.min((eaten / target) * 100, 100);
  const over = eaten > target;
  const color = over ? "#ef4444" : pct > 85 ? "#f59e0b" : "#84CC16";
  return (
    <div>
      <div style={{ height: 7, borderRadius: 999, background: "#f1f5f1", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            borderRadius: 999,
            background: color,
            transition: "width 0.4s ease",
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
        <span style={{ fontSize: 11, color: over ? "#ef4444" : "#6b7280" }}>
          {over ? `${eaten - target} kcal over` : `${target - eaten} kcal remaining`}
        </span>
        <span style={{ fontSize: 11, color: "#6b7280" }}>
          {eaten} / {target} kcal
        </span>
      </div>
    </div>
  );
}

export function MealPlan() {
  const [selected, setSelected] = useState("Mon");
  const [calorieTarget, setCalorieTarget] = useState(2100);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const day = MEAL_PLAN.find((d) => d.day === selected) || MEAL_PLAN[0];
  const totalDayCal = day.breakfast.cal + day.lunch.cal + day.dinner.cal;
  const totalWeeklyCost = MEAL_PLAN.reduce(
    (acc, d) => acc + parseFloat(d.cost.replace("$", "")),
    0
  ).toFixed(2);

  const meals = [
    { label: "Breakfast", data: day.breakfast, emoji: "🌅" },
    { label: "Lunch", data: day.lunch, emoji: "☀️" },
    { label: "Dinner", data: day.dinner, emoji: "🌙" },
  ];

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
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 2 }}>7-Day Meal Plan</h3>
          <p style={{ fontSize: 13, color: "#6b7280" }}>Budget-optimized, nutritionist-approved</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 12, color: "#6b7280" }}>Weekly total</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#84CC16" }}>${totalWeeklyCost}</div>
        </div>
      </div>

      {/* Calorie target selector */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 14px",
          borderRadius: 12,
          background: "#f9fafb",
          border: "1px solid #e5e7eb",
          marginBottom: 16,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Flame size={15} color="#f59e0b" />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Daily Calorie Target</span>
        </div>
        <button
          onClick={() => setDropdownOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 12px",
            borderRadius: 8,
            border: "1.5px solid #e5e7eb",
            background: "#ffffff",
            color: "#111827",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          {calorieTarget} kcal <ChevronDown size={13} />
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              right: 0,
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              zIndex: 20,
              overflow: "hidden",
              minWidth: 160,
            }}
          >
            {CALORIE_PRESETS.map((cal) => (
              <button
                key={cal}
                onClick={() => { setCalorieTarget(cal); setDropdownOpen(false); }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "10px 16px",
                  border: "none",
                  background: cal === calorieTarget ? "#f0fdf4" : "transparent",
                  color: cal === calorieTarget ? "#4d7c0f" : "#374151",
                  fontWeight: cal === calorieTarget ? 700 : 400,
                  fontSize: 14,
                  cursor: "pointer",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (cal !== calorieTarget)
                    (e.currentTarget as HTMLButtonElement).style.background = "#f9fafb";
                }}
                onMouseLeave={(e) => {
                  if (cal !== calorieTarget)
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                {cal} kcal
                {cal === calorieTarget && <span style={{ fontSize: 12 }}>✓</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Day selector */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto" }}>
        {MEAL_PLAN.map((d) => {
          const dayCal = d.breakfast.cal + d.lunch.cal + d.dinner.cal;
          const over = dayCal > calorieTarget;
          return (
            <button
              key={d.day}
              onClick={() => setSelected(d.day)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                padding: "7px 12px",
                borderRadius: 10,
                border: "none",
                background: selected === d.day ? "#84CC16" : "#f4f6f4",
                color: selected === d.day ? "#ffffff" : "#6b7280",
                fontWeight: selected === d.day ? 600 : 400,
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
              }}
            >
              {d.day}
              <span style={{ fontSize: 10, opacity: 0.85, color: over && selected !== d.day ? "#ef4444" : "inherit" }}>
                {dayCal}
              </span>
            </button>
          );
        })}
      </div>

      {/* Daily calorie bar */}
      <div style={{ marginBottom: 16 }}>
        <CalBar eaten={totalDayCal} target={calorieTarget} />
      </div>

      {/* Meal rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {meals.map((meal) => {
          const calPct = Math.round((meal.data.cal / totalDayCal) * 100);
          return (
            <div
              key={meal.label}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 14px",
                borderRadius: 12,
                background: "#f9fafb",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 18 }}>{meal.emoji}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, marginBottom: 1 }}>
                  {meal.label}
                </div>
                <div style={{ fontSize: 14, color: "#111827", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {meal.data.name}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2, flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Flame size={12} color="#f59e0b" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>
                    {meal.data.cal}
                  </span>
                  <span style={{ fontSize: 11, color: "#9ca3af" }}>kcal</span>
                </div>
                <span style={{ fontSize: 11, color: "#9ca3af" }}>{calPct}% of day</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Day total + cost */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 14,
          padding: "12px 14px",
          borderRadius: 12,
          background: "#f0fdf4",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Flame size={14} color="#84CC16" />
          <span style={{ fontSize: 13, color: "#4d7c0f", fontWeight: 600 }}>
            {totalDayCal} kcal total
          </span>
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#4d7c0f" }}>{day.cost} / day</span>
      </div>

      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          width: "100%",
          marginTop: 14,
          padding: "11px",
          borderRadius: 12,
          border: "1.5px solid #84CC16",
          background: "transparent",
          color: "#4d7c0f",
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
          transition: "all 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#f0fdf4";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        }}
      >
        View Full Plan <ChevronRight size={15} />
      </button>
    </div>
  );
}
