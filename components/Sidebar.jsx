import { useState } from "react";
import { useTheme } from "../components/ThemeContext";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("Favorites");
  const [activeTabItem, setActiveTabItem] = useState("Overview");
  const [activeDashboardItem, setActiveDashboardItem] = useState("Overview");
  const [activePageItem, setActivePageItem] = useState("");
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const tabItems = {
    Favorites: ["Overview", "Projects"],
    Recently: ["Overview", "Projects"],
  };

  const dashboards = [
    { name: "Overview", icon: "/OverView.svg" },
    { name: "eCommerce", icon: "/ShoppingBagOpen.svg" },
    { name: "Projects", icon: "/Folder.svg" },
  ];

  const userProfileSubItems = [
    "OverView",
    "Projects",
    "Campaigns",
    "Documents",
    "Followers",
  ];

  const pageItems = [
    { name: "Account", icon: "/personal.svg" },
    { name: "Corporate", icon: "/Corporate.svg" },
    { name: "Blog", icon: "/Blog.svg" },
    { name: "Social", icon: "/Social.svg" },
  ];

  const renderListItem = (name, icon, isActive, onClick) => (
    <li
      key={name}
      onClick={onClick}
      className={`flex items-center rounded px-3 py-2 cursor-pointer transition-colors ${
        isActive
          ? `${isDark ? "bg-gray-700 text-white" : "bg-[#F1F1F1] text-black"} font-medium`
          : `${isDark ? "text-gray-300" : "text-[#000000CC]"}`
      }`}
    >
      <img
        src="/ArrowRight.svg"
        alt="Arrow Right"
        className={`w-3 h-3 mr-2 shrink-0 transition-opacity duration-200 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      />
      <img src={icon} alt={name} className="w-5 h-5 mr-2 shrink-0" />
      <span>{name}</span>
    </li>
  );

  const renderPageItem = (name, icon, isActive, onClick) => (
    <li
      key={name}
      onClick={onClick}
      className={`flex items-center rounded px-3 py-2 cursor-pointer transition-colors ${
        isActive
          ? `${isDark ? "text-white font-medium" : "text-black font-medium"}`
          : `${isDark ? "text-gray-300" : "text-[#000000CC]"}`
      }`}
    >
      <img
        src="/ArrowRight.svg"
        alt="Arrow Right"
        className={`w-3 h-3 mr-2 shrink-0 transition-opacity duration-200 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      />
      <img src={icon} alt={name} className="w-5 h-5 mr-2 shrink-0" />
      <span>{name}</span>
    </li>
  );

  const renderTabItem = (item) => (
    <li
      key={item}
      onClick={() => setActiveTabItem(item)}
      className="px-4 py-2 flex items-center cursor-pointer rounded"
    >
      <span
        className={`w-2 h-2 rounded-full mr-2 ${
          activeTabItem === item
            ? isDark
              ? "bg-gray-400"
              : "bg-[#00000077]"
            : "bg-transparent"
        }`}
      />
      <span className={`${isDark ? "text-gray-300" : ""}`}>{item}</span>
    </li>
  );

  return (
    <aside className={`w-56 ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}>
      <div
        className={`p-4 border-l h-auto ${
          isDark ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/Frame.svg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span
            className={`text-sm font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            ByeWind
          </span>
        </div>

        {/* Tab Navigation */}
        <ul
          className={`flex gap-6 mb-4 px-2 select-none ${
            isDark ? "text-gray-500" : "text-[#00000055]"
          }`}
        >
          {Object.keys(tabItems).map((tab) => (
            <li
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveTabItem(tabItems[tab][0]);
              }}
              className={`cursor-pointer transition hover:opacity-90 ${
                activeTab === tab
                  ? isDark
                    ? "text-white font-semibold"
                    : "text-[#00000066] font-semibold"
                  : ""
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <nav className="mb-6">
          <ul className="space-y-1">{tabItems[activeTab].map(renderTabItem)}</ul>
        </nav>

        {/* Dashboards */}
        <h3
          className={`text-sm px-2 mb-2 ${
            isDark ? "text-gray-500" : "text-[#00000055]"
          }`}
        >
          Dashboards
        </h3>
        <ul className="space-y-1 select-none">
          {dashboards.map(({ name, icon }) =>
            renderListItem(
              name,
              icon,
              activeDashboardItem === name,
              () => setActiveDashboardItem(name)
            )
          )}
        </ul>

        {/* Pages */}
        <h3
          className={`text-sm px-2 mt-6 mb-2 ${
            isDark ? "text-gray-500" : "text-[#00000055]"
          }`}
        >
          Pages
        </h3>
        <ul className="space-y-1 select-none">
          <li>
            <div
              onClick={() => {
                setUserProfileOpen(!userProfileOpen);
                setActivePageItem("User Profile");
              }}
              className={`px-3 py-2 text-[16px] cursor-pointer rounded ${
                activePageItem === "User Profile"
                  ? isDark
                    ? "text-white font-medium"
                    : "text-black font-medium"
                  : isDark
                  ? "text-gray-400"
                  : "text-[#000000AA]"
              }`}
            >
              <div className="flex items-center">
                <img
                  src="/ArrowRight.svg"
                  alt="Arrow Right"
                  className={`w-3 h-3 mr-2 shrink-0 transition-transform duration-300 ${
                    userProfileOpen ? "rotate-90" : ""
                  } ${activePageItem === "User Profile" ? "opacity-0" : "opacity-100"}`}
                />
                <img
                  src="/IdentificationBadge.svg"
                  alt="User Profile"
                  className="w-5 h-5 mr-2 shrink-0"
                />
                <span>User Profile</span>
              </div>
            </div>
            {userProfileOpen && (
              <ul className="ml-8 mt-1 space-y-1">
                {userProfileSubItems.map((item) => (
                  <li
                    key={item}
                    onClick={() => setActivePageItem(item)}
                    className={`px-3 py-1 text-sm cursor-pointer rounded ${
                      activePageItem === item
                        ? isDark
                          ? "text-white font-medium"
                          : "text-black font-medium"
                        : isDark
                        ? "text-gray-400"
                        : "text-[#000000AA]"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
          {pageItems.map((item) =>
            renderPageItem(
              item.name,
              item.icon,
              activePageItem === item.name,
              () => setActivePageItem(item.name)
            )
          )}
        </ul>

        <div className="flex justify-center mt-16">
          <img src="/SnowUI.svg" alt="SnowUI" />
        </div>
      </div>
    </aside>
  );
}
