import { useState } from "react";
import { X, ExternalLink, Flame, BookOpen, ChevronRight, Search } from "lucide-react";
import { MONTH_PLAN, RECIPES } from "./data";

interface MonthPlanModalProps {
  open: boolean;
  onClose: () => void;
}

export function MonthPlanModal({ open, onClose }: MonthPlanModalProps) {
  const [activeWeek, setActiveWeek] = useState<"Week 1" | "Week 2" | "Week 3" | "Week 4">("Week 1");
  const [recipeSearch, setRecipeSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState<typeof RECIPES[0] | null>(null);

  if (!open) return null;

  const currentWeekPlan = MONTH_PLAN[activeWeek];
  const weeklyCost = currentWeekPlan.reduce((acc, d) => acc + parseFloat(d.cost.replace("$", "")), 0).toFixed(2);
  const weeklyCalories = currentWeekPlan.reduce((acc, d) => acc + d.breakfast.cal + d.lunch.cal + d.dinner.cal, 0);
  const avgDailyCalories = Math.round(weeklyCalories / 7);

  const filteredRecipes = RECIPES.filter((r) =>
    r.name.toLowerCase().includes(recipeSearch.toLowerCase()) ||
    r.ingredients.some((i) => i.toLowerCase().includes(recipeSearch.toLowerCase()))
  );

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
        padding: 24,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 24,
          width: "100%",
          maxWidth: 1080,
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
          border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "24px 32px",
            borderBottom: "1px solid #f1f5f1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#ffffff",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
              <span style={{ fontSize: 18 }}>📅</span>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "#111827", letterSpacing: "-0.5px" }}>
                Monthly Nutritional Plan
              </h2>
            </div>
            <p style={{ fontSize: 13, color: "#6b7280" }}>
              Optimized budget eating calendar for Mellow, CA · June 2026
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "none",
              background: "#f4f6f4",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e5e7eb")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f4f6f4")}
          >
            <X size={18} color="#4b5563" />
          </button>
        </div>

        {/* Content body split */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          
          {/* Left panel: Calendar & Week Selector (70%) */}
          <div
            style={{
              flex: 7,
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid #f1f5f1",
              background: "#fcfdfc",
              padding: "24px 32px",
              overflowY: "auto",
            }}
          >
            {/* Week Selector & Stat Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {/* Week Tabs */}
              <div
                style={{
                  display: "flex",
                  background: "#f1f5f1",
                  borderRadius: 14,
                  padding: 4,
                  gap: 2,
                }}
              >
                {(["Week 1", "Week 2", "Week 3", "Week 4"] as const).map((wk) => {
                  const active = activeWeek === wk;
                  return (
                    <button
                      key={wk}
                      onClick={() => setActiveWeek(wk)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: 10,
                        border: "none",
                        fontSize: 13,
                        fontWeight: active ? 700 : 500,
                        background: active ? "#ffffff" : "transparent",
                        color: active ? "#4d7c0f" : "#6b7280",
                        cursor: "pointer",
                        boxShadow: active ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                        transition: "all 0.15s",
                      }}
                    >
                      {wk}
                    </button>
                  );
                })}
              </div>

              {/* Stats Summary */}
              <div style={{ display: "flex", gap: 24 }}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", fontWeight: 600 }}>
                    Est. Cost
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#84CC16" }}>${weeklyCost}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", fontWeight: 600 }}>
                    Daily Avg
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#111827" }}>
                    {avgDailyCalories} <span style={{ fontSize: 12, fontWeight: 500, color: "#6b7280" }}>kcal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {currentWeekPlan.map((d) => {
                const totalCal = d.breakfast.cal + d.lunch.cal + d.dinner.cal;
                return (
                  <div
                    key={d.day}
                    style={{
                      background: "#ffffff",
                      borderRadius: 16,
                      border: "1px solid rgba(0,0,0,0.05)",
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
                    }}
                  >
                    {/* Day Badge */}
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 12,
                        background: "#f0fdf4",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: 14, fontWeight: 800, color: "#4d7c0f" }}>{d.day}</span>
                      <span style={{ fontSize: 10, color: "#84cc16", fontWeight: 600 }}>{d.cost}</span>
                    </div>

                    {/* Meal details */}
                    <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                      {/* Breakfast */}
                      <div
                        onClick={() => {
                          const recipe = RECIPES.find((r) => r.name === d.breakfast.name);
                          if (recipe) setSelectedRecipe(recipe);
                        }}
                        style={mealItemStyle}
                      >
                        <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 600 }}>🌅 BREAKFAST</div>
                        <div style={mealNameStyle}>{d.breakfast.name}</div>
                        <div style={mealCalStyle}>{d.breakfast.cal} kcal</div>
                      </div>

                      {/* Lunch */}
                      <div
                        onClick={() => {
                          const recipe = RECIPES.find((r) => r.name === d.lunch.name);
                          if (recipe) setSelectedRecipe(recipe);
                        }}
                        style={mealItemStyle}
                      >
                        <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 600 }}>☀️ LUNCH</div>
                        <div style={mealNameStyle}>{d.lunch.name}</div>
                        <div style={mealCalStyle}>{d.lunch.cal} kcal</div>
                      </div>

                      {/* Dinner */}
                      <div
                        onClick={() => {
                          const recipe = RECIPES.find((r) => r.name === d.dinner.name);
                          if (recipe) setSelectedRecipe(recipe);
                        }}
                        style={mealItemStyle}
                      >
                        <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 600 }}>🌙 DINNER</div>
                        <div style={mealNameStyle}>{d.dinner.name}</div>
                        <div style={mealCalStyle}>{d.dinner.cal} kcal</div>
                      </div>
                    </div>

                    {/* Day Total info */}
                    <div style={{ textAlign: "right", flexShrink: 0, paddingLeft: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 3, justifyContent: "flex-end" }}>
                        <Flame size={12} color="#f59e0b" />
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{totalCal}</span>
                      </div>
                      <span style={{ fontSize: 11, color: "#9ca3af" }}>kcal total</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right panel: Recipes Hub (30%) */}
          <div
            style={{
              flex: 3,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {selectedRecipe ? (
              /* Recipe Detail View */
              <div
                style={{
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflowY: "auto",
                }}
              >
                <button
                  onClick={() => setSelectedRecipe(null)}
                  style={{
                    alignSelf: "flex-start",
                    background: "none",
                    border: "none",
                    color: "#4d7c0f",
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: "pointer",
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  ← Back to Index
                </button>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#111827", marginBottom: 6 }}>
                  {selectedRecipe.name}
                </h3>
                <a
                  href={selectedRecipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "#84CC16",
                    fontWeight: 600,
                    textDecoration: "none",
                    marginBottom: 20,
                  }}
                >
                  View full recipe on AllRecipes <ExternalLink size={13} />
                </a>

                <div style={{ marginBottom: 20 }}>
                  <h4 style={{ fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 8, letterSpacing: "0.5px" }}>
                    INGREDIENTS NEEDED
                  </h4>
                  <ul style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {selectedRecipe.ingredients.map((ing, i) => (
                      <li key={i} style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.4 }}>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 8, letterSpacing: "0.5px" }}>
                    INSTRUCTIONS
                  </h4>
                  <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.6, margin: 0, background: "#f9fafb", padding: 14, borderRadius: 12, border: "1px solid #f1f5f1" }}>
                    {selectedRecipe.instructions}
                  </p>
                </div>
              </div>
            ) : (
              /* Recipe Search & List View */
              <div
                style={{
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                  <BookOpen size={16} color="#4d7c0f" />
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>Recipe Finder</h3>
                </div>

                {/* Recipe search */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#f4f6f4",
                    borderRadius: 12,
                    padding: "8px 12px",
                    marginBottom: 16,
                    border: "1px solid rgba(0,0,0,0.02)",
                  }}
                >
                  <Search size={14} color="#6b7280" />
                  <input
                    type="text"
                    placeholder="Search ingredients..."
                    value={recipeSearch}
                    onChange={(e) => setRecipeSearch(e.target.value)}
                    style={{
                      border: "none",
                      background: "transparent",
                      fontSize: 13,
                      outline: "none",
                      width: "100%",
                      color: "#111827",
                    }}
                  />
                </div>

                {/* Recipe List */}
                <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
                  {filteredRecipes.map((recipe) => (
                    <div
                      key={recipe.name}
                      onClick={() => setSelectedRecipe(recipe)}
                      style={{
                        padding: "12px 14px",
                        borderRadius: 12,
                        background: "#f9fafb",
                        border: "1px solid #f1f5f1",
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background = "#f0fdf4";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#dcfce7";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background = "#f9fafb";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#f1f5f1";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 4,
                        }}
                      >
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>
                          {recipe.name}
                        </span>
                        <ChevronRight size={13} color="#9ca3af" />
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#6b7280",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {recipe.ingredients.join(", ")}
                      </div>
                    </div>
                  ))}
                  {filteredRecipes.length === 0 && (
                    <div style={{ textAlign: "center", padding: "24px 0", fontSize: 13, color: "#9ca3af" }}>
                      No matching recipes found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

const mealItemStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: 10,
  transition: "background 0.1s",
};

const mealNameStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#111827",
  marginTop: 2,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const mealCalStyle: React.CSSProperties = {
  fontSize: 11,
  color: "#9ca3af",
  marginTop: 1,
};
