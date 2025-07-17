import "./App.css";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import MainContent from "../components/Maincontent";
import Notification from "../components/Notification";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Hidden on small screens */}
      <div className={`md:block ${isSidebarOpen ? 'block' : 'hidden'} fixed md:static z-20`}>
        <Sidebar />
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Border between sidebar and content - hidden on small screens */}
      <div className="hidden md:block border-l border-gray-300 h-auto" />

      {/* Right side: Header + MainContent */}
      <div className="flex flex-col  py-2  overflow-auto w-full">
        {/* Mobile menu toggle */}
        <div className="md:hidden mb-2">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-sm px-3 py-2 bg-gray-200 rounded"
          >
            ☰ Menu
          </button>
        </div>

        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <MainContent searchTerm={searchTerm} />
      </div>

      {/* Notification - hide on small screens */}
      <div className="hidden lg:block">
        <Notification />
      </div>
    </div>
  );
}

export default App;
