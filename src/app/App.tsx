import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { StatsCards } from "./components/StatsCards";
import { MealPlan } from "./components/MealPlan";
import { NearbyStores } from "./components/NearbyStores";
import { BudgetTracker } from "./components/BudgetTracker";
import { FoodMap } from "./components/FoodMap";
import { AddStoreModal } from "./components/AddStoreModal";
import { ViewStoreModal } from "./components/ViewStoreModal";
import { MonthPlanModal } from "./components/MonthPlanModal";
import { NOTIFICATIONS, RECIPES, STORES } from "./components/data";
import { Leaf, ChevronRight, Bell, Search, XCircle, ChevronDown } from "lucide-react";

/* MARKER-MAKE-KIT-INVOKED */

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [modalOpen, setModalOpen] = useState(false);
  
  // Custom interactive states
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(true);
  const [notificationsList, setNotificationsList] = useState(NOTIFICATIONS);
  const [monthPlanOpen, setMonthPlanOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<any>(null);

  // Search filter logic
  const matchedRecipes = searchQuery
    ? RECIPES.filter(
        (r) =>
          r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.ingredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const matchedStoreItems = searchQuery
    ? STORES.flatMap((store) =>
        (store.items || [])
          .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((item) => ({ ...item, store }))
      )
    : [];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f4", fontFamily: "'Inter', sans-serif" }}>
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} onAddStore={() => setModalOpen(true)} />

      {/* Main content */}
      <main style={{ flex: 1, marginLeft: 240, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Top bar */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 9,
            background: "rgba(244,246,244,0.9)",
            backdropFilter: "blur(8px)",
            padding: "14px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <div>
            <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500, marginBottom: 1 }}>
              Mellow, CA · June 2026
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>
              {activeTab === "dashboard" && "Overview"}
              {activeTab === "stores" && "Nearby Stores"}
              {activeTab === "meals" && "Meal Planner"}
              {activeTab === "map" && "Food Map"}
              {activeTab === "budget" && "Budget Tracker"}
              {activeTab === "settings" && "Settings"}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            
            {/* Search bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 12,
                padding: "8px 14px",
                width: 220,
                position: "relative",
              }}
            >
              <Search size={14} color="#9ca3af" />
              <input
                type="text"
                placeholder="Search foods..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(e.target.value.length > 0);
                }}
                onFocus={() => {
                  if (searchQuery.length > 0) setSearchOpen(true);
                }}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: 13,
                  outline: "none",
                  width: "100%",
                  color: "#111827",
                  padding: 0,
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchOpen(false);
                  }}
                  style={{
                    border: "none",
                    background: "none",
                    padding: 0,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <XCircle size={14} color="#9ca3af" />
                </button>
              )}

              {/* Search dropdown suggestions */}
              {searchOpen && (
                <>
                  <div
                    style={{ position: "fixed", inset: 0, zIndex: 40 }}
                    onClick={() => setSearchOpen(false)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      width: 300,
                      background: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: 14,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      zIndex: 50,
                      maxHeight: 320,
                      overflowY: "auto",
                      padding: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {/* Recipes */}
                    {matchedRecipes.length > 0 && (
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", marginBottom: 6, letterSpacing: "0.5px" }}>
                          MATCHING RECIPES
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {matchedRecipes.map((r) => (
                            <div
                              key={r.name}
                              onClick={() => {
                                setMonthPlanOpen(true);
                                setSearchOpen(false);
                              }}
                              style={{
                                padding: "6px 8px",
                                borderRadius: 8,
                                background: "#f9fafb",
                                cursor: "pointer",
                                fontSize: 12,
                                color: "#111827",
                                fontWeight: 500,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.background = "#f0fdf4")}
                              onMouseLeave={(e) => (e.currentTarget.style.background = "#f9fafb")}
                            >
                              <span>📖 {r.name}</span>
                              <ChevronRight size={12} color="#9ca3af" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Store items */}
                    {matchedStoreItems.length > 0 && (
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", marginBottom: 6, letterSpacing: "0.5px" }}>
                          LOCAL STORES SELLING
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {matchedStoreItems.map((item, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setSelectedStore(item.store);
                                setSearchOpen(false);
                              }}
                              style={{
                                padding: "6px 8px",
                                borderRadius: 8,
                                background: "#f9fafb",
                                cursor: "pointer",
                                fontSize: 12,
                                color: "#111827",
                                fontWeight: 500,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.background = "#f0fdf4")}
                              onMouseLeave={(e) => (e.currentTarget.style.background = "#f9fafb")}
                            >
                              <span>🛒 {item.name}</span>
                              <span style={{ fontSize: 11, color: "#6b7280" }}>
                                {item.store.name} · {item.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {matchedRecipes.length === 0 && matchedStoreItems.length === 0 && (
                      <div style={{ fontSize: 12, color: "#6b7280", textAlign: "center", padding: "12px 0" }}>
                        No results for "{searchQuery}"
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Bell Notifications */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => {
                  setNotificationsOpen((o) => !o);
                  setHasNewNotifications(false);
                }}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Bell size={16} color="#6b7280" />
                {hasNewNotifications && (
                  <div
                    style={{
                      position: "absolute",
                      top: 7,
                      right: 7,
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#84CC16",
                      border: "1.5px solid #f4f6f4",
                    }}
                  />
                )}
              </button>

              {notificationsOpen && (
                <>
                  <div
                    style={{ position: "fixed", inset: 0, zIndex: 40 }}
                    onClick={() => setNotificationsOpen(false)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      width: 320,
                      background: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: 16,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                      zIndex: 50,
                      padding: "16px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, borderBottom: "1px solid #f1f5f1", paddingBottom: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>Notifications</span>
                      <button
                        onClick={() => {
                          setNotificationsList((prev) => prev.map((n) => ({ ...n, unread: false })));
                        }}
                        style={{ border: "none", background: "none", color: "#84CC16", fontSize: 11, fontWeight: 600, cursor: "pointer" }}
                      >
                        Mark all read
                      </button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, maxHeight: 240, overflowY: "auto" }}>
                      {notificationsList.map((notif) => (
                        <div
                          key={notif.id}
                          style={{
                            padding: "8px 10px",
                            borderRadius: 10,
                            background: notif.unread ? "#f0fdf4" : "#f9fafb",
                            border: "1px solid #f1f5f1",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 2 }}>
                            <span style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>
                              {notif.type === "promo" ? "🎁 " : notif.type === "success" ? "✅ " : "💡 "}
                              {notif.title}
                            </span>
                            <span style={{ fontSize: 10, color: "#9ca3af" }}>{notif.time}</span>
                          </div>
                          <p style={{ fontSize: 11, color: "#4b5563", lineHeight: 1.4, margin: 0 }}>
                            {notif.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Avatar */}
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: "#84CC16",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 13,
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              JD
            </div>
          </div>
        </header>

        {/* Page content */}
        <div style={{ flex: 1, padding: "28px 32px", display: "flex", flexDirection: "column", gap: 28 }}>
          {activeTab === "dashboard" && (
            <>
              {/* Hero */}
              <div
                style={{
                  background: "linear-gradient(135deg, #111827 0%, #1a2f0e 100%)",
                  borderRadius: 22,
                  padding: "36px 40px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 24,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative circles */}
                <div
                  style={{
                    position: "absolute",
                    top: -60,
                    right: -60,
                    width: 240,
                    height: 240,
                    borderRadius: "50%",
                    background: "rgba(132, 204, 22, 0.08)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -40,
                    right: 160,
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    background: "rgba(132, 204, 22, 0.05)",
                  }}
                />

                <div style={{ position: "relative", zIndex: 1, maxWidth: 500 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(132, 204, 22, 0.15)",
                      color: "#a3e635",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "5px 12px",
                      borderRadius: 20,
                      marginBottom: 16,
                      border: "1px solid rgba(132, 204, 22, 0.25)",
                    }}
                  >
                    <Leaf size={12} />
                    Mellow, CA · Food Desert Support Program
                  </div>
                  <h1
                    style={{
                      fontSize: 30,
                      fontWeight: 800,
                      color: "#ffffff",
                      lineHeight: 1.25,
                      marginBottom: 12,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Healthy Eating on a{" "}
                    <span style={{ color: "#a3e635" }}>Real Budget</span>
                  </h1>
                  <p style={{ fontSize: 15, color: "#9ca3af", lineHeight: 1.6, marginBottom: 24 }}>
                    Find affordable, nutritious foods near you in Mellow, CA. We help you plan meals,
                    track your budget, and discover healthy options at local stores — all within your budget.
                  </p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "12px 22px",
                        borderRadius: 12,
                        border: "none",
                        background: "#84CC16",
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: 14,
                        cursor: "pointer",
                        boxShadow: "0 4px 16px rgba(132, 204, 22, 0.4)",
                        transition: "all 0.15s",
                      }}
                      onClick={() => setActiveTab("meals")}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "#65a30d";
                        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "#84CC16";
                        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                      }}
                    >
                      Generate Meal Plan <ChevronRight size={15} />
                    </button>
                    <button
                      style={{
                        padding: "12px 22px",
                        borderRadius: 12,
                        border: "1.5px solid rgba(255,255,255,0.15)",
                        background: "transparent",
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                      onClick={() => setActiveTab("stores")}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      }}
                    >
                      Browse Stores
                    </button>
                  </div>
                </div>

                {/* Right side stat */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    minWidth: 190,
                  }}
                >
                  {[
                    { label: "Families Helped", value: "1,204" },
                    { label: "Avg Monthly Savings", value: "$47" },
                    { label: "Healthy Stores Nearby", value: "5" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 14,
                        padding: "12px 16px",
                      }}
                    >
                      <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 500, marginBottom: 2 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: "#ffffff" }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <StatsCards />

              {/* Meal plan + Food Map row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <MealPlan onViewFullPlan={() => setMonthPlanOpen(true)} />
                <FoodMap />
              </div>

              {/* Budget Tracker */}
              <BudgetTracker />

              {/* Nearby Stores */}
              <NearbyStores onViewStore={setSelectedStore} />
            </>
          )}

          {activeTab === "stores" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 4 }}>Nearby Stores</h2>
                <p style={{ fontSize: 14, color: "#6b7280" }}>5 stores found in Mellow, CA within 2 miles</p>
              </div>
              <NearbyStores onViewStore={setSelectedStore} />
            </div>
          )}

          {activeTab === "meals" && (
            <div style={{ maxWidth: 560 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 4 }}>Meal Planner</h2>
              <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 20 }}>Your personalized 7-day nutrition plan</p>
              <MealPlan onViewFullPlan={() => setMonthPlanOpen(true)} />
            </div>
          )}

          {activeTab === "map" && (
            <div style={{ maxWidth: 680 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 4 }}>Food Map</h2>
              <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 20 }}>Store locations and health scores in Mellow, CA</p>
              <FoodMap />
            </div>
          )}

          {activeTab === "budget" && (
            <div style={{ maxWidth: 560 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 4 }}>Budget Tracker</h2>
              <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 20 }}>Track your monthly food spending and savings</p>
              <BudgetTracker />
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 4 }}>Settings</h2>
              <p style={{ fontSize: 14, color: "#6b7280" }}>Manage your profile and preferences</p>
              <div
                style={{
                  marginTop: 24,
                  background: "#ffffff",
                  borderRadius: 18,
                  padding: 24,
                  maxWidth: 480,
                  boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {[
                  { label: "Name", value: "Jane Doe" },
                  { label: "Location", value: "Mellow, CA" },
                  { label: "Monthly Budget", value: "$280" },
                  { label: "Household Size", value: "3 people" },
                  { label: "EBT/SNAP Eligible", value: "Yes" },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 0",
                      borderBottom: "1px solid #f1f5f1",
                    }}
                  >
                    <span style={{ fontSize: 14, color: "#6b7280" }}>{row.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal overlays */}
      <AddStoreModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <MonthPlanModal open={monthPlanOpen} onClose={() => setMonthPlanOpen(false)} />
      <ViewStoreModal store={selectedStore} onClose={() => setSelectedStore(null)} />
    </div>
  );
}
